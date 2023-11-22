import Sidebar from "../../layouts/Sidebar"
import Heading from "../../components/dashboard/headings/Heading"
import ParameterGiziCard from "../../components/dashboard/cards/ParameterGiziCard"

export default function BabyChart() {
  return (
    <>
      <Sidebar/>
      
      {/* begin::Content */}
      <div className="min-[840px]:pl-[60px] pt-12 min-[840px]:pt-0 pb-12 min-[840px]:pb-0">
        <div
          className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-10 min-[840px]:gap-y-7"
        >
          {/* <!-- Title */}
          <div className="w-full flex flex-col text-start mb-2">
            <Heading text="Grafik Pertumbuhan" desk="-"/>
          </div>

          {/* begin::Parameter Pertumbuhan */}
          <ParameterGiziCard/>
          {/* end::Parameter  Pertumbuhan */}

          {/* begin::Chart */}
          <div
            className="w-full rounded-md outline outline-2 outline-[#D1D9E2] p-[15px] mt-3"
          >
            <div className="flex flex-col ">
              <div className="grid md:grid-cols-3 gap-y-3">
                <div
                  className="md:col-span-2 flex items-center w-full overflow-hidden"
                >
                  <div className="flex flex-col overflow-hidden gap-x-2">
                    <h1
                      id="chart_pilihan"
                      className="font-opensans text-base lg:text-lg text-[#272C49] font-extrabold"
                    >
                      Semua Chart
                    </h1>
                    {/* <p className="text-[#898989] text-xs lg:text-sm">
                      0 tahun 6 bulan 12 hari
                    </p> */}
                  </div>
                </div>
              </div>

              {/* <div id="chart" className="w-full">
                <canvas id="weight_chart" className="w-full"></canvas>
                <canvas id="height_chart" className="w-full"></canvas>
                <canvas id="headc_chart" className="w-full"></canvas>
              </div> */}

              <div className="w-full">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-2 flex items-center w-full overflow-hidden">
                    <span className="text-sm">Berat (kg)</span>
                  </div>
        
                  {/* dropdown */}
                  <div className="relative w-full">
                    <select
                      id="kategori_data"
                      name="kategori_data"
                      className="w-full rounded-lg border-none text-sm text-gray-400 px-2.5 py-1.5 shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] focus:outline-none appearance-none"
                    >
                      <option value="0-12" className="text-sm">Grafik 0-12 bulan</option>
                      <option value="13-24" className="text-sm">Grafik 13-24 bulan</option>
                      <option value="25-36" className="text-sm">Grafik 25-36 bulan</option>
                      <option value="37-48" className="text-sm">Grafik 37-48 bulan</option>
                      <option value="49-60" className="text-sm">Grafik 49-60 bulan</option>
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
                <img
                  src="../assets/icons/Chart.png"
                  alt="Chart"
                  className="w-full max-h-full h-[360px] object-cover"
                />
                <p className="flex justify-end text-xs">Usia (bulan)</p>
              </div>
            </div>
          </div>
          {/* end::Chart */}
        </div>
      </div>
      {/* end::Content */}
    </>
  )
}
