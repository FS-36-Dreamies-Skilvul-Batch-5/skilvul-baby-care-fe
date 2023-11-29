import AdminSidebar from "../../../layouts/AdminSidebar";
import { checkUserRole } from "../../../utils/auth/checkUserRole";

export default function ArticleCategory(){
  checkUserRole('admin');

  return(
    <>
      <AdminSidebar/>
    </>
  )
}