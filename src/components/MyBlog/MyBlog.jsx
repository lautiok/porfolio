import React, { useEffect, useState } from 'react'
import './MyBlog.css'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const MyBlog = () => {
    const [t] = useTranslation('global')
    const [posts, setPosts] = useState([]);
    const [isShowingMore, setIsShowingMore] = useState(false);

    const api = import.meta.env.VITE_API;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(api);
                setPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching the posts:", error);
            }
        };
        fetchPosts();
    }, []);

    const firstPost = posts.length > 0 ? posts[0] : null;

    return (
        <div className='myblog-container'>
            <div id='myblog' className='myblog-title'><h2><i className="bi bi-book-fill"></i> {t('myblog.title')}</h2></div>
            <div className='myblog-content'>
                <h3>{t('myblog.lastpost')}</h3>
                {firstPost && (
                    <div className='blog-bl'>
                        <div className='blog-img'>
                            <img src={firstPost.media_url} alt="blog" />
                        </div>
                        <div className='blog-text'>
                            <div className='description-post'>
                                {isShowingMore ? firstPost.caption : firstPost.caption.slice(0, 100) + "..."}
                            </div>
                        </div>
                    </div>
                )}
                <div className='blog-bl-button'>
                    <button> <Link to="/blog">{t('myblog.button')}</Link></button>
                </div>
            </div>
        </div>
    )
}
