export default function EditModal(){
  return(
    <>
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
    </>
  )
}