import { useState } from "react";

export default function EditUserModal({ userData, handleEditModal }) {
  const [editUserFormData, setEditUserFormData] = useState({
    name: userData.name,
    username: userData.username,
    email: userData.email,
    password: "",
    // img_url: userData.img_url,
    role: "user"
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(editUserFormData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setEditUserFormData((prevData) => ({
      ...prevData,
      img_url: file,
    }));
  };

  const fetchEditUser = async () => {
    const token = localStorage.getItem("token");
    const formDataToSend = new FormData();

    for (const key in editUserFormData) {
      formDataToSend.append(key, editUserFormData[key]);
    }

    console.log(formDataToSend)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userData.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
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
    setIsLoading(true);
    e.preventDefault();
    fetchEditUser();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[99]">
        <div className="flex w-full h-full justify-center items-center px-6">
          <form
            onSubmit={submit}
            encType="multipart/form-data"
            className="relative flex flex-col w-full max-w-[600px] py-[26px] px-[18px] min-[840px]:px-[26px] bg-white rounded-xl gap-y-6 min-[840px]:gap-y-8"
          >
            <div className="text-start min-[840px]:text-center">
              <h1 className="font-bold text-[22px] min-[840px]:text-[24px] text-[#272C49]">
                Edit Data User
              </h1>
              <p className="text-xs min-[840px]:text-sm text-[#898989]">
                Edit data diri anda
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                name="name"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Nama"
                value={editUserFormData.name}
                onChange={handleInputChange}
                required
              ></input>
              <input
                type="text"
                name="username"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Username"
                value={editUserFormData.username}
                onChange={handleInputChange}
                required
              ></input>
              <input
                type="email"
                name="email"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                placeholder="Email"
                value={editUserFormData.email}
                onChange={handleInputChange}
                required
              ></input>
              <input
                type="text"
                name="password"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-red-500 rounded-lg"
                placeholder="Password (Jangan diisi jika tidak ingin merubah password)"
                value={editUserFormData.password}
                onChange={handleInputChange}
              ></input>
              <input
                type="file"
                name="img_url"
                className="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] text-[#474F7C] placeholder:text-[#898989] rounded-lg"
                onChange={handleImageChange}
              ></input>
            </div>
            {!isLoading ? (
              <button
                type="submit"
                className="font-semibold w-full bg-[#1E3465] px-2 py-2.5 text-white rounded-lg text-sm min-[840px]:text-base"
              >
                Edit
              </button>
            ) : (
              <div className="w-full flex justify-center items-center bg-[#1E3465] px-2 py-3 text-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 fill-white animate-spin"
                  viewBox="0 0 512 512"
                >
                  <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                </svg>
              </div>
            )}

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
