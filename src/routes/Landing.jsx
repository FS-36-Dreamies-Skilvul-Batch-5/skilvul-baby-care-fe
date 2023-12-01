import Navbar from "../layouts/Navbar";
import HeroSection from "../sections/HeroSection";
import FeatureSection from "../sections/FeatureSection";
import ArticleSection from "../sections/ArticleSection";
import ReviewSection from "../sections/ReviewSection";
import Footer from "../layouts/Footer";

export default function Landing() {
  return (
    <div className="bg-[#F9FBFD] overflow-x-hidden">
      <Navbar logoPath="assets/icons/baby-care-logo.png" />

      <HeroSection />

      <FeatureSection />

      <ArticleSection />

      <ReviewSection />

      <Footer
        logoPath="assets/icons/baby-care-logo.png"
        facebookPath="assets/icons/facebook.png"
        instagramPath="assets/icons/instagram.png"
        twitterPath="assets/icons/twitter.png"
        youtubePath="assets/icons/youtube.png"
      />  
    </div>
  )
}
