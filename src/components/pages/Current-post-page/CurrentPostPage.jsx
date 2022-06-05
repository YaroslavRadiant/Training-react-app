import React from 'react';
import { useParams } from 'react-router-dom';

export default function CurrentPostPage() {
  const { id } = useParams();
  return (
    <div>
      <li>{id}</li>
    </div>
  );
}
