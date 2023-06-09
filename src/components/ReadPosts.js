import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";

export default function ReadPosts({ userId }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/`, {
        withCredentials: true,
      })
      .then((res) => setPost(res.data));
  }, []);

  return (
    <div className="thread-container">
      {post
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Posts key={post._id} post={post} userId={userId} />
        ))}
    </div>
  );
}
