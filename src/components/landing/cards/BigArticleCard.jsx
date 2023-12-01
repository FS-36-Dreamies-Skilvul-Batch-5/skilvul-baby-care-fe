import { convertHumanReadDateFormat } from "../../../utils/convertHumanReadDateFormat";
import SanitizeRawHTML from "../../SanitizeRawHTML";
import { Link } from "react-router-dom";

export default function BigArticleCard({ article }) {
  const { id, title, Article_Category, img_url, content, posted_on } = article;
  const { name } = Article_Category;
  return (
    <>
      <div className="w-full lg:min-w-[580px] lg:max-w-[696px] flex flex-col gap-y-5">
        <Link to={`/articles/${id}`}>
          <div>
            <img
              src={`http://localhost:3000/article-image/${img_url}`}
              alt={title}
              className="w-full h-[310px] rounded-xl object-cover"
            ></img>
          </div>
        </Link>
        <div>
          <span className="text-[#898989]">{convertHumanReadDateFormat(posted_on)}</span>
          <Link to={`/articles/${id}`}>
            <h1 className="font-opensans text-[22px] md:text-[24px] text-[#272C49] font-bold line-clamp-2 mb-2 lh__2">
              {title}
            </h1>
          </Link>
          <div className="text-[#36455B] line-clamp-2">
            <SanitizeRawHTML rawHtml={content} />
          </div>
        </div>
      </div>
    </>
  );
}
