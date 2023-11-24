import Heading from "../components/landing/headings/Heading";
import FeatureDecoration from "../components/landing/decorations/FeatureDecoration";
import FeatureList from "../components/landing/lists/FeatureList";

export default function FeatureSection() {
  return (
    <section className="relative w-full bg-white" id="features">
      <FeatureDecoration />

      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 z-20">
        <div className="flex flex-col justify-center items-center py-20 gap-y-16">
          <Heading
            title="Our Features"
            description="Berikut fitur-fitur yang dapat ibu gunakan dalam memantau pertumbuhan anak"
          />
          <FeatureList />
        </div>
      </div>

      <FeatureDecoration />
    </section>
  );
}
