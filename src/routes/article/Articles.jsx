import Navbar from "../../layouts/Navbar";
import { Link } from 'react-router-dom';
import Heading from "../../components/landing/headings/Heading";
import ArticleList from "../../components/landing/lists/ArticleList";

export default function Articles(){
  return(
    <div className="bg-[#F9FBFD] overflow-x-hidden">
      <Navbar/>

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
                <div
                  className="md:col-span-2 flex items-center w-full px-4 py-3.5 rounded-xl shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] bg-white overflow-hidden gap-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    className="peer h-full w-full outline-none text-sm placeholder:text-gray-400 text-[#36455B]"
                    type="text"
                    id="search"
                    placeholder="Search"
                  />
                </div>
      
                {/* dropdown */}
                <div className="relative w-full">
                  <select
                    id="kategori"
                    name="kategori"
                    className="w-full rounded-lg border-none text-sm text-gray-400 px-4 py-3.5 shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] focus:outline-none appearance-none"
                  >
                    <option value="kategori" className="text-sm" selected>Kategori</option>
                    <option value="tips" className="text-sm">Tips</option>
                    <option value="stimulasi" className="text-sm">Stimulasi</option>
                    <option value="nutrisi" className="text-sm">Nutrisi</option>
                  </select>
                  <div className="absolute text-xl text-amber-500 font-bold top-1/2 right-[14px] translate-y-[-50%]">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-gray-400 h-[0.9em]"
                      viewBox="0 0 448 512">
                      <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                    </svg>
                  </div>
                </div>
              </div>
      
              {/* article */}
              <ArticleList />

              {/* pagination */}
              <div className="flex items-center justify-between">
                {/* Prev */}
                <a href="#" className="w-8 h-8 flex items-center justify-center border-[2.5px] border-[#1E3465] rounded-full font-medium text-lg text-[#1E3465] bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>

                <ul className="flex items-center gap-x-2">
                  <li
                    className="border-[2.5px] border-[#1E3465] rounded-full font-semibold text-lg text-white bg-[#1E3465]"
                  >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">1</a>
                  </li>
                  <li
                    className="border-[2.5px] border-[#1E3465] rounded-full font-semibold text-lg text-[#1E3465] bg-transparent"
                  >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">2</a>
                  </li>
                  <li
                    className="border-[2.5px] border-[#1E3465] rounded-full font-semibold text-lg text-[#1E3465] bg-transparent"
                  >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">3</a>
                  </li>
                  <li
                    className="border-[2.5px] border-[#1E3465] rounded-full font-semibold text-lg text-[#1E3465] bg-transparent"
                  >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">4</a>
                  </li>
                  <li
                    className="border-[2.5px] border-[#1E3465] rounded-full font-semibold text-lg text-[#1E3465] bg-transparent"
                  >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">5</a>
                  </li>
                </ul>

                {/* Next */}
                <a href="#" className="w-8 h-8 flex items-center justify-center border-[2.5px] border-[#1E3465] rounded-full font-medium text-lg text-[#1E3465] bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}