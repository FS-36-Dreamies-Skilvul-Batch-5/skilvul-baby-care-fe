import { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import Heading from "../../components/landing/headings/Heading";
import ArticleList from "../../components/landing/lists/ArticleList";
import Footer from "../../layouts/Footer";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [articleCategories, setArticleCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState("");

  const handlePrevPage = () => {
    if(page > 1){
      setPage(prev => prev - 1)
    }
  }
  const handleNextPage = () => {
    if(page < totalPage){
      setPage(prev => prev + 1)
    }
  }

  const fetchArticles = async () => {
    try {
      const articlesPromise = fetch(`http://localhost:3000/articles?page=${page}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      const categoriesPromise = fetch(
        `http://localhost:3000/article-categories`,
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
  }, [page])
  return (
    <div className="bg-[#F9FBFD] overflow-x-hidden">
      <Navbar logoPath="assets/icons/baby-care-logo.png" />

      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col h-auto py-40 gap-14">
          <Heading
            title="Articles"
            description="Jelajahi artikel kami tentang Panduan Nutrisi dan Proses Pertumbuhan Anak"
            align="left"
          />

          <div className="flex flex-col gap-y-[55px]">
            <div className="flex flex-col gap-y-[30px]">
              {/* search */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-2 flex items-center w-full px-4 py-3.5 rounded-xl shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] bg-white overflow-hidden gap-x-2">
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
                    className="peer h-full w-full outline-none text-sm placeholder:text-gray-400 text-[#36455B]"
                    type="text"
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                    placeholder="Search"
                  />
                </div>

                {/* dropdown */}
                <div className="relative w-full">
                  <select
                    name="status"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full rounded-lg border-none text-sm text-gray-400 px-4 py-3.5 shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] focus:outline-none appearance-none"
                  >
                    <option value="" className="text-sm">
                      Semua
                    </option>
                    {articleCategories.length !== 0 &&
                      articleCategories.map((category) => (
                        <option
                          value={category.name}
                          key={category.id}
                          className="text-sm"
                        >
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
              </div>

              {/* article */}
              {!isLoading ? (
                <ArticleList articles={filteredArticle}/>
              ) : (
                <h1>
                  Loading...
                </h1>
              )}

              {/* pagination */}
              <div className="flex items-center justify-between">
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
                    <span
                      className="w-8 h-8 flex items-center justify-center"
                    >
                      {page}
                    </span>
                  </div>
                  <div>
                    dari {totalPage}
                  </div>
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
      </section>
      <Footer
        logoPath="assets/icons/baby-care-logo.png"
        facebookPath="assets/icons/facebook.png"
        instagramPath="assets/icons/instagram.png"
        twitterPath="assets/icons/twitter.png"
        youtubePath="assets/icons/youtube.png"
      />
    </div>
  );
}
