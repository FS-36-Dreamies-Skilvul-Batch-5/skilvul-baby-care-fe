import AdminSidebar from "../../../layouts/AdminSidebar";
import { checkUserRole } from "../../../utils/auth/checkUserRole";

export default function Vaccine(){
  checkUserRole('admin');

  return(
    <>
      <AdminSidebar/>
    </>
  )
}