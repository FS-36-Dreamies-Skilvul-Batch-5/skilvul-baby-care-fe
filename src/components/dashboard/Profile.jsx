import { useState, useEffect } from "react";

export default function Profile(){
  const [userFullName, setUserFullName] = useState('');
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
      setUserFullName(data.data.name);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserData();
  }, [])
  return(
    <div className="flex items-center gap-x-3">
      <img src="../assets/images/users/brenda-s.png" alt="User's Profile Picture" className="w-[50px] h-[50px] shrink-0 rounded-full"></img>
      <div>
        <h1 id="user_full_name" className="font-semibold text-[#272C49] text-lg">
          {userFullName}
        </h1>
        {/* <div className="flex gap-x-1 -mt-[1px]">
          <span className="text-xs text-[#898989]">bergabung</span>
          <span className="text-xs text-[#898989]">-</span>
          <span className="text-xs text-[#898989]">yang lalu</span>
        </div> */}
      </div>
    </div>
  )
}
