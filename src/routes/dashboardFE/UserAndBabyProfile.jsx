import Sidebar from "../../layouts/Sidebar";
import Heading from "../../components/dashboard/headings/Heading";
import UserProfileCard from "../../components/dashboard/cards/UserProfileCard";
import BabyProfileCard from "../../components/dashboard/cards/BabyProfileCard";
import { checkUserRole } from "../../utils/auth/checkUserRole";

export default function UserAndBabyProfile() {
  checkUserRole('user');
  
  return (
    <>
      <Sidebar />

      <div className="min-[840px]:pl-[60px] pt-12 min-[840px]:pt-0 pb-12 min-[840px]:pb-0">
        <div className="flex flex-col w-full h-auto py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-10 min-[840px]:gap-y-7">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading text="Profile" desk={"Data mengenai anda & anak anda"} />
          </div>

          <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-5 md:gap-6">
            <UserProfileCard/>
            <BabyProfileCard/>
          </div>
        </div>
      </div>
    </>
  );
}
