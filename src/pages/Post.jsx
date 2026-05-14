import { useParams, Link } from "react-router-dom";
import { posts, categories } from "../data/posts";

function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>Post not found.</p>;

  const cat = categories[post.category];

  return (
    <main className="container post-page">
      <Link to={`/category/${post.category}`} className="back-link">
        ← {cat.emoji} {cat.label}
      </Link>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </main>
  );
}

export default Post;