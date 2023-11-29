import { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar";
import Heading from "../../components/dashboard/headings/Heading";
import AddDataButton from "../../components/dashboard/buttons/AddDataButton";
import BabyNutritionRecordList from "../../components/dashboard/lists/BabyNutritionRecordList";
import AddModal from "../../components/dashboard/modals/AddModal";
import {
  getNutritionStatus,
  calculateBabyAgeInMonths,
} from "../../utils/nutritionAlgorithm";
import { convertHumanReadDateFormat } from "../../utils/convertHumanReadDateFormat";
import { checkUserRole } from "../../utils/auth/checkUserRole";

export default function BabyData() {
  checkUserRole('user');

  const [selectedFilter, setSelectedFilter] = useState("Semua");
  const [babyNutritionRecords, setBabyNutritionRecords] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleAddModal = () => {
    setShowAddModal((prev) => !prev);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const fetchBabyNutritionRecord = async () => {
    const babyId = localStorage.getItem("baby_id");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:3000/babies/${babyId}/nutrition-records`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setBabyNutritionRecords(data.data);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const babyAge = calculateBabyAgeInMonths(localStorage.getItem("baby_birth"));
  console.log(babyAge)
  const babyGender = localStorage.getItem("gender");

  const NutritionRecordsWithConclusion = babyNutritionRecords.map((record) => ({
    ...record,
    nutrition_status: getNutritionStatus({
      weight: record.weight,
      height: record.height,
      babyAge,
      babyGender,
    }).nutritionConclusion(),
  }));

  const filteredData = NutritionRecordsWithConclusion.filter((item) => {
    if (selectedFilter == "Semua") {
      return item;
    } else if (selectedFilter == "Gizi Buruk") {
      return item.nutrition_status == "Gizi Buruk";
    } else if (selectedFilter == "Gizi Kurang") {
      return item.nutrition_status == "Gizi Kurang";
    } else if (selectedFilter == "Gizi Baik") {
      return item.nutrition_status == "Gizi Baik";
    } else if (selectedFilter == "Beresiko Gizi Lebih") {
      return item.nutrition_status == "Beresiko Gizi Lebih";
    } else if (selectedFilter == "Gizi Lebih") {
      return item.nutrition_status == "Gizi Lebih";
    } else if (selectedFilter == "Obesitas") {
      return item.nutrition_status == "Obesitas";
    } 
  });

  useEffect(() => {
    fetchBabyNutritionRecord();
  }, []);
  return (
    <>
      <Sidebar />

      <div className="min-[840px]:pl-[60px] pt-12 min-[840px]:pt-0 pb-12 min-[840px]:pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-10 min-[840px]:gap-y-7">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading
              text="Data Anak"
              desk={`terakhir diupdate ${
                babyNutritionRecords && babyNutritionRecords.length !== 0
                  ? convertHumanReadDateFormat(
                      babyNutritionRecords[babyNutritionRecords.length - 1]
                        .growth_date
                    )
                  : "-"
              }`}
            />
          </div>

          <div className="flex flex-col w-full h-full gap-y-5">
            <div className="grid md:grid-cols-4 gap-5 md:gap-7">
              <div className="relative w-full md:col-span-3">
                <select
                  name="filter"
                  value={selectedFilter}
                  onChange={handleFilterChange}
                  className="w-full rounded-xl text-sm min-[840px]:text-base text-gray-400 px-4 py-3.5 border-[1px] border-solid border-[#D1D9E2] focus:outline-none appearance-none"
                >
                  <option value="Semua">Semua</option>
                  <option value="Gizi Buruk">Gizi Buruk</option>
                  <option value="Gizi Kurang">Gizi Kurang</option>
                  <option value="Gizi Baik">Gizi Baik</option>
                  <option value="Beresiko Gizi Lebih">Beresiko Gizi Lebih</option>
                  <option value="Gizi Lebih">Gizi Lebih</option>
                  <option value="Obesitas">Obesitas</option>
                </select>
                <div className="absolute text-xl text-amber-500 font-bold top-1/2 right-[14px] translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 h-[0.9em]"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
              </div>

              <AddDataButton handleAddModal={toggleAddModal} />
            </div>

            {!isLoading ? (
              <BabyNutritionRecordList records={filteredData} />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>

      {showAddModal && <AddModal handleAddModal={toggleAddModal} />}
    </>
  );
}
