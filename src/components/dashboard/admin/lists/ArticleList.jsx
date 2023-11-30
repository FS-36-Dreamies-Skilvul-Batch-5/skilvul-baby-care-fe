import ArticleCard from "../cards/ArticleCard";

export default function ArticleList({articles}) {
  return (
    <div className="w-full border border-[#D1D9E2] rounded-xl overflow-x-scroll scrollbar__hidden">
      <table className="w-full min-w-[1024px] table-auto border-collapse select-none">
        <thead>
          <tr className="border-b border-[#D1D9E2]">
            <th className="text-[#272C49] text-center py-2 w-16">No</th>
            <th className="text-[#272C49] text-center py-2">Judul</th>
            <th className="text-[#272C49] text-center py-2">Kategori</th>
            <th className="text-[#272C49] text-center py-2">Image</th>
            <th className="text-[#272C49] text-center py-2">Tanggal Publikasi</th>
          </tr>
        </thead>

        <tbody>
          {articles.length !== 0 ? (
            articles.map((article, index) => (
              <ArticleCard {...article} key={article.id} article_number={index}/>
            ))
          ) : (
            <td colSpan={5} className="py-5 text-center text-red-500">
              Tidak ada data dengan filter tersebut...
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
}