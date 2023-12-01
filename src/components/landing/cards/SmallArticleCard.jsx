import ArticleCategoryBadge from "../badges/ArticleCategoryBadge";
import { Link } from "react-router-dom";
import { convertHumanReadDateFormat } from "../../../utils/convertHumanReadDateFormat";

export default function SmallArticleCard({ articles }) {
  return (
    <>
      <div className="w-full lg:max-w-[480px] flex flex-col justify-between gap-y-5">
        {articles.map((article) => (
          <div className="flex gap-x-5" key={article.id}>
            <Link to={`/articles/${article.id}`}>
              <div className="shrink-0 w-[128px] lg:w-[140px] h-[128px] lg:h-[140px]">
                <img
                  src={`http://localhost:3000/article-image/${article.img_url}`}
                  alt={article.title}
                  className="w-full aspect-square object-cover rounded-xl"
                ></img>
              </div>
            </Link>
            <div className="flex flex-col lg:justify-between gap-y-2">
              <div>
                <span className="text-[#898989] text-sm">{convertHumanReadDateFormat(article.posted_on)}</span>
                <Link to={`/articles/${article.id}`}>
                  <h1 className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold line-clamp-2 lh__2 -mt-0.5">
                    {article.title}
                  </h1>
                </Link>
              </div>
              <div>
                <ArticleCategoryBadge category={article.Article_Category.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
