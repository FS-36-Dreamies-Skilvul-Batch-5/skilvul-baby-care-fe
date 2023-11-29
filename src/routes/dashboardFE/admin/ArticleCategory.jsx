import { useState, useEffect } from "react";
import AdminSidebar from "../../../layouts/AdminSidebar";
import Heading from "../../../components/dashboard/headings/Heading";
import AddDataButton from "../../../components/dashboard/buttons/AddDataButton";
import ArticleCategoryList from "../../../components/dashboard/admin/lists/ArticleCategoryList";
import { checkUserRole } from "../../../utils/auth/checkUserRole";
import AddArticleCategoryModal from "../../../components/dashboard/admin/modals/AddArticleCategoryModal";

export default function ArticleCategory() {
  checkUserRole("admin");

  const [articleCategories, setArticleCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleAddModal = () => {
    setShowAddModal((prev) => !prev);
  };

  const fetchArticleCategories = async () => {
    try {
      const response = await fetch(`http://localhost:3000/article-categories`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setArticleCategories(data.data);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticleCategories();
  }, []);

  return (
    <>
      <AdminSidebar />

      <div className="min-[840px]:pl-[62px] pt-12 min-[840px]:pt-0 pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-6 overflow-y-hidden">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading
              text="Kategori Artikel"
              ket="Berikut merupakan list semua kategori artikel"
            />
          </div>

          <div className="flex flex-col w-full h-full gap-y-5">
            <AddDataButton handleAddModal={toggleAddModal} />

            {!isLoading ? (
              <ArticleCategoryList categories={articleCategories} />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>

      {showAddModal && <AddArticleCategoryModal handleAddModal={toggleAddModal} />}
    </>
  );
}
