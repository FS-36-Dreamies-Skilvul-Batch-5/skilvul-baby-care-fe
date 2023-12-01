import { useState, useEffect } from "react";

export default function Profile(){
  const [userData, setUserData] = useState('');
  const userId = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users/${userId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setUserData(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserData();
  }, [])
  return(
    <div className="flex items-center gap-x-3">
      <img src={userData.img_url !== "" ? `http://localhost:3000/user-image/${userData.img_url}` : "../assets/images/users/user-default.png"}
        alt="User's Profile Picture"
        className="w-[50px] h-[50px] shrink-0 border-2 border-[#272C49] rounded-full object-cover"
      ></img>
      <div>
        <h1 id="user_full_name" className="font-semibold text-[#272C49] text-lg">
          {userData.name}
        </h1>
        <div className="text-xs text-[#898989] -mt-0.5">{userData.username}</div>
      </div>
    </div>
  )
}
