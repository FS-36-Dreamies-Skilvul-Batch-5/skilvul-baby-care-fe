import ArticleCategoryBadge from "../badge/ArticleCategoryBadge";

export default function SmallArticleCard() {
  return (
    <>
    <div className="w-full lg:max-w-[480px] flex flex-col justify-between gap-y-5">
      <div className="flex gap-x-5">
        <a href="#">
          <div className="shrink-0 w-[128px] lg:w-[140px] h-[128px] lg:h-[140px]">
            <img src="assets/images/cara-merawat-bayi.webp" alt="5 Ide Stimulasi Sensori Latih Kemandirian" className="w-full aspect-square object-cover rounded-xl"></img>
          </div>
        </a>
        <div className="flex flex-col lg:justify-between gap-y-2">
          <div>
            <span className="text-[#898989] text-sm">2 Januari 2023</span>
            <a href="#">
              <h1 className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold line-clamp-2 lh__2 -mt-0.5">Cara Merawat Bayi yang Baik dan Benar</h1>
            </a>
          </div>
          <ArticleCategoryBadge category="Tips" />
          </div>
      </div>
      
      <div className="flex gap-x-5">
        <a href="#">
          <div className="shrink-0 w-[128px] lg:w-[140px] h-[128px] lg:h-[140px]">
            <img src="assets/images/lima-ide-stimulasi.webp" alt="5 Ide Stimulasi Sensori Latih Kemandirian" className="w-full aspect-square object-cover rounded-xl"></img>
          </div>
        </a>
        <div className="flex flex-col lg:justify-between gap-y-2">
          <div>
            <span className="text-[#898989] text-sm">13 Agustus 2023</span>
            <a href="#">
              <h1 className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold line-clamp-2 lh__2 -mt-0.5">5 Ide Stimulasi Sensori Latih Kemandirian</h1>
            </a>
          </div>
          <ArticleCategoryBadge category="Stimulasi" />
        </div>
      </div>

      <div className="flex gap-x-5">
        <a href="#">
          <div className="shrink-0 w-[128px] lg:w-[140px] h-[128px] lg:h-[140px]">
            <img src="assets/images/pentingnya-imunisasi.webp" alt="Pentingnya Imunisasi Bagi Anak" className="w-full aspect-square object-cover rounded-xl"></img>
          </div>
        </a>
        <div className="flex flex-col lg:justify-between gap-y-2">
          <div>
            <span className="text-[#898989] text-sm">2 Januari 2023</span>
            <a href="#">
              <h1 className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold line-clamp-2 lh__2 -mt-0.5">Pentingnya Imunisasi Bagi Anak</h1>
            </a>
          </div>
          <ArticleCategoryBadge category="Imunisasi" />
        </div>
      </div>
    </div>
    </>
  );
}