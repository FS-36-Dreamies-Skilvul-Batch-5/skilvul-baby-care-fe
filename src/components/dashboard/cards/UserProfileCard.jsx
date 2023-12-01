import { useState, useEffect } from "react";
import EditUserModal from "../modals/EditUserModal";

export default function UserProfileCard() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    img_url: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  const toggleEditUserModal = () => {
    setShowEditUserModal((prev) => !prev);
  };

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setUserData(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <div className="relative w-full max-w-[450px] flex flex-col bg-white p-6 border border-[#D1D9E2] rounded-xl gap-y-3">
        <h1 className="mx-auto max-w-max font-bold text-lg md:text-2xl text-[#272C49] border-b-[3px] border-[#F8D16D]">
          Parent
        </h1>
        <div className="w-full flex flex-col gap-y-2">
          {!isLoading ? (
            <img
              src={`${
                userData.img_url !== ""
                  ? `http://localhost:3000/user-image/${userData.img_url}`
                  : "../assets/images/users/user-default.png"
              }`}
              alt="User's Profile Picture"
              className="mt-2 mx-auto w-[80px] h-[80px] shrink-0 border-2 border-[#272C49] rounded-full object-cover"
            ></img>
          ) : (
            <div className="mt-2 mx-auto w-[80px] h-[80px] shrink-0 bg-gray-200 rounded-full animate-pulse"></div>
          )}
          <div className="flex flex-col gap-y-1.5 mt-2">
            <div className="flex flex-col min-[400px]:flex-row text-sm sm:text-base text-[#272C49] gap-y-1">
              <span className="block w-32 sm:w-36 font-bold">Nama:</span>
              <span className="w-full block border-b border-gray-300 min-[400px]:pl-2">
                {!isLoading ? userData.name : "Loading..."}
              </span>
            </div>
            <div className="flex flex-col min-[400px]:flex-row text-sm sm:text-base text-[#272C49] gap-y-1">
              <span className="block w-32 sm:w-36 font-bold">Email:</span>
              <span className="w-full block border-b border-gray-300 min-[400px]:pl-2">
                {!isLoading ? userData.email : "Loading..."}
              </span>
            </div>
            <div className="flex flex-col min-[400px]:flex-row text-sm sm:text-base text-[#272C49] gap-y-1">
              <span className="block w-32 sm:w-36 font-bold">Username:</span>
              <span className="w-full block border-b border-gray-300 min-[400px]:pl-2">
                {!isLoading ? userData.username : "Loading..."}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={toggleEditUserModal}
          type="button"
          className="bg-[#1E3465] p-2 absolute top-4 right-4 min-[840px]:right-6 cursor-pointer rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-white"
            viewBox="0 0 512 512"
          >
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
          </svg>
        </button>
      </div>

      {showEditUserModal && (
        <EditUserModal
          userData={userData}
          handleEditModal={toggleEditUserModal}
        />
      )}
    </>
  );
}
