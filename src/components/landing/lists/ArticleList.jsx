import ArticleCard from "../cards/ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <div className="flex items-center justify-center">
      {articles.length !== 0 ? (
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      ) : (
        <h1 className="py-5 text-center text-red-500">
          Tidak ada data dengan filter tersebut...
        </h1>
      )}
    </div>
  );
}
