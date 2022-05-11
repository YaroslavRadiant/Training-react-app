import axios from "axios";
import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

export default function ElsePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  async function fetchPosts() {
    const response = await axios.get(
      "https://api.github.com/users/hacktivist123/repos"
    );
    console.log(response);
    setPosts(response.data);
    console.log(posts);
  }

  return (
    <div>
      <div>
        {posts.map((el , key) => {
          return <div>{el.name}</div>;
        })}
      </div>
    </div>
  );
}
