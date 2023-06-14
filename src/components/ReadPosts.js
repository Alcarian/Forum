import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";

export default function ReadPosts({ userId }) {
  const [post, setPost] = useState([]);

  function getData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/`, {
        withCredentials: true,
      })
      .then((res) => setPost(res.data[0]));
  }
  useEffect(() => {
    getData();
  }, [post]);

  return (
    <div className="thread-container">
      {post
        .sort((a, b) => {
          if (a.createdDate && b.createdDate) {
            return b.createdDate.localeCompare(a.createdDate);
          }
          return 0;
        })
        .map((post) => (
          <Posts key={post.id} post={post} userId={userId} getData={getData} />
        ))}
    </div>
  );
}
