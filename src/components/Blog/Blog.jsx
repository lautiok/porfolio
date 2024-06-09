import React, { useEffect, useState } from "react";
import "./Blog.Module.css";
import { NavBar } from "../Navbar/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isloading , setIsloading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,thumbnail_url,timestamp,username&access_token=IGQWRNQS14dVFuWkNRajNzS2xZAUy1HZA210Q2I1RkdCZAW5jbE1hN0NLZADdOQy1hSTQzTWU0VHljY0t2bHJTQ3daWS1zekQtNHlEcGZAiUDR5RTVrTm9ZAZATFyOXhFclk4MmpsSWlEQTRFSDFpOHM2ZAVNYRXJQVHlFZAUUZD");
        setPosts(response.data.data);
        setIsloading(false)
      } catch (error) {
        console.error("Error fetching the posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <button className="flecha">
        <Link to="/"><i className="bi bi-arrow-left"></i></Link>
      </button>
      <div className="container-blog">
        <div className="posts">
            <div className="text">
            <h1 className="title-blog"> ¡Bienvenidos a mi Blog tech 💻🌎! </h1>
            <p className="posttotal"> Total de publicaciones: {posts.length}</p>
            </div>

          { isloading ? <p className="cargando">Cargando...</p> : posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-content">
                <div className="description">{post.caption}</div>
                {post.media_type === "IMAGE" && (
                  <img src={post.media_url} alt={post.caption} className="post-image" />
                )}
                {post.media_type === "CAROUSEL_ALBUM" && (
                  <img src={post.media_url} alt={post.caption} className="post-image" />
                )}
                <div className="date">{new Date(post.timestamp).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
