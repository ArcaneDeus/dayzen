// src/pages/Post.jsx
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>Post not found.</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <p>{post.content}</p>
    </article>
  );
}