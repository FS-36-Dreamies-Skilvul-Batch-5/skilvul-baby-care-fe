export default function ArticleCategoryBadge({ category }) {
  return (
    <div
      className="inline-block font-semibold text-[14px] text-[#B05F00] bg-[#F8D16D] py-[6px] px-[10px] rounded-md mt-3"
    >
      {category}
    </div>
  );
}
