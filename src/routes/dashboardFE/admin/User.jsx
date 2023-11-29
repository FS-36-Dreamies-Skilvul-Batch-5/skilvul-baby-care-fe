import AdminSidebar from "../../../layouts/AdminSidebar";
import { checkUserRole } from "../../../utils/auth/checkUserRole";

export default function User(){
  checkUserRole('admin');

  return(
    <>
      <AdminSidebar/>
    </>
  )
}