import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EditArticleModal({ articleInfo, handleEditModal }) {
  const [editArticleFormData, setEditArticleFormData] = useState({
    title: articleInfo.title,
    category_id: articleInfo.category_id,
    slug: "",
    author: "admin",
    content: articleInfo.content,
    posted_on: articleInfo.posted_on,
  });
  const [articleCategories, setArticleCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const editorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditArticleFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setEditArticleFormData((prevData) => ({
      ...prevData,
      img_url: file,
    }));

    console.log(editArticleFormData);
  };

  const fetchEditArticle = async () => {
    const token = localStorage.getItem("token");
    const formDataToSend = new FormData();

    for (const key in editArticleFormData) {
      formDataToSend.append(key, editArticleFormData[key]);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/articles/${articleInfo.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchArticleCategories = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/article-categories`, {
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
    } catch (err) {
      console.log(err);
    }
  };

  const submit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetchEditArticle();
  };

  useEffect(() => {
    fetchArticleCategories();
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[99]">
        <div className="flex w-full h-full justify-center items-center">
          <form
            onSubmit={submit}
            encType="multipart/form-data"
            className="relative flex flex-col w-full h-full py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-4 min-[840px]:gap-y-6 overflow-y-scroll"
          >
            <div className="text-start min-[840px]:text-center">
              <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">
                Edit Artikel
              </h1>
              <p className="text-xs min-[840px]:text-sm text-[#898989]">
                Isi data berikut untuk edit artikel
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-5 gap-y-3">
              <div className="flex-1">
                <Editor
                  onEditorChange={(content, editor) => {
                    setEditArticleFormData((prevData) => ({
                      ...prevData,
                      content: content,
                    }));
                  }}
                  value={editArticleFormData.content}
                  apiKey="8m6jx76l32mjhubr7pacf50xxxa2r6lvttrvl2fdetn6pk2e"
                  init={{
                    height: 700,
                    plugins:
                      "tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste typography inlinecss",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "BabyCare",
                    mergetags_list: [],
                    placeholder: "Tulis Konten Disini",
                  }}
                  ref={editorRef}
                />
              </div>

              <div className="w-full max-w-[400px] flex flex-col gap-x-4 gap-y-4">
                <input
                  type="text"
                  name="title"
                  className="sm:col-span-2 text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                  placeholder="Judul Artikel"
                  value={editArticleFormData.title}
                  onChange={handleInputChange}
                  required
                ></input>
                <div className="relative w-full">
                  <select
                    name="category_id"
                    value={editArticleFormData.category_id}
                    onChange={handleInputChange}
                    className="w-full text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg appearance-none"
                  >
                    {articleCategories.length !== 0 &&
                      articleCategories.map((category) => (
                        <option value={category.id} key={category.id}>
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

                <div className="flex flex-col">
                  <label
                    htmlFor="img_url"
                    className="text-red-500 text-xs text-start"
                  >
                    <span className="font-semibold">Note:</span> Jangan diinput
                    gambar jika tidak ingin diubah!
                  </label>
                  <input
                    type="file"
                    name="img_url"
                    id="img_url"
                    className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                    onChange={handleImageChange}
                  ></input>
                </div>

                {!isLoading ? (
                  <button
                    type="submit"
                    className="font-semibold w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base"
                  >
                    Edit Artikel
                  </button>
                ) : (
                  <div className="w-full flex justify-center items-center bg-[#1E3465] px-2 py-3 text-white rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 fill-white animate-spin"
                      viewBox="0 0 512 512"
                    >
                      <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleEditModal}
              type="button"
              className="bg-[#1E3465] px-1.5 min-[840px]:px-2 py-1 absolute top-4 right-4 min-[840px]:right-6 cursor-pointer rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 min-[840px]:w-5 fill-white"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
