import { useState, useEffect } from "react";
import NewArticleCard from "../cards/NewArticleCard";

export default function NewArticleList({activeArticleId}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`http://localhost:3000/articles`, {
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

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className="w-full lg:max-w-[380px]">
      <div className="w-full bg-white rounded-[16px] p-5 shadow-[2px_4px_10px_0px_rgba(0,0,0,0.1)]">
        <h2 className="flex lg:justify-center text-[24px] text-[#272C49] font-extrabold pb-4">
          New Articles
        </h2>
        {!isLoading ? (
          articles.length !== 0 &&
          articles.slice(0, 4)
            .map((article) => (
              article.id == activeArticleId ? ('') : (
                <NewArticleCard key={article.id} {...article} />
              )
            ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
