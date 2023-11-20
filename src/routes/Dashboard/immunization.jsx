import Sidebar from "../../layouts/Sidebar"

export default function Immunization() {
  return (
    <>
      <Sidebar/>
      
      {/* begin::Dashboard - Immunization */}
      <div className="min-[840px]:pl-[62px] pt-12 min-[840px]:pt-0 pb-12 xl:pb-0">
        <div className="flex flex-col w-full h-auto xl:h-screen py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-6">
          <div className="w-full flex flex-col text-start mb-2">
            <h1 className="font-opensans text-[28px] min-[840px]:text-[32px] text-[#272C49] font-extrabold">
              Imunisasi
            </h1>
            <p className="text-[#898989] text-sm min-[840px]:text-base">
              Berikut merupakan list vaksin yang diperlukan oleh anak
            </p>
          </div>

          <div className="flex flex-col w-full h-full gap-y-5">
            {/* search */}
            <div className="grid md:grid-cols-3 gap-5 md:gap-7">
              <div
                className="md:col-span-2 flex items-center w-full px-4 py-3.5 rounded-xl border-[1px] border-solid border-[#D1D9E2] bg-white overflow-hidden gap-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="peer h-full w-full outline-none text-sm min-[840px]:text-base placeholder:text-gray-400 text-[#36455B]"
                  type="text"
                  id="search"
                  placeholder="Search"
                />
              </div>
    
              {/* dropdown */}
              <div className="relative w-full">
                <select
                  id="kategori"
                  name="kategori"
                  className="w-full rounded-xl text-sm min-[840px]:text-base text-gray-400 px-4 py-3.5 border-[1px] border-solid border-[#D1D9E2] focus:outline-none appearance-none"
                >
                  <option value="semua">Semua</option>
                  <option value="sudah">Sudah</option>
                  <option value="belum">Belum</option>
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
            </div>
    
            {/* vaksin content */}
            <div
              className="flex self-stretch flex-col w-full h-full pb-20 gap-y-5 overflow-y-scroll scrollbar__hidden"
            >
              {/* vaksin 1 */}
              <div
                className="flex rounded-xl h-auto justify-center items-center px-5 py-4 min-[840px]:p-6 bg-white border-[1px] border-solid border-[#D1D9E2]"
              >
                <div className="flex items-center w-full gap-x-4 min-[840px]:gap-x-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px]"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M28.68 0C35.46 0 40 4.76 40 11.84V28.182C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0H28.68ZM28.36 14C27.68 13.32 26.56 13.32 25.88 14L17.62 22.26L14.12 18.76C13.44 18.08 12.32 18.08 11.64 18.76C10.96 19.44 10.96 20.54 11.64 21.24L16.4 25.98C16.74 26.32 17.18 26.48 17.62 26.48C18.08 26.48 18.52 26.32 18.86 25.98L28.36 16.48C29.04 15.8 29.04 14.7 28.36 14Z"
                      fill="#6BD147"
                    />
                  </svg>
                  <div className="">
                    <h1 className="font-poppins text-lg min-[840px]:text-[20px] text-[#36455B] font-bold">
                      Hepatitis B 1
                    </h1>
                    <p className="text-[#898989] text-xs min-[840px]:text-sm">
                      Jadwal vaksin pada umur Saat Lahir
                    </p>
                  </div>
                </div>
                <button
                  className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px] flex items-center py-[5px] justify-center rounded-[10px] font-medium text-lg fill-[#7C8B9D] bg-[#E6E9EC]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[0.85em] min-[840px]:h-[1em]"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                </button>
              </div>
              {/* vaksin 2 */}
              <div
              className="flex rounded-xl h-auto justify-center items-center px-5 py-4 min-[840px]:p-6 bg-white border-[1px] border-solid border-[#D1D9E2]"
            >
              <div className="flex items-center w-full gap-x-4 min-[840px]:gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px]"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M28.68 0C35.46 0 40 4.76 40 11.84V28.182C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0H28.68ZM28.36 14C27.68 13.32 26.56 13.32 25.88 14L17.62 22.26L14.12 18.76C13.44 18.08 12.32 18.08 11.64 18.76C10.96 19.44 10.96 20.54 11.64 21.24L16.4 25.98C16.74 26.32 17.18 26.48 17.62 26.48C18.08 26.48 18.52 26.32 18.86 25.98L28.36 16.48C29.04 15.8 29.04 14.7 28.36 14Z"
                    fill="#D1D9E2"
                  />
                </svg>
                <div className="">
                  <h1 className="font-poppins text-lg min-[840px]:text-[20px] text-[#36455B] font-bold">
                    Polio 0
                  </h1>
                  <p className="text-[#898989] text-xs min-[840px]:text-sm">
                    Jadwal vaksin pada umur Saat Lahir
                  </p>
                </div>
              </div>
              <button
                className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px] flex items-center py-[5px] justify-center rounded-[10px] font-medium text-lg fill-[#7C8B9D] bg-[#E6E9EC]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[0.85em] min-[840px]:h-[1em]"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
              {/* vaksin 3 */}
              <div
              className="flex rounded-xl h-auto justify-center items-center px-5 py-4 min-[840px]:p-6 bg-white border-[1px] border-solid border-[#D1D9E2]"
            >
              <div className="flex items-center w-full gap-x-4 min-[840px]:gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px]"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M28.68 0C35.46 0 40 4.76 40 11.84V28.182C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0H28.68ZM28.36 14C27.68 13.32 26.56 13.32 25.88 14L17.62 22.26L14.12 18.76C13.44 18.08 12.32 18.08 11.64 18.76C10.96 19.44 10.96 20.54 11.64 21.24L16.4 25.98C16.74 26.32 17.18 26.48 17.62 26.48C18.08 26.48 18.52 26.32 18.86 25.98L28.36 16.48C29.04 15.8 29.04 14.7 28.36 14Z"
                    fill="#D1D9E2"
                  />
                </svg>
                <div className="">
                  <h1 className="font-poppins text-lg min-[840px]:text-[20px] text-[#36455B] font-bold">
                    BCG
                  </h1>
                  <p className="text-[#898989] text-xs min-[840px]:text-sm">
                    Jadwal vaksin pada umur Saat Lahir
                  </p>
                </div>
              </div>
              <button
                className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px] flex items-center py-[5px] justify-center rounded-[10px] font-medium text-lg fill-[#7C8B9D] bg-[#E6E9EC]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[0.85em] min-[840px]:h-[1em]"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
              {/* vaksin 4 */}
              <div
              className="flex rounded-xl h-auto justify-center items-center px-5 py-4 min-[840px]:p-6 bg-white border-[1px] border-solid border-[#D1D9E2]"
            >
              <div className="flex items-center w-full gap-x-4 min-[840px]:gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px]"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M28.68 0C35.46 0 40 4.76 40 11.84V28.182C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0H28.68ZM28.36 14C27.68 13.32 26.56 13.32 25.88 14L17.62 22.26L14.12 18.76C13.44 18.08 12.32 18.08 11.64 18.76C10.96 19.44 10.96 20.54 11.64 21.24L16.4 25.98C16.74 26.32 17.18 26.48 17.62 26.48C18.08 26.48 18.52 26.32 18.86 25.98L28.36 16.48C29.04 15.8 29.04 14.7 28.36 14Z"
                    fill="#D1D9E2"
                  />
                </svg>
                <div className="">
                  <h1 className="font-poppins text-lg min-[840px]:text-[20px] text-[#36455B] font-bold">
                    Hepatitis B 2
                  </h1>
                  <p className="text-[#898989] text-xs min-[840px]:text-sm">
                    Jadwal vaksin pada umur 59 Hari
                  </p>
                </div>
              </div>
              <button
                className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px] flex items-center py-[5px] justify-center rounded-[10px] font-medium text-lg fill-[#7C8B9D] bg-[#E6E9EC]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[0.85em] min-[840px]:h-[1em]"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
              {/* vaksin 5 */}
              <div
              className="flex rounded-xl h-auto justify-center items-center px-5 py-4 min-[840px]:p-6 bg-white border-[1px] border-solid border-[#D1D9E2]"
            >
              <div className="flex items-center w-full gap-x-4 min-[840px]:gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px]"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M28.68 0C35.46 0 40 4.76 40 11.84V28.182C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0H28.68ZM28.36 14C27.68 13.32 26.56 13.32 25.88 14L17.62 22.26L14.12 18.76C13.44 18.08 12.32 18.08 11.64 18.76C10.96 19.44 10.96 20.54 11.64 21.24L16.4 25.98C16.74 26.32 17.18 26.48 17.62 26.48C18.08 26.48 18.52 26.32 18.86 25.98L28.36 16.48C29.04 15.8 29.04 14.7 28.36 14Z"
                    fill="#D1D9E2"
                  />
                </svg>
                <div className="">
                  <h1 className="font-poppins text-lg min-[840px]:text-[20px] text-[#36455B] font-bold">
                    Polio 1
                  </h1>
                  <p className="text-[#898989] text-xs min-[840px]:text-sm">
                    Jadwal vaksin pada umur 59 Hari
                  </p>
                </div>
              </div>
              <button
                className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px] flex items-center py-[5px] justify-center rounded-[10px] font-medium text-lg fill-[#7C8B9D] bg-[#E6E9EC]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[0.85em] min-[840px]:h-[1em]"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
              {/* vaksin 6 */}
              <div
              className="flex rounded-xl h-auto justify-center items-center px-5 py-4 min-[840px]:p-6 bg-white border-[1px] border-solid border-[#D1D9E2]"
            >
              <div className="flex items-center w-full gap-x-4 min-[840px]:gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px]"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M28.68 0C35.46 0 40 4.76 40 11.84V28.182C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0H28.68ZM28.36 14C27.68 13.32 26.56 13.32 25.88 14L17.62 22.26L14.12 18.76C13.44 18.08 12.32 18.08 11.64 18.76C10.96 19.44 10.96 20.54 11.64 21.24L16.4 25.98C16.74 26.32 17.18 26.48 17.62 26.48C18.08 26.48 18.52 26.32 18.86 25.98L28.36 16.48C29.04 15.8 29.04 14.7 28.36 14Z"
                    fill="#D1D9E2"
                  />
                </svg>
                <div className="">
                  <h1 className="font-poppins text-lg min-[840px]:text-[20px] text-[#36455B] font-bold">
                    DTP 1
                  </h1>
                  <p className="text-[#898989] text-xs min-[840px]:text-sm">
                    Jadwal vaksin pada umur 59 Hari
                  </p>
                </div>
              </div>
              <button
                className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px] flex items-center py-[5px] justify-center rounded-[10px] font-medium text-lg fill-[#7C8B9D] bg-[#E6E9EC]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[0.85em] min-[840px]:h-[1em]"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::Dashboard - Immunization */}
    </>
  )
}