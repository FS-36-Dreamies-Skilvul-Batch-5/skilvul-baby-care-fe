export default function NewArticleCard() {
  return (
    <>
    {/* New Articles-1 */}
    <div className="flex gap-x-5 mb-4">
    <a href="#">
      <div className="shrink-0 w-[100px] lg:w-[120px] h-[100px] lg:h-[120px]">
        <img src="../assets/images/cara-merawat-bayi.webp" alt="Cara Merawat Bayi yang Baik dan Benar" className="w-full aspect-square object-cover rounded-xl"></img>
      </div>
    </a>
    <div className="flex flex-col justify-start gap-y-2">
      <div>
        <span className="text-[#898989] text-sm">4 Agustus 2023</span>
        <a href="#">
          <h1 className="font-opensans text-[18px] md:text-[20px] text-[#272C49] font-bold line-clamp-3 lh__2 -mt-0.5">Cara Merawat Bayi yang Baik dan Benar</h1>
        </a>
      </div>
    </div>
  </div>

  {/* New Articles-2 */}
  <div className="flex gap-x-5 mb-4">
    <a href="#">
      <div className="shrink-0 w-[100px] lg:w-[120px] h-[100px] lg:h-[120px]">
        <img src="../assets/images/cara-memandikan.webp" alt="Cara Cara Memandikan si Kecil" className="w-full aspect-square object-cover rounded-xl"></img>
      </div>
    </a>
    <div className="flex flex-col justify-start gap-y-2">
      <div>
        <span className="text-[#898989] text-sm">15 Agustus 2023</span>
        <a href="#">
          <h1 className="font-opensans text-[18px] md:text-[20px] text-[#272C49] font-bold line-clamp-3 lh__2 -mt-0.5">Cara Memandikan si Kecil</h1>
        </a>
      </div>
    </div>
  </div>

  {/* New Articles-3 */}
  <div className="flex gap-x-5 mb-4">
    <a href="#">
      <div className="shrink-0 w-[100px] lg:w-[120px] h-[100px] lg:h-[120px]">
        <img src="../assets/images/bagaimana-cara-memahami.webp" alt="Bagaimana Cara Memahami Tangisan Bayi" className="w-full aspect-square object-cover rounded-xl"></img>
      </div>
    </a>
    <div className="flex flex-col justify-start gap-y-2">
      <div>
        <span className="text-[#898989] text-sm">28 September 2023</span>
        <a href="#">
          <h1 className="font-opensans text-[18px] md:text-[20px] text-[#272C49] font-bold line-clamp-3 lh__2 -mt-0.5">Bagaimana Cara Memahami Tangisan Bayi</h1>
        </a>
      </div>
    </div>
  </div>

  {/* New Articles-4 */}
  <div className="flex gap-x-5 mb-4">
    <a href="#">
      <div className="shrink-0 w-[100px] lg:w-[120px] h-[100px] lg:h-[120px]">
        <img src="../assets/images/panduan-skin-to skin.webp" alt="Panduan skin to skin dalam Perawatan Bayi " className="w-full aspect-square object-cover rounded-xl"></img>
      </div>
    </a>
    <div className="flex flex-col justify-start gap-y-2">
      <div>
        <span className="text-[#898989] text-sm">28 September 2023</span>
        <a href="#">
          <h1 className="font-opensans text-[18px] md:text-[20px] text-[#272C49] font-bold line-clamp-3 lh__2 -mt-0.5">Panduan skin to skin dalam Perawatan Bayi </h1>
        </a>
      </div>
    </div>
  </div>
  </>
  );
}