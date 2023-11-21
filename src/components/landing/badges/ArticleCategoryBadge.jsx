export default function ArticleCategoryBadge({ category }) {
  return (
    <div className="flex gap-x-2">
      <a href="#" className="font-semibold text-[14px] text-[#B05F00] bg-[#F8D16D] py-[6px] px-[10px] rounded-md">
        {category}
      </a>
    </div>
  );
}