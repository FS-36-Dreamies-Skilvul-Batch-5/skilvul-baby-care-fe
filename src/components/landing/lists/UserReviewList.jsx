import UserReviewCard from "../cards/UserReviewCard";

export default function UserReviewList() {
  return (
    <div className="w-full flex flex-row gap-x-14 overflow-x-scroll scrollbar__hidden px-2 py-3">
      <UserReviewCard />  
    </div>
  );
}