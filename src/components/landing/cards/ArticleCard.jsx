import { Link } from 'react-router-dom';
import ArticleCategoryBadge from '../badges/ArticleCategoryBadge';

export default function ArticleCard() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 gap-6">
        {/* article 1 */}
        <div
          className="flex flex-col w-full rounded-xl p-5 mb-4 bg-white shadow-[2px_4px_10px_0_rgba(0,0,0,0.10)]"
        >
          <div className="h-auto w-full">
            <img
              src="assets/images/article-lima-kebiasaan-bayi-baru-lahir.webp "
              className="w-full object-cover rounded-xl"
              alt="5 Kebiasaan Bayi Baru Lahir yang Harus Diketahui Oleh Ibunda"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p className="text-sm text-[#898989]">2 September 2023</p>
            <Link to="/articles/:id"
              className="font-opensans text-[22px] text-[#272C49] font-bold lh__2"
            >
              5 Kebiasaan Bayi Baru Lahir yang Harus Diketahui Oleh Ibunda
            </Link>
            <ArticleCategoryBadge category="Tips" />
          </div>
        </div>
        {/* article 2 */}
        <div
          className="flex flex-col w-full rounded-xl p-5 mb-4 bg-white shadow-[2px_4px_10px_0_rgba(0,0,0,0.10)]"
        >
          <div className="h-auto w-full">
            <img
              src="assets/images/article-cara-merawat-bayi.webp"
              className="w-full object-cover rounded-xl"
              alt="Cara Merawat Bayi yang Baik dan Benar"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p className="text-sm text-[#898989]">10 September 2023</p>
            <h1
              className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold lh__2"
            >
              Cara Merawat Bayi yang Baik dan Benar
            </h1>
            <ArticleCategoryBadge category="Tips" />
          </div>
        </div>
        {/* article 3 */}
        <div
          className="flex flex-col w-full rounded-xl p-5 mb-4 bg-white shadow-[2px_4px_10px_0_rgba(0,0,0,0.10)]"
        >
          <div className="h-auto w-full">
            <img
              src="assets/images/article-stimulasi-yang-tepat.webp"
              className="w-full object-cover rounded-xl"
              alt="Stimulasi yang Tepat agar Bayi Cepat Duduk dan Merangkak"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p className="text-sm text-[#898989]">22 September 2023</p>
            <h1
              className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold lh__2"
            >
              Stimulasi yang Tepat agar Bayi Cepat Duduk dan Merangkak
            </h1>
            <ArticleCategoryBadge category="Stimulasi" />
          </div>
        </div>
        {/* article 4 */}
        <div
          className="flex flex-col w-full rounded-xl p-5 mb-4 bg-white shadow-[2px_4px_10px_0_rgba(0,0,0,0.10)]"
        >
          <div className="h-auto w-full">
            <img
              src="assets/images/article-lima-ide-stimulasi.webp"
              className="w-full object-cover rounded-xl"
              alt="5 Ide Stimulasi Sensori Latih Kemandirian"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p className="text-sm text-[#898989]">26 September 2023</p>
            <h1
              className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold lh__2"
            >
              5 Ide Stimulasi Sensori Latih Kemandirian
            </h1>
            <ArticleCategoryBadge category="Stimulasi" />
          </div>
        </div>
        {/* article 5 */}
        <div
          className="flex flex-col w-full rounded-xl p-5 mb-4 bg-white shadow-[2px_4px_10px_0_rgba(0,0,0,0.10)]"
        >
          <div className="h-auto w-full">
            <img
              src="assets/images/article-anak-susah-makan.webp"
              className="w-full object-cover rounded-xl"
              alt="Anak Susah Makan? Ini Tips Mengatasinya"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p className="text-sm text-[#898989]">30 September 2023</p>
            <h1
              className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold lh__2"
            >
              Anak Susah Makan? Ini Tips Mengatasinya
            </h1>
            <ArticleCategoryBadge category="Nutrisi" />
          </div>
        </div>
        {/* article 6 */}
        <div
          className="flex flex-col w-full rounded-xl p-5 mb-4 bg-white shadow-[2px_4px_10px_0_rgba(0,0,0,0.10)]"
        >
          <div className="h-auto w-full">
            <img
              src="assets/images/article-kenapa-orang-tua-perlu-selektif.webp"
              className="w-full object-cover rounded-xl"
              alt="Kenapa Orang Tua Perlu Selektif Memilih Bath Toys"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p className="text-sm text-[#898989]">1 Oktober 2023</p>
            <h1
              className="font-opensans text-[20px] md:text-[22px] text-[#272C49] font-bold lh__2"
            >
              Kenapa Orang Tua Perlu Selektif Memilih Bath Toys
            </h1>
            <ArticleCategoryBadge category="Tips" />
          </div>
        </div>
      </div>
  );
}