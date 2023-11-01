import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import Login from "./components/register/Login";
import SignUp from "./components/register/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
