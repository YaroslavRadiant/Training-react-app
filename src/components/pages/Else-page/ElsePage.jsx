import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ElsePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  async function fetchPosts() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(response.data);
    setPosts(response.data);
    console.log(posts);
  }
  console.log(posts);
  return (
    <div>
      {posts.map((el, key) => {
        return (
          <Link key={el.id} to={`/else/${el.id}`}>
            <li>{el.title}</li>
          </Link>
        );
      })}
    </div>
  );
}
