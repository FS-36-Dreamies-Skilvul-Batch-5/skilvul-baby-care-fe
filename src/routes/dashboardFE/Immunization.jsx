import { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar";
import Heading from "../../components/dashboard/headings/Heading";
import ImmunizationList from "../../components/dashboard/lists/ImmunizationList";
import { checkUserRole } from "../../utils/auth/checkUserRole";

export default function Immunization() {
  checkUserRole('user');

  const [immunizationList, setImmunizationList] = useState([]);
  const [vaccinationRecords, setVaccinationRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const babyId = localStorage.getItem("baby_id");
  
    try {
      const [immunizationResponse, vaccinationRecordResponse] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/vaccines`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch(`${import.meta.env.VITE_API_URL}/babies/${babyId}/vaccination-records`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);
  
      if (!immunizationResponse.ok || !vaccinationRecordResponse.ok) {
        return;
      }
  
      const immunizationData = await immunizationResponse.json();
      const vaccinationRecordData = await vaccinationRecordResponse.json();
  
      setImmunizationList(immunizationData.data);
      setVaccinationRecords(vaccinationRecordData.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const finalVaccinationRecord = immunizationList.map((item) => {
    const matchingVaccineRecordId = vaccinationRecords.find((record) => record.vaccine_id === item.id);
    const status = matchingVaccineRecordId ? "Sudah" : "Belum";
    const vaccination_record_id = matchingVaccineRecordId ? matchingVaccineRecordId.id : null;

    return { ...item, status, vaccination_record_id };
  });

  const filteredVaccinationRecord = finalVaccinationRecord.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(filterName.toLowerCase());

    if (filterStatus === "Semua") {
      return matchesName;
    } else if (filterStatus === "Sudah") {
      return matchesName && item.status === "Sudah";
    } else if (filterStatus === "Belum") {
      return matchesName && item.status === "Belum";
    }
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Sidebar />

      <div className="min-[840px]:pl-[62px] pt-12 min-[840px]:pt-0 pb-0">
        <div className="flex flex-col w-full h-screen py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-6 overflow-y-hidden">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading
              text="Imunisasi"
              ket="Berikut merupakan list vaksin yang diperlukan oleh anak"
            />
          </div>

          <div className="flex flex-col w-full h-full gap-y-5">
            <div className="grid md:grid-cols-3 gap-5 md:gap-7">
              <div className="md:col-span-2 flex items-center w-full px-4 py-3.5 rounded-xl border-[1px] border-solid border-[#D1D9E2] bg-white overflow-hidden gap-x-2">
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
                  placeholder="Search"
                  value={filterName}
                  onChange={(e) => setFilterName(e.target.value)}
                />
              </div>

              {/* dropdown */}
              <div className="relative w-full">
                <select
                  name="status"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full rounded-xl text-sm min-[840px]:text-base text-gray-400 px-4 py-3.5 border-[1px] border-solid border-[#D1D9E2] focus:outline-none appearance-none"
                >
                  <option value="Semua">Semua</option>
                  <option value="Sudah">Sudah</option>
                  <option value="Belum">Belum</option>
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
            </div>

            {!isLoading ? (
              <ImmunizationList list={filteredVaccinationRecord}/>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
