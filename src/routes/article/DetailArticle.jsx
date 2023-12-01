import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import ArticleCategoryBadge from "../../components/landing/badges/ArticleCategoryBadge";
import NewArticleList from "../../components/landing/lists/NewArticleList";
import Footer from "../../layouts/Footer";
import { convertHumanReadDateFormat } from "../../utils/convertHumanReadDateFormat";
import SanitizeRawHTML from "../../components/SanitizeRawHTML";

export default function DetailArticle() {
  const { id } = useParams();

  const [article, setArticle] = useState({
    title: "",
    Article_Category: {
      id: "",
      name: "",
    },
    category_id: "",
    slug: "",
    author: "admin",
    content: "",
    posted_on: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticle = async () => {
    try {
      const response = await fetch(`http://localhost:3000/articles/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setArticle(data.data);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <Navbar logoPath="../assets/icons/baby-care-logo.png" />

      <section className="w-full max-w-[1280px] h-auto mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row h-auto py-40 gap-y-8 gap-x-[32px]">
          <div className="flex flex-col bg-white w-full lg:max-w-[780px] h-auto rounded-[16px] p-7 shadow-[2px_4px_10px_0px_rgba(0,0,0,0.1)]">
            <div>
              <h1 className="text-[28px] lg:text-[32px] text-[#272C49] font-extrabold font-opensans line-clamp-2 mb-2 lh__2">
                {article.title}
              </h1>
              <span className="text-[#898989] text-sm lg:text-base">
                posted on {convertHumanReadDateFormat(article.posted_on)}
              </span>
              <div className="flex gap-x-2 pt-2.5 mb-6 py-[2px]">
                <ArticleCategoryBadge
                  category={article.Article_Category.name}
                />
              </div>
            </div>

            <div>
              <img
                src="../assets/images/5kebiasaan-bayi.webp"
                // src={`http://localhost:3000/article-images/${img_url}.webp`}
                alt={article.title}
                className="w-full h-[400px] rounded-xl object-cover"
              ></img>
            </div>

            <div className="py-2 text-sm lg:text-base text-[#36455B] mt-2">
              <SanitizeRawHTML rawHtml={article.content}/>
            </div>
          </div>

          <NewArticleList activeArticleId={id}/>
        </div>
      </section>
      <Footer
        logoPath="../assets/icons/baby-care-logo.png"
        facebookPath="../assets/icons/facebook.png"
        instagramPath="../assets/icons/instagram.png"
        twitterPath="../assets/icons/twitter.png"
        youtubePath="../assets/icons/youtube.png"
      />
    </>
  );
}
