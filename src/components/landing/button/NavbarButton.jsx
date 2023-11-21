import { Link } from "react-router-dom";

export default function NavbarButton() {
  return (
    <div className="hidden lg:block">
      <Link to="/signup" className="signup_link flex justify-center items-center gap-x-2 bg-[#FFCB40] py-3 px-8 rounded-lg">
        <span className="text-[#B05F00] font-semibold">Get Started</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0L9.72023 0.00384421C4.32942 0.152163 0 4.57356 0 10C0 15.51 4.48 20 10 20C15.51 20 20 15.51 20 10C20 4.48 15.51 0 10 0ZM8.02 6C8.32 5.7 8.79 5.7 9.08 6L12.57 9.47C12.71 9.61 12.79 9.8 12.79 10C12.79 10.2 12.71 10.39 12.57 10.53L9.08 14C8.94 14.15 8.75 14.22 8.56 14.22C8.36 14.22 8.17 14.15 8.02 14C7.73 13.7 7.73 13.23 8.03 12.94L10.98 10L8.03 7.06C7.73 6.77 7.73 6.29 8.02 6Z" fill="#B05F00"/>
        </svg>
      </Link>
      <Link to="/dashboard/index" className="dashboard_link hidden justify-center items-center gap-x-2 bg-[#FFCB40] py-3 px-8 rounded-lg">
        <span className="text-[#B05F00] font-semibold">Dashboard</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0L9.72023 0.00384421C4.32942 0.152163 0 4.57356 0 10C0 15.51 4.48 20 10 20C15.51 20 20 15.51 20 10C20 4.48 15.51 0 10 0ZM8.02 6C8.32 5.7 8.79 5.7 9.08 6L12.57 9.47C12.71 9.61 12.79 9.8 12.79 10C12.79 10.2 12.71 10.39 12.57 10.53L9.08 14C8.94 14.15 8.75 14.22 8.56 14.22C8.36 14.22 8.17 14.15 8.02 14C7.73 13.7 7.73 13.23 8.03 12.94L10.98 10L8.03 7.06C7.73 6.77 7.73 6.29 8.02 6Z" fill="#B05F00"/>
        </svg>
      </Link>
    </div>
  );
}