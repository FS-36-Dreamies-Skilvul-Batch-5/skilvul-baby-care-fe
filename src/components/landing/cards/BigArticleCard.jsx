export default function BigArticleCard() {
  return (
    <>
    <div className="w-full lg:min-w-[580px] lg:max-w-[696px] flex flex-col gap-y-5">
      <a href="#">
        <div>
          <img src="assets/images/lima-kebiasaan-bayi-baru-lahir.webp" alt="5 Kebiasaan Bayi baru Lahir" className="w-full h-[310px] rounded-xl object-cover"></img>
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
    </>
  );
}