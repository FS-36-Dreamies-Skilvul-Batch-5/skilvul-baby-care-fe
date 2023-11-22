import BigArticleCard from "../cards/BigArticleCard";
import SmallArticleCard from "../cards/SmallArticleCard";

export default function TopArticleList() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-x-10 gap-y-10">
      <BigArticleCard />
      <SmallArticleCard />  
    </div>
  );
}