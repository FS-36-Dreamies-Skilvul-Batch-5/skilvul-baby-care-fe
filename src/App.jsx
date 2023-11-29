import { Route, Routes } from "react-router-dom";

import Login from "./routes/auth/Login";
import Signup from "./routes/auth/Signup";
import RegisterSuccess from "./routes/auth/RegisterSuccess";
import Landing from "./routes/Landing";
import Articles from "./routes/article/Articles";
import DetailArticle from "./routes/article/DetailArticle";
import Main from "./routes/dashboardFE/Main";
import BabyChart from "./routes/dashboardFE/BabyChart";
import BabyData from "./routes/dashboardFE/BabyData";
import Immunization from "./routes/dashboardFE/Immunization";
import User from "./routes/dashboardFE/admin/User";
import Article from "./routes/dashboardFE/admin/Article";
import ArticleCategory from "./routes/dashboardFE/admin/ArticleCategory";
import Vaccine from "./routes/dashboardFE/admin/Vaccine";

export default function App() {
  return (
    <>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register-success" element={<RegisterSuccess />} />

        {/* Landing */}
        <Route path="/" element={<Landing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<DetailArticle />} />

        {/* Admin & User */}
        <Route path="/dashboard" element={<Main />} />

        {/* User */}
        <Route path="/dashboard/baby-chart" element={<BabyChart />} /> 
        <Route path="/dashboard/baby-data" element={<BabyData />} /> 
        <Route path="/dashboard/immunization" element={<Immunization/>}/> 

        {/* Admin */}
        <Route path="/dashboard/user" element={<User />} /> 
        <Route path="/dashboard/article" element={<Article/>} /> 
        <Route path="/dashboard/article-category" element={<ArticleCategory />} /> 
        <Route path="/dashboard/vaccine" element={<Vaccine/>}/>
      </Routes>
    </>
  )
}
