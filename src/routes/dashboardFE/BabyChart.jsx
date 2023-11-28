import { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar";
import Heading from "../../components/dashboard/headings/Heading";
import SelectableNutritionParameterCard from "../../components/dashboard/cards/SelectableNutritionParameterCard";
import DashboardLoading from "../../components/dashboard/loadings/DashboardLoading";
import { convertHumanReadDateFormat } from "../../utils/convertHumanReadDateFormat";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import { Line } from "react-chartjs-2";

export default function BabyChart() {
  const [isLoading, setIsLoading] = useState(true);
  const [babyNutritionRecords, setBabyNutritionRecords] = useState([]);
  const [selectedChart, setSelectedChart] = useState("Berat Badan");
  const [ageRange, setAgeRange] = useState("0-6");

  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");
  const babyId = localStorage.getItem("baby_id");

  const handleChange = (value) => {
    setSelectedChart(value);
  };

  const fetchBabyNutritionRecord = async () => {
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
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (userId == undefined && token == undefined) {
    window.location.replace("/");
  } else {
    console.log("User is logged in");
  }

  const convertedAgeRange = () => {
    const ranges = {
      "0-2": 3,
      "0-6": 7,
      "0-12": 13,
      "0-24": 25,
      "0-36": 37,
    };
    const selectedRange = ranges[ageRange];
  
    if (selectedRange !== undefined) {
      return Array.from({ length: selectedRange }, (_, index) => index);
    } else {
      console.error("Invalid age range:", ageRange);
      return [];
    }
  };

  const chartDataBasedOnState = () => {
    if(selectedChart == "Berat Badan"){
      return babyNutritionRecords.map(item => item.weight);
    } else if(selectedChart == "Tinggi Badan"){
      return babyNutritionRecords.map(item => item.height);
    } else {
      return babyNutritionRecords.map(item => item.head_circumference);
    }
  }

  const getSuggestedMin = () => {
    if(selectedChart == "Berat Badan"){
      return 2;
    } else if(selectedChart == "Tinggi Badan"){
      return 40;
    } else {
      return 25;
    }
  }

  const getSuggestedMax = () => {
    if (selectedChart === "Berat Badan") {
      return Math.max(...babyNutritionRecords.map(item => item.weight)) + 4;
    } else if (selectedChart === "Tinggi Badan") {
      return Math.max(...babyNutritionRecords.map(item => item.height)) + 20;
    } else {
      return Math.max(...babyNutritionRecords.map(item => item.head_circumference)) + 10;
    }
  }
  
  console.log(getSuggestedMax())

  useEffect(() => {
    fetchBabyNutritionRecord();
  }, []);
  return (
    <>
      {!isLoading && (
        <>
          <Sidebar />

          <div className="min-[840px]:pl-[60px] pt-12 min-[840px]:pt-0 pb-12 min-[840px]:pb-0">
            <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-10 min-[840px]:gap-y-7">
              <div className="w-full flex flex-col text-start mb-2">
                <Heading
                  text="Grafik Pertumbuhan"
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

              <SelectableNutritionParameterCard
                nutrition_records={babyNutritionRecords}
                state={selectedChart}
                handleChange={handleChange}
              />

              <div className="w-full rounded-md outline outline-2 outline-[#D1D9E2] p-[15px] mt-3">
                <div className="flex flex-col ">
                  <div className="grid md:grid-cols-3 gap-y-3">
                    <div className="md:col-span-2 flex items-center w-full overflow-hidden">
                      <div className="flex flex-col overflow-hidden gap-x-2">
                        <h1 className="font-opensans text-base lg:text-lg text-[#272C49] font-extrabold">
                          {selectedChart == "Berat Badan" &&
                            "Berat Badan Sesuai Usia"}
                          {selectedChart == "Tinggi Badan" &&
                            "Tinggi Badan Sesuai Usia"}
                          {selectedChart == "Lingkar Kepala" &&
                            "Lingkar Kepala Sesuai Usia"}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="grid md:grid-cols-3">
                      <div className="md:col-span-2 flex items-center w-full overflow-hidden">
                        <span className="text-sm">
                          {selectedChart == "Berat Badan" && "Berat (kg)"}
                          {selectedChart == "Tinggi Badan" && "Tinggi (cm)"}
                          {selectedChart == "Lingkar Kepala" &&
                            "Lingkar Kepala (cm)"}
                        </span>
                      </div>

                      <div className="relative w-full">
                        <select
                          value={ageRange}
                          onChange={(e) => setAgeRange(e.target.value)}
                          className="w-full rounded-lg text-sm text-gray-400 px-2.5 py-3 border-[0.5px] border-gray-200 shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] focus:outline-none appearance-none"
                        >
                          <option value="0-2" className="text-sm">
                            Grafik 0-2 bulan
                          </option>
                          <option value="0-6" className="text-sm">
                            Grafik 0-6 bulan
                          </option>
                          <option value="0-12" className="text-sm">
                            Grafik 0-12 bulan
                          </option>
                          <option value="0-24" className="text-sm">
                            Grafik 0-24 bulan
                          </option>
                          <option value="0-36" className="text-sm">
                            Grafik 0-36 bulan
                          </option>
                        </select>
                        <div className="absolute text-xl font-bold top-1/2 right-[14px] translate-y-[-50%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-gray-400 h-[0.9em]"
                            viewBox="0 0 448 512"
                          >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <Line
                      datasetIdKey="Baby Chart"
                      data={{
                        labels: convertedAgeRange(),
                        datasets: [
                          {
                            id: 1,
                            label: selectedChart,
                            data: chartDataBasedOnState(),
                            borderColor: '#56B0F8',
                            backgroundColor: '#30628A',
                            tension: 0.1,
                            borderWidth: 3.5,
                            pointRadius: 4,
                            pointBorderWidth: 1,
                            pointHitRadius: 3 
                          },
                          // {
                          //   id: 3,
                          //   label: 'Max Value',
                          //   data: maxValue,
                          //   borderColor: '#FF0000',
                          //   backgroundColor: '#7E0000',
                          //   borderWidth: 1,
                          //   tension: 0.1,
                          // },
                          // {
                          //   id: 4,
                          //   label: 'Min Value',
                          //   data: minValue,
                          //   borderColor: '#FF0000',
                          //   backgroundColor: '#7E0000',
                          //   borderWidth: 1,
                          //   tension: 0.1,
                          // },
                        ],
                      }}
                      options={{
                        responsive: true,
                        scales: {
                          y: {
                            beginAtZero: false,
                            suggestedMin: getSuggestedMin(),
                            suggestedMax: getSuggestedMax()
                          },
                        },
                        plugins: {
                          legend: {
                            position: 'top',
                          }
                        },
                      }}
                    />

                    <p className="flex justify-end text-xs">Usia (bulan)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <DashboardLoading loadState={isLoading} />
    </>
  );
}
