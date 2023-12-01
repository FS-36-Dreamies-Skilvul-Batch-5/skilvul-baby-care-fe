import { useState } from "react";
import VaccineInformationModal from "../modals/VaccineInformationModal";

export default function ImmunizationCard(props) {
  const { name, grant_date_guide, status } = props;
  const [showInformationModal, setShowInformationModal] = useState(false);

  const toggleInformationModal = () => {
    setShowInformationModal((prev) => !prev);
  };

  return (
    <>
      <div className="flex rounded-xl h-auto justify-center items-center px-5 py-4 min-[840px]:p-6 bg-white border-[1px] border-solid border-[#D1D9E2]">
        <div className="flex items-center w-full gap-x-4 min-[840px]:gap-x-8">
          {status == "Belum" ? (
            <div
              className={`bg-gray-400
              } w-[32px] h-[32px] flex justify-center items-center rounded-lg`}
            >
              <span className="font-bold text-white text-xl">-</span>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M28.68 0C35.46 0 40 4.76 40 11.84V28.182C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0H28.68ZM28.36 14C27.68 13.32 26.56 13.32 25.88 14L17.62 22.26L14.12 18.76C13.44 18.08 12.32 18.08 11.64 18.76C10.96 19.44 10.96 20.54 11.64 21.24L16.4 25.98C16.74 26.32 17.18 26.48 17.62 26.48C18.08 26.48 18.52 26.32 18.86 25.98L28.36 16.48C29.04 15.8 29.04 14.7 28.36 14Z"
                fill="#6BD147"
              />
            </svg>
          )}

          <div className="">
            <h1 className="font-poppins text-lg min-[840px]:text-[20px] text-[#36455B] font-bold">
              {name}
            </h1>
            <p className="text-[#898989] text-xs min-[840px]:text-sm">
              Jadwal vaksin {grant_date_guide}
            </p>
          </div>
        </div>
        <button
          onClick={toggleInformationModal}
          className="w-[32px] min-[840px]:w-[36px] h-[32px] min-[840px]:h-[36px] flex items-center py-[5px] justify-center rounded-[10px] font-medium text-lg fill-[#7C8B9D] bg-[#E6E9EC]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[0.85em] min-[840px]:h-[1em]"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>

      {showInformationModal && (
        <VaccineInformationModal
          vaccine_info={props}
          handleVaccineModal={toggleInformationModal}
        />
      )}
    </>
  );
}
