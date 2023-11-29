import ArticleCategoryCard from "../cards/ArticleCategoryCard";

export default function ArticleCategoryList({categories}) {
  return (
    <div className="w-full border border-[#D1D9E2] rounded-xl overflow-x-scroll scrollbar__hidden">
      <table className="w-full min-w-[1024px] table-auto border-collapse select-none">
        <thead>
          <tr className="border-b border-[#D1D9E2]">
            <th className="text-[#272C49] text-center py-2 w-16">No</th>
            <th className="text-[#272C49] text-center py-2">Kategori Artikel</th>
            <th className="text-[#272C49] text-center py-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {categories.length !== 0 ? (
            categories.map((category) => (
              <ArticleCategoryCard {...category} key={category.id}/>
            ))
          ) : (
            <td colSpan={4} className="py-5 text-center text-red-500">
              Tidak ada data dengan filter tersebut...
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
}