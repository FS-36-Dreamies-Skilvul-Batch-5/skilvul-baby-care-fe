import TopArticlesList from "../lists/TopArticlesList";

export default function TopArticles() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12" id="articles">
    <div className="flex flex-col py-[70px] py-20 gap-y-12 lg:gap-y-16">
      <div className="flex flex-col text-start gap-y-2.5">
        <h1 className="font-opensans text-[32px] text-[#272C49] font-extrabold">Top Articles</h1>
        <p className="text-[#36455B]">Jelajahi artikel kami tentang Panduan Nutrisi dan Proses Pertumbuhan Anak</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-x-10 gap-y-10">
        <div className="w-full lg:min-w-[580px] lg:max-w-[696px] flex flex-col gap-y-5">
          <a href="#">
            <div>
              <img src="images/lima-kebiasaan-bayi-baru-lahir.webp" alt="5 Kebiasaan Bayi baru Lahir" className="w-full h-[310px] rounded-xl object-cover"></img>
            </div>
          </a>
          <div>
            <span className="text-[#898989]">posted on 2 Januari 2023</span>
            <a href="#">
              <h1 className="font-opensans text-[22px] md:text-[24px] text-[#272C49] font-bold line-clamp-2 mb-2 lh__2">5 Kebiasaan Bayi Baru Lahir yang Harus Diketahui oleh Ibunda</h1>
            </a>
            <p className="text-[#36455B] line-clamp-2">Untuk lebih jelasnya, simak kebiasaan bayi dari usia 0 hingga 6 bulan seperti di bawah ini, termasuk gejala, cara mengatasi, hingga tanda-tanda yang harus dicek dan dilihat pada bayi yang baru lahir</p>
          </div>
        </div>

        <TopArticlesList />
      </div>
    </div>
  </section>
  );
}
