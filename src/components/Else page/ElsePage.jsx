import axios from "axios";
import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

export default function ElsePage() {
  const [posts, setPosts] = useState({
    list: null,
  });

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  async function fetchPosts() {
    const response = await axios.get(
      "https://api.github.com/users/hacktivist123/repos"
    );
    console.log(response);
    setPosts({ list: response });
    // console.log(response.data[1]);
    console.log(posts);
  }

  return (
    <div>
      <div>
        {/* {posts.map((el) => {
          <div>el</div>;
        })} */}
      </div>
    </div>
  );
}
