import { Route, Routes } from "react-router-dom";

import Login from "./routes/auth/Login";
import Signup from "./routes/auth/Signup";
import RegisterSuccess from "./routes/auth/RegisterSuccess";

import Landing from "./routes/Landing";
import Articles from "./routes/article/Articles";
import DetailArticle from "./routes/article/DetailArticle";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register-success" element={<RegisterSuccess />} />

        <Route path="/" element={<Landing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<DetailArticle />} />
      </Routes>
    </>
  )
}
