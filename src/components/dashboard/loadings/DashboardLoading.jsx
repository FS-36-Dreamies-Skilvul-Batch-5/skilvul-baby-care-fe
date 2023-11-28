export default function DashboardLoading({ loadState }) {
  return (
    <div
      className={`${
        loadState ? "visible opacity-100" : "invisible opacity-0"
      } fixed top-0 left-0 w-full h-screen bg-white flex justify-center items-center duration-[300ms] ease-out`}
    >
      <img
        src="/assets/icons/only-baby-logo.png"
        alt="BabyCare Logo"
        className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce"
      />
    </div>
  );
}
