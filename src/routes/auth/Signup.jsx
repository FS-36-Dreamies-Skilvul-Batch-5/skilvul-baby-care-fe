import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    isAgree: false,
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if(registerFormData.isAgree){
      setShowErrorMessage(false);

      try {
        const response = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(registerFormData),
        });
  
        if (!response.ok) {
          return;
        }
  
        const data = await response.json();
        console.log(data);
        // Redirect to Register Success
        window.location.replace("/register-success");
      } catch (err) {
        console.log(err);
      }
    } else {
      setShowErrorMessage(true);
    }
  };
  return (
    <div
      className="bg-[url('assets/images/blue-background.webp')]  bg-no-repeat bg-center bg-cover 
    w-full h-screen flex justify-center items-center px-4 py-20"
    >
      <form
        id="signup_form"
        onSubmit={submit}
        className="flex flex-col lg:flex-row justify-center gap-x-10 gap-y-4 bg-white w-full max-w-[800px] h-auto rounded-[24px] md:rounded-[40px] py-[20px] md:py-[24px] lg:py-[32px] px-[24px] md:px-[32px] lg:px-[40px] select-none"
      >
        <div className="order-2 lg:order-1 flex-1 flex flex-col justify-center items-start gap-y-[30px] self-stretch">
          <div className="-ml-1">
            <h1 className="text-[36px] md:text-[42px] font-extrabold font-opensans -mb-2 text-[#272C49]">
              Join Us 🙌
            </h1>

            <span
              id="warning_msg"
              className={`${showErrorMessage ? 'block' : 'hidden'} absolute text-red-500 text-sm ml-1`}
            >
              Terima ketentuan & kebijakan privasi!
            </span>
          </div>

          <div className="w-full flex flex-col gap-y-[20px]">
            <div>
              <label className="font-medium text-[#474F7C] text-sm md:text-base">
                Akun
              </label>
              <div className="flex flex-col gap-y-[10px]">
                <div className="flex flex-col gap-y-2 gap-x-8">
                  <input
                    id="name_field"
                    type="text"
                    name="name"
                    className="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] text-[#474F7C] placeholder:text-[#BDCAE6]"
                    placeholder="Masukkan Nama Anda"
                    value={registerFormData.name}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <input
                    id="username_field"
                    type="text"
                    name="username"
                    className="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] text-[#474F7C] placeholder:text-[#BDCAE6]"
                    placeholder="Masukkan Username Anda"
                    pattern="[a-z]+"
                    value={registerFormData.username}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <input
                    id="email_field"
                    type="email"
                    name="email"
                    className="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] text-[#474F7C] placeholder:text-[#BDCAE6]"
                    placeholder="Masukkan Email Anda"
                    value={registerFormData.email}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <input
                    id="password_field"
                    type="password"
                    name="password"
                    className="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] text-[#474F7C] placeholder:text-[#BDCAE6]"
                    placeholder="Password"
                    value={registerFormData.password}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-[12px] mt-1">
            <div className="flex justify-between">
              <div className="flex gap-x-[10px] items-center">
                <span className="text-[#474F7C] text-sm md:text-base ml-0.5">
                  Saya Menerima
                  <a href="" className="font-semibold mx-1">
                    Ketentuan
                  </a>{" "}
                  &
                  <a href="" className="font-semibold mx-1">
                    Kebijakan Privasi
                  </a>
                </span>
              </div>

              <input
                id="agree_status"
                type="checkbox"
                name="isAgree"
                checked={registerFormData.isAgree}
                onChange={handleInputChange}
                className="scale-[1.2] mr-0.5 cursor-pointer text-sm md:text-base"
              ></input>
            </div>
            <button
              type="submit"
              className="bg-[#1E3465] text-white text-base font-semibold rounded-[12px] py-3"
            >
              Sign up
            </button>
            <div className="text-center mt-3">
              <span className="text-[#474F7C] text-sm md:text-base">
                Sudah punya akun?
                <Link to={"/login"} className="font-semibold">
                  {" "}
                  Klik disini
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}