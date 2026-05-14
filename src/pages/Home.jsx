// src/pages/Home.jsx
import { posts } from "../data/posts";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>My Daily Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2><Link to={`/post/${post.slug}`}>{post.title}</Link></h2>
          <time>{post.date}</time>
          <p>{post.summary}</p>
        </article>
      ))}
    </main>
  );
}