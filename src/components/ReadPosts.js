import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";

export default function ReadPosts({ userId }) {
  const [post, setPost] = useState([]);

  console.log(post);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/`, {
        withCredentials: true,
      })
      .then((res) => setPost(res.data));
  }, []);

  return (
    <div className="thread-container">
      {post[0]
        .sort((a, b) => {
          if (a.createdDate && b.createdDate) {
            return b.createdDate.localeCompare(a.createdDate);
          }
          return 0;
        })
        .map((post) => (
          <Posts key={post.id} post={post} userId={userId} />
        ))}
    </div>
  );
}
