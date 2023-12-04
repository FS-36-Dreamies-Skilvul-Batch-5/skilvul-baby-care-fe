import { useState } from "react";

export default function EditBabyModal({ babyData, handleEditModal }) {
  const [editBabyFormData, setEditBabyFormData] = useState({
    user_id: localStorage.getItem("user_id"),
    name: babyData.name,
    gender: babyData.gender,
    birth_date: babyData.birth_date,
  });

  const handleInputChange = (event) => {
    setEditBabyFormData({
      ...editBabyFormData,
      [event.target.name]: event.target.value,
    });
  };

  const fetchEditBaby = async () => {
    const token = localStorage.getItem("token");
    const babyId = localStorage.getItem("baby_id");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/babies/${babyId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editBabyFormData),
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    fetchEditBaby();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[99]">
        <div className="flex w-full h-full justify-center items-center px-6">
          <form
            onSubmit={submit}
            className="relative flex flex-col w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8"
          >
            <div className="text-start min-[840px]:text-center">
              <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">
                Edit Data Bayi
              </h1>
              <p className="text-xs min-[840px]:text-sm text-[#898989]">
                Edit data bayi anda
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                name="name"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Nama Bayi"
                value={editBabyFormData.name}
                onChange={handleInputChange}
                required
              ></input>
              <select
                name="gender"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                value={editBabyFormData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <input
                type="date"
                name="birth_date"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Tanggal Lahir"
                value={editBabyFormData.birth_date}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <button
              type="submit"
              className="font-semibold w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base"
            >
              Edit Data Bayi
            </button>

            <button
              onClick={handleEditModal}
              type="button"
              className="bg-[#1E3465] px-1.5 min-[840px]:px-2 py-1 absolute top-4 right-4 min-[840px]:right-6 cursor-pointer rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 min-[840px]:w-5 fill-white"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
