import Navbar from "../layouts/Navbar";
import HeroSection from "../sections/HeroSection";
import FeatureSection from "../sections/FeatureSection";
import ArticleSection from "../sections/ArticleSection";
import ReviewSection from "../sections/ReviewSection";
import Footer from "../layouts/Footer";

export default function Landing() {
  return (
    <div className="bg-[#F9FBFD] overflow-x-hidden">
      <Navbar/>

      <HeroSection />

      <FeatureSection />

      <ArticleSection />

      <ReviewSection />

      <Footer />      
    </div>
  )
}
