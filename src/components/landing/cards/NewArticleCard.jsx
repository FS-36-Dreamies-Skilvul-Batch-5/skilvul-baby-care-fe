import { Link } from "react-router-dom";
import { convertHumanReadDateFormat } from "../../../utils/convertHumanReadDateFormat";

export default function NewArticleCard(props) {
  const {
    id,
    title,
    img_url,
    posted_on,
  } = props;
  return (
    <div className="flex gap-x-5 mb-4">
      <Link to={`/articles/${id}`} reloadDocument>
        <div className="shrink-0 w-[100px] lg:w-[120px] h-[100px] lg:h-[120px]">
          <img
            src={img_url}
            alt={title}
            className="w-full aspect-square object-cover rounded-xl"
          ></img>
        </div>
      </Link>
      <div className="flex flex-col justify-start gap-y-2">
        <div>
          <span className="text-[#898989] text-sm">{convertHumanReadDateFormat(posted_on)}</span>
          <Link to={`/articles/${id}`} reloadDocument>
            <h1 className="font-opensans text-[18px] md:text-[20px] text-[#272C49] font-bold line-clamp-3 lh__2 -mt-0.5">
              {title}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
