export default function LogoutModal({handleLogoutModal}) {
  const logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("baby_id");
    localStorage.removeItem("baby_name");
    localStorage.removeItem("baby_birth");
    localStorage.removeItem("gender");
    window.location.replace("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[99]">
      <div className="flex w-full h-full justify-center items-center px-6">
        <div className="relative flex flex-col justify-center items-center w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8">
          <img
            src="/assets/icons/logout.png"
            className="w-[70px] md:w-[90px] aspect-[80/80]"
            alt="Logout Icon"
          />
          <div className="text-center">
            <h1 className="font-bold text-[20px] md:text-[26px] text-[#272C49]">
              Apakah anda yakin ingin keluar?
            </h1>
            <p className="text-sm md:text-base">
              Kami akan merindukan kehadiran mu ✨
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-x-4 gap-y-3">
            <button
              onClick={logout}
              className="w-full py-3 px-10 bg-[#FF6161] rounded-xl font-semibold text-white"
            >
              Ya, Keluarkan saya!
            </button>
            <button
              onClick={handleLogoutModal}
              className="w-full py-3 px-10 bg-transparent border-2 border-[#898989] rounded-xl font-semibold text-[#898989]"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
