import { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar";
import Welcoming from "../../components/dashboard/Welcoming";
import SmallHeading from "../../components/dashboard/headings/SmallHeading";
import NutritionParameterCard from "../../components/dashboard/cards/NutritionParameterCard";
import Profile from "../../components/dashboard/Profile";
import NutritionStatusCard from "../../components/dashboard/cards/NutritionStatusCard";
import FirstAddModal from "../../components/dashboard/modals/FirstAddModal";
import DailyNeedList from "../../components/dashboard/lists/DailyNeedList";
import ImmunizationReminderList from "../../components/dashboard/lists/ImmunizationReminderList";
import DashboardLoading from "../../components/dashboard/loadings/DashboardLoading";
import AdminSidebar from "../../layouts/AdminSidebar";
import AdminWelcoming from "../../components/dashboard/admin/AdminWelcoming";
import MonitoringList from "../../components/dashboard/admin/lists/MonitoringList";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const [isUserHaveBaby, setIsUserHaveBaby] = useState(true);
  const [babyNutritionRecords, setBabyNutritionRecords] = useState([]);

  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  // Untuk mengecek apakah ada user yang login
  if (userId !== undefined && token !== undefined) {
    const checkUserRole = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          window.location.replace("/");
          return;
        }

        const data = await response.json();
        setUserRole(data.data.role);
        localStorage.setItem("role", userRole);
      } catch (err) {
        console.log(err);
        window.location.replace("/");
      }
    };

    checkUserRole();
  } else {
    window.location.replace("/");
  }

  const fetchBabyNutritionRecord = async () => {
    const babyId = localStorage.getItem("baby_id");
    setIsLoading(true);

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

  const fetchUserBaby = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users/${userId}/baby`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 404) {
        setIsUserHaveBaby(false);
        setIsLoading(false);
        return;
      } else {
        setIsUserHaveBaby(true);
      }

      const data = await response.json();
      localStorage.setItem("baby_id", data.data.id);
      localStorage.setItem("baby_name", data.data.name);
      localStorage.setItem("baby_birth", data.data.birth_date);
      localStorage.setItem("gender", data.data.gender);
      fetchBabyNutritionRecord();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (userRole == "user") {
      fetchUserBaby();
    } else if (userRole == "admin") {
      console.log("Admin");
      setIsLoading(false);
    }
  }, [userRole]);

  return (
    <>
      {!isLoading &&
        (userRole == "user" ? (
          <>
            <Sidebar />

            <div className="min-[840px]:pl-[78px] pt-12 min-[840px]:pt-0 pb-12 xl:pb-0">
              <div className="flex flex-col xl:flex-row justify-between w-full h-auto xl:h-screen px-[20px] sm:px-[35px] min-[840px]:pl-[55px] min-[840px]:pr-[55px] xl:pr-0 gap-x-[55px] select-none">
                <div className="py-10 flex flex-col w-full gap-y-[30px] xl:gap-y-[20px] min-[1600px]:gap-y-[30px]">
                  <Welcoming />

                  <div className="flex flex-col gap-y-3">
                    <SmallHeading
                      text="Dashboard"
                      desk="-"
                      variant={"dynamic"}
                      nutrition_records={babyNutritionRecords}
                    />
                    <NutritionParameterCard
                      nutrition_records={babyNutritionRecords}
                    />
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <SmallHeading
                      text="Kebutuhan Harian"
                      ket="berdasarkan umur bayi"
                    />
                    <DailyNeedList />
                  </div>
                </div>

                <div className="p-6 sm:p-8 min-[840px]:p-10 flex flex-col w-full xl:max-w-[435px] bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.10)] gap-y-10 xl:gap-y-[14px] min-[1600px]:gap-y-[30px] rounded-2xl xl:rounded-none">
                  <Profile />

                  <div className="flex flex-col gap-y-3">
                    <SmallHeading text="Status Gizi" />
                    <NutritionStatusCard
                      nutrition_records={babyNutritionRecords}
                    />
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <SmallHeading text="Pengingat Imunisasi" />
                    <ImmunizationReminderList />
                  </div>
                </div>
              </div>
            </div>

            {!isUserHaveBaby && <FirstAddModal />}
          </>
        ) : (
          <>
            <AdminSidebar />

            <div className="min-[840px]:pl-[78px] pt-12 min-[840px]:pt-0 pb-12 xl:pb-0">
              <div className="flex flex-col xl:flex-row justify-between w-full h-auto xl:h-screen px-[20px] sm:px-[35px] min-[840px]:pl-[55px] min-[840px]:pr-[55px] xl:pr-0 gap-x-[55px] select-none">
                <div className="py-10 flex flex-col w-full gap-y-[30px] xl:gap-y-[20px] min-[1600px]:gap-y-[30px]">
                  <AdminWelcoming />

                  <div className="flex flex-col gap-y-3">
                    <SmallHeading
                      text="Dashboard"
                      desk="kesimpulan dari semua data yang ada"
                    />

                    <MonitoringList />
                  </div>
                </div>

                <div className="p-6 sm:p-8 min-[840px]:p-10 flex flex-col w-full xl:max-w-[435px] bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.10)] gap-y-10 xl:gap-y-[18px] min-[1600px]:gap-y-[30px] rounded-2xl xl:rounded-none">
                  <Profile />

                  <div className="relative w-full h-[300px] xl:h-[220px] rounded-2xl overflow-hidden">
                    <img
                      src="/assets/images/admin-decoration.jpg"
                      alt="Decorations"
                      className="w-full h-full rounded-xl object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#272C49]/80 to-[#F8D16D]/40 backdrop-blur-[1px]"></div>
                    <img
                      src="/assets/icons/hello.png"
                      alt="Decorations"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] aspect-[256/256] animate-pulse"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

      <DashboardLoading loadState={isLoading} />
    </>
  );
}
