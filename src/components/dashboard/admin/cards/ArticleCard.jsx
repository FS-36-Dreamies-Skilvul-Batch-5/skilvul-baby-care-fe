import { useState } from "react";
import { convertHumanReadDateFormat } from "../../../../utils/convertHumanReadDateFormat"
import EditArticleModal from "../modals/EditArticleModal";
import DeleteArticleModal from "../modals/DeleteArticleModal";

export default function ArticleCard(props) {
  const { article_number, id, title, Article_Category, img_url, content, posted_on } = props;
  const { name } = Article_Category;

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleEditModal = () => {
    setShowEditModal((prev) => !prev);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  return (
    <>
      <tr className="border-b border-[#D1D9E2]">
        <td className="text-[#898989] text-center py-3.5">
          {article_number + 1}
        </td>
        <td className="text-[#898989] text-center py-3.5">{title}</td>
        <td className="text-[#898989] text-center py-3.5">{name}</td>
        <td className="text-[#898989] text-center py-3.5">{img_url ? img_url : '-'}</td>
        <td className="text-[#898989] text-center py-3.5">{convertHumanReadDateFormat(posted_on)}</td>
        <td className="text-[#898989] text-center py-3.5 px-5">
          <span className="w-full flex justify-center gap-x-2">
            <button
              onClick={toggleEditModal}
              className="relative bg-[#FFC839] font-bold text-sm text-white w-[30px] h-[30px] rounded-lg"
            >
              <EditSVG />
            </button>
            {showEditModal && (
              <EditArticleModal
                articleInfo={props}
                handleEditModal={toggleEditModal}
              />
            )}

            <button
              onClick={toggleDeleteModal}
              className="relative bg-[#E23747] font-bold text-sm text-white w-[30px] h-[30px] rounded-lg"
            >
              <DeleteSVG />
            </button>
            {showDeleteModal && (
              <DeleteArticleModal
                articleId={id}
                handleDeleteModal={toggleDeleteModal}
              />
            )}
          </span>
        </td>
      </tr>
    </>
  );
}

export function EditSVG() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 translate-x-[-48%] translate-y-[-48%]"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g filter="url(#filter0_d_112_2077)">
        <path
          d="M11.3465 0.586087L9.83235 2.10023L13.8993 6.16716L15.4134 4.65301C16.1955 3.87091 16.1955 2.60391 15.4134 1.82181L14.1808 0.586087C13.3987 -0.196013 12.1317 -0.196013 11.3496 0.586087H11.3465ZM9.12534 2.80725L1.83303 10.1027C1.50767 10.428 1.26991 10.8316 1.13852 11.2727L0.0310672 15.0362C-0.0471429 15.3021 0.0248104 15.5868 0.218771 15.7807C0.412732 15.9747 0.697417 16.0467 0.960203 15.9716L4.72367 14.8641C5.16478 14.7327 5.56834 14.495 5.89369 14.1696L13.1923 6.87418L9.12534 2.80725Z"
          fill="white"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_112_2077"
          x="0"
          y="-0.000488281"
          width="18"
          height="18.0015"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dx="1" dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_112_2077"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_112_2077"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export function DeleteSVG() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 translate-x-[-45%] translate-y-[-45%]"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 22"
      fill="none"
    >
      <g filter="url(#filter0_d_112_2075)">
        <path
          d="M4.82857 1.48908L4.57143 1.99979H1.14286C0.510714 1.99979 0 2.51051 0 3.14265C0 3.77479 0.510714 4.28551 1.14286 4.28551H14.8571C15.4893 4.28551 16 3.77479 16 3.14265C16 2.51051 15.4893 1.99979 14.8571 1.99979H11.4286L11.1714 1.48908C10.9786 1.09979 10.5821 0.856934 10.15 0.856934H5.85C5.41786 0.856934 5.02143 1.09979 4.82857 1.48908ZM14.8571 5.42836H1.14286L1.9 17.5355C1.95714 18.4391 2.70714 19.1426 3.61071 19.1426H12.3893C13.2929 19.1426 14.0429 18.4391 14.1 17.5355L14.8571 5.42836Z"
          fill="white"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_112_2075"
          x="0"
          y="0.856934"
          width="18"
          height="20.2856"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dx="1" dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_112_2075"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_112_2075"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
