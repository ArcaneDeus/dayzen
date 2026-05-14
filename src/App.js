import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Category from "./pages/Category";
import "./App.css";

function ThemeManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    document.body.className = "";
    if (path.includes("/category/yap") || path.includes("/post/")) {
      const cat = path.split("/").pop();
      document.body.classList.add(`theme-${cat}`);
    }
    if (path.includes("yap"))     document.body.className = "theme-yap";
    if (path.includes("movies"))  document.body.className = "theme-movies";
    if (path.includes("learning")) document.body.className = "theme-learning";
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ThemeManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/category/:cat" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;