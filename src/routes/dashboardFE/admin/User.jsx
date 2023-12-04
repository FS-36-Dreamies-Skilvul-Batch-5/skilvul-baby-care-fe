import { useState, useEffect } from "react";
import AdminSidebar from "../../../layouts/AdminSidebar";
import Heading from "../../../components/dashboard/headings/Heading";
import AddDataButton from "../../../components/dashboard/buttons/AddDataButton";
import UserList from "../../../components/dashboard/admin/lists/UserList";
import { checkUserRole } from "../../../utils/auth/checkUserRole";
import AddUserModal from "../../../components/dashboard/admin/modals/AddUserModal";

export default function User() {
  checkUserRole("admin");

  const [selectedFilter, setSelectedFilter] = useState("Semua");
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleAddModal = () => {
    setShowAddModal((prev) => !prev);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };
  
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users`,
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
      setUsers(data.data);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredUsers = users.filter((item) => {
    if (selectedFilter == "Semua") {
      return item;
    } else if (selectedFilter == "User") {
      return item.role == "user";
    } else if (selectedFilter == "Admin") {
      return item.role == "admin";
    }
  });

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <>
      <AdminSidebar />

      <div className="min-[840px]:pl-[62px] pt-12 min-[840px]:pt-0 pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-6 overflow-y-hidden">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading
              text="User"
              ket="Berikut merupakan list semua user yang menggunakan aplikasi"
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
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
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
              <UserList users={filteredUsers} />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>

      {showAddModal && <AddUserModal handleAddModal={toggleAddModal} />}
    </>
  );
}
