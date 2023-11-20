import Sidebar from "../../layouts/Sidebar"

export default function BabyData() {
  return (
    <>
      <Sidebar/>
      
      {/* begin::Content */}
      <div className="min-[840px]:pl-[60px] pt-12 min-[840px]:pt-0 pb-12 min-[840px]:pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-10 min-[840px]:gap-y-7">
          <div className="w-full flex flex-col text-start mb-2">
            <h1 className="font-opensans text-[28px] min-[840px]:text-[32px] text-[#272C49] font-extrabold">
              Data Anak
            </h1>
            <p className="text-[#898989] text-sm min-[840px]:text-base">
              Terakhir diupdate 17 Juli 2023
            </p>
          </div>

          <div className="flex flex-col w-full h-full gap-y-5">
            {/* begin::Search */}
            <div className="grid md:grid-cols-4 gap-5 md:gap-7">
              <div className="relative w-full md:col-span-3">
                <select
                  id="status_gizi"
                  name="status_gizi"
                  className="w-full rounded-xl text-sm min-[840px]:text-base text-gray-400 px-4 py-3.5 border-[1px] border-solid border-[#D1D9E2] focus:outline-none appearance-none"
                >
                  <option value="semua">Semua status</option>
                  <option value="baik">Baik</option>
                  <option value="kurang">Kurang</option>
                  <option value="buruk">Buruk</option>
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
              </div>

              {/* <div className="relative w-full">
                <select
                  id="kategori"
                  name="kategori"
                  className="w-full rounded-xl text-sm min-[840px]:text-base text-gray-400 px-4 py-3.5 border-[1px] border-solid border-[#D1D9E2] focus:outline-none appearance-none"
                >
                  <option value="10">10 entries</option>
                  <option value="25">25 entries</option>
                  <option value="50">50 entries</option>
                  <option value="100">100 entries</option>
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

              <button  className="w-full bg-[#1E3465] px-4 py-3.5 text-white rounded-xl text-sm min-[840px]:text-base">
                Add Data
              </button>
            </div>
          {/* end::Search */}

            {/* <begin::Baby's Data */}
            <div className="w-full border border-[#D1D9E2] rounded-xl overflow-x-scroll scrollbar__hidden">
              <table className="w-full min-w-[1024px] table-fixed border-collapse select-none">
                <thead>
                  <tr className="border-b border-[#D1D9E2]">
                    <th className="text-[#272C49] text-center py-2 w-16">No</th>
                    <th className="text-[#272C49] text-center py-2">Tanggal</th>
                    <th className="text-[#272C49] text-center py-2">Berat (kg)</th>
                    <th className="text-[#272C49] text-center py-2">Tinggi (cm)</th>
                    <th className="text-[#272C49] text-center py-2">L. Kepala (cm)</th>
                    <th className="text-[#272C49] text-center py-2">Status Gizi</th>
                    <th className="text-[#272C49] text-center py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody id="baby_data_list">
                  
                </tbody>
              </table>
              <div id="fetch_info" className="hidden text-center py-3.5">
                <span>Loading...</span>
              </div>
            </div>
            {/* end::Baby's Data */}
          </div>
        </div>
      </div>
      {/* end::Content */}

      {/* begin::All Modal */}
      {/* Add */}
      <div id="add_modal_container" className="fixed top-0 left-0 w-full h-screen bg-black/50" style={{display: "none"}}>
        <div className="flex w-full h-full justify-center items-center px-6">
          <form id="add_modal_form" className="relative flex flex-col w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8">
            <div className="text-start min-[840px]:text-center">
              <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">Add Data Form</h1>
              <p className="text-xs min-[840px]:text-sm text-[#898989]">Lengkapi semua data mengenai anak anda</p>
            </div>
            <div className="flex flex-col gap-y-5">
              <input type="date" id="tanggal_pertumbuhan" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" required></input>
              <input type="text" id="berat" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" pattern="^[0-9]*\.?[0-9]*$" placeholder="Berat Badan cth:(2.55)" required></input>
              <input type="text" id="tinggi" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" pattern="^[0-9]*\.?[0-9]*$" placeholder="Tinggi Badan cth:(6.2)" required></input>
              <input type="text" id="lingkar_kepala" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" pattern="^[0-9]*\.?[0-9]*$" placeholder="Lingkar Kepala cth:(30.212)" required></input>
            </div>
            <button type="submit" className="w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base">
              Add
            </button>

            <button id="close_add_modal" type="button" className="bg-[#1E3465] px-1.5 min-[840px]:px-2 py-1 absolute top-4 right-4 min-[840px]:right-6 cursor-pointer rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 min-[840px]:w-5 fill-white" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
          </form>
        </div>
      </div>

      {/* Edit */}
      <div id="edit_modal_container" className="fixed top-0 left-0 w-full h-screen bg-black/50" style={{display: "none"}}>
      <div className="flex w-full h-full justify-center items-center px-6">
        <form id="edit_modal_form" className="relative flex flex-col w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8">
          <div className="text-start min-[840px]:text-center">
            <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">Edit Data Form</h1>
            <p className="text-xs min-[840px]:text-sm text-[#898989]">Edit data anak anda</p>
          </div>
          <div className="flex flex-col gap-y-5">
            <input type="date" id="edit_tanggal_pertumbuhan" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" required></input>
            <input type="text" id="edit_berat" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" pattern="^[0-9]*\.?[0-9]*$" placeholder="Berat Badan cth:(2.55)" required></input>
            <input type="text" id="edit_tinggi" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" pattern="^[0-9]*\.?[0-9]*$" placeholder="Tinggi Badan cth:(6.2)" required></input>
            <input type="text" id="edit_lingkar_kepala" className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg" pattern="^[0-9]*\.?[0-9]*$" placeholder="Lingkar Kepala cth:(30.212)" required></input>
          </div>
          <button type="submit" className="w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base">
            Edit
          </button>

          <button id="close_edit_modal" type="button" className="bg-[#1E3465] px-1.5 min-[840px]:px-2 py-1 absolute top-4 right-4 min-[840px]:right-6 cursor-pointer rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 min-[840px]:w-5 fill-white" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
        </form>
      </div>
    </div>
      {/* end::All Modal */}
    </>
  )
}