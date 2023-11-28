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

        <Route path="/dashboard" element={<Main />} />
        <Route path="/dashboard/baby-chart" element={<BabyChart />} />
        <Route path="/dashboard/baby-data" element={<BabyData />} />
        <Route path="/dashboard/immunization" element={<Immunization/>}/>
      </Routes>
    </>
  )
}
