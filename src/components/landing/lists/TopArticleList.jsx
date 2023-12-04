import { useState, useEffect } from "react";
import BigArticleCard from "../cards/BigArticleCard";
import SmallArticleCard from "../cards/SmallArticleCard";

export default function TopArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/articles`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setArticles(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const topOneArticle = articles[0];
  const topTwoUntilFourArticle = articles.slice(1, 4);

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-x-10 gap-y-10">
      {!isLoading ? (
        <>
          <BigArticleCard article={topOneArticle}/>
          <SmallArticleCard articles={topTwoUntilFourArticle}/>  
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}