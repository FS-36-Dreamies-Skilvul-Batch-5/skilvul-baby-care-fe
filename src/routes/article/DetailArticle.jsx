import { useParams } from "react-router-dom"
import Navbar from "../../layouts/Navbar";
import ArticleCategoryBadge from "../../components/landing/badges/ArticleCategoryBadge";
import NewArticleList from "../../components/landing/lists/NewArticleList";
import Footer from "../../layouts/Footer";

export default function DetailArticle(){
  const { id } = useParams()

  return(
    <>
    <Navbar logoPath="../assets/icons/baby-care-logo.png" />

    <section className="w-full max-w-[1280px] h-auto mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row h-auto py-40 gap-y-8 gap-x-[32px]">
        {/* begin::Articles */}
        <div className="flex flex-col bg-white w-full lg:max-w-[780px] h-auto rounded-[16px] p-7 shadow-[2px_4px_10px_0px_rgba(0,0,0,0.1)]">
          {/* title */}
          <div>
            <h1 className="text-[28px] lg:text-[32px] text-[#272C49] font-extrabold font-opensans line-clamp-2 mb-2 lh__2">5 Kebiasaan Bayi Baru Lahir yang Harus Diketahui oleh Ibunda</h1>
            <span className="text-[#898989] text-sm lg:text-base">posted on 2 Januari 2023</span>
            <div className="flex gap-x-2 pt-2.5 mb-6 py-[2px]">
            <ArticleCategoryBadge category="Tips" />
            </div>
          </div>

          {/* image */}
          <div>
            <img src="../assets/images/5kebiasaan-bayi.webp" alt="5 Kebiasaan Bayi baru Lahir" className="w-full h-[400px] rounded-xl object-cover"></img>
          </div>

          {/* begin::Content */}
          <div className="py-2 text-sm lg:text-base text-[#36455B]">
            <p className="pt-4 ">Sebagai orang tua baru, Ayah Bunda mungkin memiliki banyak pertanyaan terkait kondisi, kebiasaan, dan tumbuh kembang bayi AyBun yang baru lahir, apakah ia berkembang dengan normal atau tidak.
              Nah, untuk memahaminya, perlu AyBun ketahui bahwa orang tua dapat memperhatikan kebiasaan bayi sejak baru dilahirkan. Ada beberapa kebiasaan bayi baru lahir (new born) berusia 0 hingga 6 bulan.
              Namun, kendati merupakan hal yang wajar, beberapa kebiasaan dapat menjadi tanda bahaya bagi si Kecil jika sudah mulai terlihat berlebihan. Di sini lah pentingnya peran AyBun untuk selalu mengawasi si Kecil.
              Untuk lebih jelasnya, simak kebiasaan bayi dari usia 0 hingga 6 bulan seperti di bawah ini, termasuk gejala, cara mengatasi, hingga tanda-tanda bahayanya!
            </p>
            <p className="pt-4">
              1. Gumoh
              Gumoh merupakan saat bayi mengeluarkan cairan dari mulut setelah ia menyusu.
            </p>
            <p className="pt-4">
              2. Cegukan
              Cegukan juga merupakan hal yang wajar dialami. Cegukan merupakan efek yang timbuhl saat terjadi kontraksi spontan pada otot diafragma.
            </p>
            <p className="pt-4">
              3. Ngulet
              Ngulet dapat diartikan sebagai gerakan meregangkan badan si Kecil untuk mengeluarkan gas dari saluran cernanya.
            </p>
            <p className="pt-4">
              4. Ngemut Bayi
              Mengemut jari atau memasukkan barang ke dalam mulut oleh si bayi sebetulnya merupakan hal yang wajar. 
              Aktivitas ini tidak perlu dilarang sampai ia berusia 2 tahun.
            </p>
            <p className="pt-4">
              5. Jarang BAB
              Bayi jarang melakukan buang air besar (BAB) sebetulnya juga merupakan hal yang masih dapat dikatakan normal dan dapat segera diatasi. 
              Bayi yang baru berusia satu minggu biasanya BAB sebanyak 4 kali sehari, kemudian turun menjadi rata-rata 2 kali sehari hingga mereka mencapai usia 1 tahun.
            </p>
          </div>
          {/* end::Content */}
        </div>
        {/* end::Articles */}

        <NewArticleList />
      </div> 
    </section>
    <Footer
        logoPath="../assets/icons/baby-care-logo.png"
        facebookPath="../assets/icons/facebook.png"
        instagramPath="../assets/icons/instagram.png"
        twitterPath="../assets/icons/twitter.png"
        youtubePath="../assets/icons/youtube.png"
      />
    </>
  );
}