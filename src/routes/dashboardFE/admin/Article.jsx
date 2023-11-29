import AdminSidebar from "../../../layouts/AdminSidebar";
import Heading from "../../../components/dashboard/headings/Heading";
import { checkUserRole } from "../../../utils/auth/checkUserRole";

export default function Article(){
  checkUserRole('admin');

  return(
    <>
      <AdminSidebar/>

      <div className="min-[840px]:pl-[62px] pt-12 min-[840px]:pt-0 pb-0">
        <div className="flex flex-col w-full h-screen py-10 px-[20px] sm:px-[35px] min-[840px]:pl-[55px] gap-y-6 overflow-y-hidden">
          <div className="w-full flex flex-col text-start mb-2">
            <Heading
              text="Artikel"
              ket="Berikut merupakan list artikel"
            />
          </div>
        </div>
      </div>
    </>
  )
}