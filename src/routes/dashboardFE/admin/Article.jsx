import { useState, useEffect } from "react";
import AdminSidebar from "../../../layouts/AdminSidebar";
import Heading from "../../../components/dashboard/headings/Heading";
import AddDataButton from "../../../components/dashboard/buttons/AddDataButton";
import ArticleList from "../../../components/dashboard/admin/lists/ArticleList";
import { checkUserRole } from "../../../utils/auth/checkUserRole";
import AddArticleModal from "../../../components/dashboard/admin/modals/AddArticleModal";

export default function Article() {
  checkUserRole("admin");

  const [articles, setArticles] = useState([]);
  const [articleCategories, setArticleCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState("");

  const toggleAddModal = () => {
    setShowAddModal((prev) => !prev);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };

  const fetchArticles = async () => {
    try {
      const articlesPromise = fetch(`${import.meta.env.VITE_API_URL}/articles?page=${page}&pageSize=10`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      const categoriesPromise = fetch(
        `${import.meta.env.VITE_API_URL}/article-categories`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const [articlesResponse, categoriesResponse] = await Promise.all([
        articlesPromise,
        categoriesPromise,
      ]);

      if (!articlesResponse.ok || !categoriesResponse.ok) {
        return;
      }

      const articlesData = await articlesResponse.json();
      const categoriesData = await categoriesResponse.json();

      setArticles(articlesData.data);
      setArticleCategories(categoriesData.data);
      setTotalPage(articlesData.pagination.totalPages);

      console.log(articlesData, categoriesData);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredArticle = articles.filter((item) => {
    const matchesName = item.title
      .toLowerCase()
      .includes(filterName.toLowerCase());

    if (filterStatus === "") {
      return matchesName;
    } else {
      return matchesName && item.Article_Category.name === filterStatus;
    }
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [page]);

  return (
    <>
      <AdminSidebar />

      <div className="min-[840px]:pl-[62px] pt-12 min-[840px]:pt-0 pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-6 overflow-y-hidden">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading text="Artikel" ket="Berikut merupakan list artikel" />
          </div>

          <div className="flex flex-col w-full h-full gap-y-5">
            <div className="grid md:grid-cols-4 gap-5 md:gap-7">
              <div className="md:col-span-2 flex items-center w-full px-4 py-3.5 rounded-xl border-[1px] border-solid border-[#D1D9E2] bg-white overflow-hidden gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="peer h-full w-full outline-none text-sm min-[840px]:text-base placeholder:text-gray-400 text-[#36455B]"
                  type="text"
                  placeholder="Search"
                  value={filterName}
                  onChange={(e) => setFilterName(e.target.value)}
                />
              </div>

              {/* dropdown */}
              <div className="relative w-full">
                <select
                  name="status"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full rounded-xl text-sm min-[840px]:text-base text-gray-400 px-4 py-3.5 border-[1px] border-solid border-[#D1D9E2] focus:outline-none appearance-none"
                >
                  <option value="">Semua</option>
                  {articleCategories.map((category) => (
                    <option value={category.name} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute text-xl text-amber-500 font-bold top-1/2 right-[14px] translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 h-[0.9em]"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
              </div>

              <AddDataButton handleAddModal={toggleAddModal} />
            </div>

            <div>
              {!isLoading ? (
                <ArticleList articles={filteredArticle} />
              ) : (
              <h1>Loading...</h1>
              )}

              {/* pagination */}
              <div className="flex items-center justify-between border-r border-l border-b border-[#D1D9E2] rounded-b-xl px-5 pb-4 pt-9 -mt-1">
                {/* Prev */}
                <button
                  onClick={handlePrevPage}
                  className="w-8 h-8 flex items-center justify-center border-[2.5px] border-[#1E3465] rounded-full font-medium text-lg text-[#1E3465] bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-x-2">
                  <div className="border-[2.5px] border-[#1E3465] rounded-full font-semibold text-lg text-white bg-[#1E3465]">
                    <span className="w-8 h-8 flex items-center justify-center">
                      {page}
                    </span>
                  </div>
                  <div>dari {totalPage}</div>
                </div>

                {/* Next */}
                <button
                  onClick={handleNextPage}
                  className="w-8 h-8 flex items-center justify-center border-[2.5px] border-[#1E3465] rounded-full font-medium text-lg text-[#1E3465] bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <AddArticleModal
          articleCategories={articleCategories}
          handleAddModal={toggleAddModal}
        />
      )}
    </>
  );
}
