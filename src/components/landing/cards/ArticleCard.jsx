import { Link } from "react-router-dom";
import ArticleCategoryBadge from "../badges/ArticleCategoryBadge";
import { convertHumanReadDateFormat } from "../../../utils/convertHumanReadDateFormat";

export default function ArticleCard(props) {
  const {
    id,
    title,
    Article_Category,
    img_url,
    content,
    posted_on,
  } = props;
  const { name } = Article_Category;

  return (
    <div className="flex flex-col w-full rounded-xl p-5 mb-4 bg-white shadow-[2px_4px_10px_0_rgba(0,0,0,0.10)]">
      <div className="h-auto w-full">
        <img
          src={img_url}
          className="w-full h-[200px] object-cover rounded-xl"
          alt={title}
        />
      </div>
      <div className="flex flex-col items-start mt-4">
        <p className="text-sm text-[#898989]">
          {convertHumanReadDateFormat(posted_on)}
        </p>
        <Link
          to={`/articles/${id}`}
          className="font-opensans text-[22px] text-[#272C49] font-bold lh__2 line-clamp-2"
        >
          {title}
        </Link>
        <ArticleCategoryBadge category={name} />
      </div>
    </div>
  );
}
