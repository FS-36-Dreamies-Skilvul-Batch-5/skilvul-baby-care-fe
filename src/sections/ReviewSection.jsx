import UserReviewList from "../components/landing/lists/UserReviewList"

export default function ReviewSection() {
  return (
    <section className="relative w-full bg-white" id="reviews">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 z-20">
        <div className="flex flex-col justify-center items-center py-20 gap-y-16">
          <div className="flex flex-col justify-center text-center gap-y-2.5">
            <h1 className="font-opensans text-[32px] text-[#272C49] font-extrabold">User Review</h1>
            <p className="text-[#36455B]">Orang Tua Sejati, Hasil Nyata: Dengarkan Kisah Sukses Mereka.</p>
          </div>
          
          <UserReviewList />
        </div>
      </div>
    </section>
  );
}
