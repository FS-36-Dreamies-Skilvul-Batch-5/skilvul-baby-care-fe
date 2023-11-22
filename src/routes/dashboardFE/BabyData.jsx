import Sidebar from "../../layouts/Sidebar";
import Heading from "../../components/dashboard/headings/Heading";
import AddDataButton from "../../components/dashboard/buttons/AddDataButto";
import BabyNutritionRecordCard from "../../components/dashboard/cards/BabyNutritionRecordCard";
import AddModal from "../../components/dashboard/modals/AddModal";
import EditModal from "../../components/dashboard/modals/EditModal";

export default function BabyData() {
  return (
    <>
      <Sidebar/>
      
      {/* begin::Content */}
      <div className="min-[840px]:pl-[60px] pt-12 min-[840px]:pt-0 pb-12 min-[840px]:pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-10 min-[840px]:gap-y-7">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading text="Data Anak" desk="-"/>
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

              <AddDataButton/>
            </div>
            {/* end::Search */}

            {/* <begin::Baby's Data */}
            <BabyNutritionRecordCard/>
            {/* end::Baby's Data */}
          </div>
        </div>
      </div>
      {/* end::Content */}

      {/* begin::All Modal */}
      {/* Add */}
      <AddModal/>

      {/* Edit */}
      <EditModal/>
      {/* end::All Modal */}
    </>
  )
}