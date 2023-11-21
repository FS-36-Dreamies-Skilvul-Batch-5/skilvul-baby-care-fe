import FeatureCard from "../cards/FeatureCard";

export default function FeatureList() {
  return (
    <div className="w-full max-w-[900px] grid grid-col-1 md:grid-cols-2 gap-[48px]">
      <FeatureCard />   
    </div>
  );
}