import AdminSidebar from "../../../layouts/AdminSidebar";
import { checkUserRole } from "../../../utils/auth/checkUserRole";

export default function Article(){
  checkUserRole('admin');

  return(
    <>
      <AdminSidebar/>
    </>
  )
}