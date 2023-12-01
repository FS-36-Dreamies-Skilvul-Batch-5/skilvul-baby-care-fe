import { useState } from "react";

export default function FirstAddModal() {
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  const [babyFormData, setBabyFormData] = useState({
    user_id: userId,
    name: "",
    gender: "",
    birth_date: "",
    weight: "",
    height: "",
    head_circumference: "",
  });

  const handleInputChange = (event) => {
    setBabyFormData({
      ...babyFormData,
      [event.target.name]: event.target.value,
    });
  };

  const addNutritionRecord = async (babyId) => {
    const recordData = {
      baby_id: babyId,
      weight: babyFormData.weight,
      height: babyFormData.height,
      head_circumference: babyFormData.head_circumference,
      growth_date: babyFormData.birth_date,
    };

    try {
      const response = await fetch("http://localhost:3000/nutrition-records", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recordData),
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

  const submit = async (e) => {
    e.preventDefault();

    const babyData = {
      user_id: babyFormData.user_id,
      name: babyFormData.name,
      gender: babyFormData.gender,
      birth_date: babyFormData.birth_date,
    };

    try {
      const response = await fetch("http://localhost:3000/babies", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(babyData),
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem("baby_id", data.data.id);
      addNutritionRecord(data.data.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-[9999]">
        <div className="flex w-full h-full justify-center items-center px-6">
          <form
            onSubmit={submit}
            className="relative flex flex-col w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8"
          >
            <div className="text-start min-[840px]:text-center">
              <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">
                Welcome to Dashboard
              </h1>
              <p className="text-xs min-[840px]:text-sm text-[#898989]">
                Lengkapi semua data mengenai anak anda
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col min-[840px]:flex-row gap-y-5 gap-x-4">
                <input
                  type="text"
                  name="name"
                  className="w-full text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                  placeholder="Nama Anak Anda"
                  value={babyFormData.name}
                  onChange={handleInputChange}
                  required
                ></input>
                <select
                  name="gender"
                  className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                  value={babyFormData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div className="flex flex-col gap-y-5">
                <label
                  htmlFor="birth_date"
                  className="text-sm text-[#898989] -mb-4 -mt-2"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  name="birth_date"
                  id="birth_date"
                  className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                  value={babyFormData.birth_date}
                  onChange={handleInputChange}
                  required
                ></input>
                <input
                  type="text"
                  name="weight"
                  className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                  pattern="^[0-9]*\.?[0-9]*$"
                  placeholder="Berat Badan cth:(2.55)"
                  value={babyFormData.weight}
                  onChange={handleInputChange}
                  required
                ></input>
                <input
                  type="text"
                  name="height"
                  className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                  pattern="^[0-9]*\.?[0-9]*$"
                  placeholder="Tinggi Badan cth:(30)"
                  value={babyFormData.height}
                  onChange={handleInputChange}
                  required
                ></input>
                <input
                  type="text"
                  name="head_circumference"
                  className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                  pattern="^[0-9]*\.?[0-9]*$"
                  placeholder="Lingkar Kepala cth:(30.212)"
                  value={babyFormData.head_circumference}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
