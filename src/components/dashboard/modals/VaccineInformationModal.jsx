import { useState } from "react";
import SanitizeRawHTML from "../../SanitizeRawHTML";
import AddVaccinationRecordModal from "./AddVaccinationRecordModal";
import EditVaccinationRecordModal from "./EditVaccinationRecordModal";

export default function VaccineInformationModal({
  vaccine_info,
  handleVaccineModal,
}) {
  const { name, benefit, information, grant_date_guide, status } = vaccine_info;

  const [showAddRecordModal, setShowAddRecordModal] = useState(false);
  const [showEditRecordModal, setShowEditRecordModal] = useState(false);

  const toggleAddRecordModal = () => {
    setShowAddRecordModal((prev) => !prev);
  };
  const toggleEditRecordModal = () => {
    setShowEditRecordModal((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          showAddRecordModal || showEditRecordModal
            ? "opacity-0 invisible"
            : "opacity-100 visible"
        } fixed top-0 left-0 w-full h-screen bg-black/50 z-[99]`}
      >
        <div className="flex w-full h-full justify-center items-center px-6">
          <div className="relative flex flex-col w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8">
            <div className="text-start min-[840px]:text-center">
              <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">
                {name}
              </h1>
              <p className="text-xs min-[840px]:text-sm text-[#898989]">
                Jadwal vaksin pada umur{" "}
                <span className="font-semibold">{grant_date_guide}</span>
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-y-3">
              <div className="w-full text-start">
                <h2 className="font-semibold text-base min-[840px]:text-lg text-[#36455B]">
                  Manfaat:
                </h2>
                <p className="text-[#898989] text-sm min-[840px]:text-base">
                  {benefit}
                </p>
              </div>
              <div className="w-full text-start">
                <h2 className="font-semibold text-base min-[840px]:text-lg text-[#36455B]">
                  Informasi Vaksin:
                </h2>
                <div className="raw_ol_element">
                  <SanitizeRawHTML
                    rawHtml={information}
                    customClass={"text-[#898989]"}
                  />
                </div>
              </div>
            </div>

            {status == "Sudah" ? (
              <button
                onClick={toggleEditRecordModal}
                className="font-semibold w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base"
              >
                Edit Record
              </button>
            ) : (
              <button
                onClick={toggleAddRecordModal}
                className="font-semibold w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base"
              >
                Buat Record
              </button>
            )}
            <button
              onClick={handleVaccineModal}
              type="button"
              className="bg-[#1E3465] px-1.5 min-[840px]:px-2 py-1 absolute top-4 right-4 min-[840px]:right-6 cursor-pointer rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 min-[840px]:w-5 fill-white"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showAddRecordModal && (
        <AddVaccinationRecordModal
          vaccine_info={vaccine_info}
          handleAddModal={toggleAddRecordModal}
        />
      )}

      {showEditRecordModal && (
        <EditVaccinationRecordModal
          vaccine_info={vaccine_info}
          handleEditModal={toggleEditRecordModal}
        />
      )}
    </>
  );
}
