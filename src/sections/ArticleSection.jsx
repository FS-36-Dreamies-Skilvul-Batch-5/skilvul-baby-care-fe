import Heading from "../components/landing/heading/Heading";
import TopArticleList from "../components/landing/lists/TopArticleList";

export default function ArticleSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12" id="articles">
      <div className="flex flex-col py-[70px] py-20 gap-y-12 lg:gap-y-16">
        <Heading
          title="Top Articles"
          description="Jelajahi artikel kami tentang Panduan Nutrisi dan Proses Pertumbuhan Anak"
          align="left"
        />

        <TopArticleList />
      </div>
  </section>
  );
}
