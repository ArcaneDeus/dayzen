import { Link } from "react-router-dom";
import { posts, categories } from "../data/posts";

function Home() {
  return (
    <main className="container">
      <h1>Welcome to my blog</h1>

      {Object.entries(categories).map(([key, cat]) => {
        const catPosts = posts.filter(p => p.category === key);
        return (
          <section key={key} className="category-section">
            <div className="category-header">
              <h2>{cat.emoji} {cat.label}</h2>
              <Link to={`/category/${key}`}>See all →</Link>
            </div>
            {catPosts.slice(0, 2).map(post => (
              <article key={post.id} className="post-card">
                <Link to={`/post/${post.slug}`}><h3>{post.title}</h3></Link>
                <time>{post.date}</time>
                <p>{post.summary}</p>
              </article>
            ))}
          </section>
        );
      })}
    </main>
  );
}

export default Home;