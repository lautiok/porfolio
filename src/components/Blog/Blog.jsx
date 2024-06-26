import React, { useEffect, useState } from "react";
import "./Blog.Module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowingMore, setIsShowingMore] = useState(false);

  const api = import.meta.env.VITE_API;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(api);
        setPosts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <button className="flecha">
        <Link to="/">
          <i className="bi bi-arrow-left"></i>
        </Link>
      </button>
      <div className="container-blog">
        <div className="posts">
          <div className="text">
            <h1 className="title-blog"> ¡Bienvenidos a mi Blog tech 💻🌎! </h1>
            <p className="posttotal"> Total de publicaciones: {posts.length}</p>
          </div>

          {isLoading ? (
            <p className="cargando">Cargando...</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post">
                <div className="post-content">
                  <div className="description-post">
                    {isShowingMore ? post.caption : post.caption.slice(0, 100) + "..."}
                    {post.caption.length > 100 && (
                      <button className="ver-mas" onClick={() => setIsShowingMore(!isShowingMore)}>
                        {isShowingMore ? "Ver menos" : "Ver más"}
                      </button>
                    )}
                  </div>
                  {post.media_type === "IMAGE" && <img src={post.media_url} alt={post.caption} className="post-image" />}
                  {post.media_type === "CAROUSEL_ALBUM" && <img src={post.media_url} alt={post.caption} className="post-image" />}
                  <div className="date">{new Date(post.timestamp).toLocaleDateString()}</div>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};
