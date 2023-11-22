import NewArticleCard from "../cards/NewArticleCard";

export default function NewArticleList() {
  return (
    <div className="w-full lg:max-w-[380px]">
    <div className="w-full bg-white rounded-[16px] p-5 shadow-[2px_4px_10px_0px_rgba(0,0,0,0.1)]">
      <h2 className="flex lg:justify-center text-[24px] text-[#272C49] font-extrabold pb-4">New Articles</h2>
      <NewArticleCard />
    </div>
  </div>
  );
}