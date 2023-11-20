import Navbar from "../layouts/Navbar";
import HeroSection from "../components/sections/HeroSection";
import OurFeatures from "../components/sections/OurFeatures";
import TopArticles from "../components/sections/TopArticles";
import UserReview from "../components/sections/UserReview";
import Footer from "../layouts/Footer";

export default function Landing() {
  return (
    <div className="bg-[#F9FBFD] overflow-x-hidden">
      
      <Navbar/>

      <HeroSection />

      <OurFeatures />

      <TopArticles />

      <UserReview />

      <Footer />
      
    </div>
  )
}
