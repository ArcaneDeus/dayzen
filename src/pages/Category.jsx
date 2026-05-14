import { useParams, Link } from "react-router-dom";
import { posts, categories } from "../data/posts";

function Category() {
  const { cat } = useParams();
  const catPosts = posts.filter(p => p.category === cat);
  const category = categories[cat];

  if (!category) return <p>Category not found.</p>;

  return (
    <main className="container">
      <h1>{category.emoji} {category.label}</h1>
      {catPosts.map(post => (
        <article key={post.id} className="post-card">
          <Link to={`/post/${post.slug}`}><h3>{post.title}</h3></Link>
          <time>{post.date}</time>
          <p>{post.summary}</p>
        </article>
      ))}
    </main>
  );
}

export default Category;