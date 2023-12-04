import { useState, useEffect } from "react";
import AdminSidebar from "../../../layouts/AdminSidebar";
import Heading from "../../../components/dashboard/headings/Heading";
import VaccineList from "../../../components/dashboard/admin/lists/VaccineList";
import { checkUserRole } from "../../../utils/auth/checkUserRole";

export default function Vaccine() {
  checkUserRole("admin");

  const [vaccines, setVaccines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterName, setFilterName] = useState("");

  const fetchVaccines = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/vaccines`,
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
      setVaccines(data.data);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredVaccines = vaccines.filter((item) => {
    return item.name.toLowerCase().includes(filterName.toLowerCase());
  });

  useEffect(() => {
    fetchVaccines();
  }, []);

  return (
    <>
      <AdminSidebar />

      <div className="min-[840px]:pl-[62px] pt-12 min-[840px]:pt-0 pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-6 overflow-y-hidden">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading text="Vaksin" ket="Berikut merupakan list semua vaksin" />
          </div>

          <div className="flex flex-col w-full h-full gap-y-5">
            <div className="grid grid-cols-1">
              <div className="flex items-center w-full px-4 py-3.5 rounded-xl border-[1px] border-solid border-[#D1D9E2] bg-white overflow-hidden gap-x-2">
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
            </div>

            {!isLoading ? (
              <VaccineList vaccines={filteredVaccines} />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
