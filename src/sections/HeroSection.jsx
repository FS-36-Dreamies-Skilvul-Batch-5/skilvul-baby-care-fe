export default function HeroSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12" id="landing">
        <main className="flex flex-col lg:flex-row h-auto min-[400px]:h-screen pt-[120px] pb-[70px] lg:pt-[70px] lg:pb-[0px] gap-y-8">
          <div className="lg:flex-1 flex flex-col justify-center items-start gap-y-1">
            <div className="w-full">
              <div className="text-center lg:text-start">
                <span className="font-opensans text-[#272C49] font-extrabold text-[38px] lg:text-[42px] lh__1">
                  Monitoring Baby’s
                </span>
                <br></br>
                <span className="inline-block font-opensans text-[#272C49] font-extrabold text-[38px] lg:text-[42px] -mt-1 ">
                  Nutrition using
                </span>
              </div>
              <div className="text-center lg:text-start -mt-4">
                <span className="font-aoboshi text-[#272C49] font-bold text-[38px] lg:text-[42px]">Baby</span>
                <span className="font-aoboshi text-[#FFCB40] font-bold text-[38px] lg:text-[42px]">Care</span>
              </div>
            </div>
            <p className="text-[#36455B] text-base lg:text-lg text-center lg:text-start w-full max-w-[500px] lg:w-auto mx-auto lg:mx-0">Bergabung bersama kami dan mulailah perjalanan menuju optimalisasi nutrisi & gizi anak</p>
          </div>
        <div className="lg:flex-1 flex justify-center items-center">
          <img src="assets/images/mother-baby-circle.webp" alt="Mother & Baby" className="w-full max-w-[300px] lg:max-w-[500px] h-auto aspect-square object-contain rounded-full"></img>
        </div>
      </main>
    </section>
  );
}
