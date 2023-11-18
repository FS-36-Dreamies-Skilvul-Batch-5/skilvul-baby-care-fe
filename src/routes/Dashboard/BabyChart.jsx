import Sidebar from "../../layouts/Sidebar"

export default function BabyData() {
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
            <h1 className="font-opensans text-[28px] min-[840px]:text-[32px] text-[#272C49] font-extrabold">
              Grafik Pertumbuhan
            </h1>
            <p id="last_updated_el" className="text-[#898989] text-sm min-[840px]:text-base">
              -
            </p>
          </div>

          {/* begin::Parameter Pertumbuhan */}
          <div
            className="flex flex-col min-[840px]:flex-row flex-between gap-x-[25px] gap-y-[20px]"
          >
            {/* Berat (Active) */}
            <button className="chart__choices active w-full block" data-chart="berat_badan">
              <div
                className="flex flex-col w-full bg-[#DFF1FF] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]"
              >
                <img
                  src="../assets/icons/berat-badan.png"
                  alt="Berat Badan"
                  className="h-[40px] object-contain"
                />
                <div className="flex flex-col justify-center text-center">
                  <span>Berat</span>
                  <div
                    className="w-full flex justify-center items-end gap-1 text-[#54ABF0]"
                  >
                    <h1 className="berat__badan text-2xl font-bold">-</h1>
                    <span className="text-lg">kg</span>
                  </div>
                </div>
              </div>
            </button>

            {/* <!-- Berat (Re-Active) */}
            {/* <button className="chart__choices active w-full block">
              <div
                className="flex flex-col w-full bg-[#F5F5F5] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]"
              >
                <img
                  src="../assets/icons/berat-badan-grey.png"
                  alt="Berat Badan"
                  className="h-[40px] object-contain"
                />
                <div className="flex flex-col justify-center text-center">
                  <span>Berat</span>
                  <div
                    className="w-full flex justify-center items-end gap-1 text-[#898989]"
                  >
                    <h1 className="berat__badan text-2xl font-bold">2.7</h1>
                    <span className="text-lg">kg</span>
                  </div>
                </div>
              </div>
            </button> */}

            {/* Tinggi (Active) */}
            <button className="chart__choices w-full block" data-chart="tinggi_badan">
              <div
                className="flex flex-col w-full bg-[#FFF6DF] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]"
              >
                <img
                  src="../assets/icons/tinggi-badan.png"
                  alt="Tinggi Badan"
                  className="h-[40px] object-contain"
                />
                <div className="flex flex-col justify-center text-center">
                  <span>Tinggi</span>
                  <div
                    className="w-full flex justify-center items-end gap-1 text-[#F5C952]"
                  >
                    <h1 className="tinggi__badan text-2xl font-bold">-</h1>
                    <span className="text-lg">cm</span>
                  </div>
                </div>
              </div>
            </button>

            {/* Tinggi (Re-Active) */}
            {/* <a href="baby-chart.html?chart=tinggi" className="chart__choices w-full block">
              <div
                className="flex flex-col w-full bg-[#F5F5F5] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]"
              >
                <img
                  src="../assets/icons/tinggi-badan-grey.png"
                  alt="Tinggi Badan"
                  className="h-[40px] object-contain"
                />
                <div className="flex flex-col justify-center text-center">
                  <span>Tinggi</span>
                  <div
                    className="w-full flex justify-center items-end gap-1 text-[#898989]"
                  >
                    <h1 className="tinggi__badan text-2xl font-bold">71</h1>
                    <span className="text-lg">cm</span>
                  </div>
                </div>
              </div>
            </a> */}

            {/* L. Kepala (Active) */}
            <button className="chart__choices active w-full block" data-chart="lingkar_kepala">
              <div
                className="flex flex-col w-full bg-[#E3FFDA] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]"
              >
                <img
                  src="../assets/icons/lingkar-kepala.png"
                  alt="Lingkar Kepala"
                  className="h-[40px] object-contain"
                />
                <div className="flex flex-col justify-center text-center">
                  <span>L. Kepala</span>
                  <div
                    className="w-full flex justify-center items-end gap-1 text-[#6BD147]"
                  >
                    <h1 className="lingkar__kepala text-2xl font-bold">-</h1>
                    <span className="text-lg">cm</span>
                  </div>
                </div>
              </div>
            </button>

            {/* L. Kepala (Re-Active) */}
            {/* <a href="baby-chart.html?chart=lingkar_kepala" className="chart__choices w-full block">
              <div
                className="flex flex-col w-full bg-[#F5F5F5] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]"
              >
                <img
                  src="../assets/icons/lingkar-kepala-grey.png"
                  alt="Lingkar Kepala"
                  className="h-[40px] object-contain"
                />
                <div className="flex flex-col justify-center text-center">
                  <span>L. Kepala</span>
                  <div
                    className="w-full flex justify-center items-end gap-1 text-[#898989]"
                  >
                    <h1 className="lingkar_kepala text-2xl font-bold">46</h1>
                    <span className="text-lg">cm</span>
                  </div>
                </div>
              </div>
            </a> */}
          </div>
          {/* end::Parameter  Pertumbuhan */}

          {/* begin::Chart */}
          <div
            className="w-full rounded-md outline outline-2 outline-[#D1D9E2] p-[15px] mt-3"
          >
            <div className="flex flex-col gap-y-6">
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

                {/* dropdown */}
                {/* <div className="relative w-full">
                  <select
                    id="kategori"
                    name="kategori"
                    className="w-full rounded-xl text-sm text-gray-400 px-4 py-3.5 border border-solid border-[#D1D9E2] focus:outline-none appearance-none"
                  >
                    <option value="0-12 bulan" className="text-sm" selected>
                      0-12 bulan
                    </option>
                    <option value="1-2 tahun" className="text-sm">1-2 tahun</option>
                    <option value="2-3 tahun" className="text-sm">2-3 tahun</option>
                    <option value="3-4 tahun" className="text-sm">3-4 tahun</option>
                    <option value="4-5 tahun" className="text-sm">4-5 tahun</option>
                  </select>
                  <div
                    className="absolute text-xl text-amber-500 font-bold top-1/2 right-[14px] translate-y-[-50%]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-gray-400 h-[0.9em]"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                      />
                    </svg>
                  </div>
                </div> */}
              </div>

              <div id="chart" className="w-full">
                <canvas id="weight_chart" className="w-full"></canvas>
                <canvas id="height_chart" className="w-full"></canvas>
                <canvas id="headc_chart" className="w-full"></canvas>
              </div>

              {/* <div className="w-full">
                <p className="text-xs pt-2">Berat (kg)</p>
                <img
                  src="../assets/icons/Chart.png"
                  alt="Chart"
                  className="w-full max-h-full h-[360px] object-cover"
                />
                <p className="flex justify-end text-xs">Usia (bulan)</p>
              </div> */}
            </div>
          </div>
          {/* end::Chart */}
        </div>
      </div>
      {/* end::Content */}
    </>
  )
}