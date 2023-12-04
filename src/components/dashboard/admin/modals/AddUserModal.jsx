import { useState } from "react";

export default function AddUserModal({ handleAddModal }) {
  const [addUserFormData, setUserFormData] = useState({
    name: '',
    username: '',
    email: "",
    password: "",
    img_url: "",
    role: "admin"
  });

  const handleInputChange = (event) => {
    setUserFormData({
      ...addUserFormData,
      [event.target.name]: event.target.value,
    });
  };

  const fetchAddUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addUserFormData),
        }
      );

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
    fetchAddUser();
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[9999]">
        <div className="flex w-full h-full justify-center items-center px-6">
          <form
            onSubmit={submit}
            className="relative flex flex-col w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8"
          >
            <div className="text-start min-[840px]:text-center">
              <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">
                Menambah Admin
              </h1>
              <p className="text-xs min-[840px]:text-sm text-[#898989]">
                Isi data berikut untuk membuat admin
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                name="name"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Nama"
                value={addUserFormData.name}
                onChange={handleInputChange}
                required
              ></input>
              <input
                type="text"
                name="username"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Username"
                value={addUserFormData.username}
                onChange={handleInputChange}
                required
              ></input>
              <input
                type="email"
                name="email"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Email"
                value={addUserFormData.email}
                onChange={handleInputChange}
                required
              ></input>
              <input
                type="text"
                name="password"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Password"
                value={addUserFormData.password}
                onChange={handleInputChange}
                required
              ></input>
              <input
                type="text"
                name="img_url"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Image"
                value={addUserFormData.img_url}
                onChange={handleInputChange}
              ></input>
            </div>
            <button
              type="submit"
              className="font-semibold w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base"
            >
              Buat Record
            </button>

            <button
              onClick={handleAddModal}
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
