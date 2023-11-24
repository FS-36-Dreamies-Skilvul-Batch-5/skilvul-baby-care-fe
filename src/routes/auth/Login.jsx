import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setLoginFormData({
      ...loginFormData,
      [event.target.name] : value
    })
  };

  const submit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(loginFormData)
      })
    
      if (!response.ok) {
        setShowErrorMessage(true);
        return;
      }

      const data = await response.json();
      setShowErrorMessage(false);
      console.log(data);
      // Store in LS
      localStorage.setItem('user_id', data.userId);
      // Redirect to landing
      window.location.replace("/");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className="
    bg-[url('assets/images/blue-background.webp')] 
    bg-no-repeat bg-center bg-cover 
    w-full h-auto lg:h-screen 
    flex justify-center items-center 
    px-4 py-20"
    >
      <div className="flex flex-col lg:flex-row justify-center gap-x-10 gap-y-4 bg-white w-full max-w-[1064px] h-auto rounded-[24px] md:rounded-[40px] p-[24px] md:p-[32px] lg:p-[40px] select-none">
        <div className="w-full lg:w-auto flex-auto lg:flex-1 flex justify-start lg:justify-center items-center self-center">
          <img
            src="assets/images/mother-baby.webp"
            className="aspect-square w-[360px] lg:w-full"
            alt="Mother and Baby"
          ></img>
        </div>

        <form
          id="login_form"
          onSubmit={submit}
          className="flex-1 flex flex-col justify-center items-start gap-y-[30px] self-stretch"
        >
          <div className="-ml-1">
            <h1 className="text-[36px] md:text-[42px] font-extrabold font-opensans -mb-2">
              Hello 👋
            </h1>
            <h1 className="text-[36px] md:text-[42px] font-extrabold font-opensans">
              Welcome Back!
            </h1>

            <span
              id="error_msg"
              className={`${showErrorMessage ? 'block' : 'hidden'} absolute text-red-500 text-sm ml-1`}
            >
              Username atau Password salah!
            </span>
          </div>

          <div className="w-full flex flex-col gap-y-[20px]">
            <input
              id="email_field"
              type="email"
              className="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] text-[#474F7C] placeholder:text-[#BDCAE6]"
              name="email"
              placeholder="Email"
              value={loginFormData.email}
              onChange={handleInputChange}
              required
            ></input>
            <input
              id="password_field"
              type="password"
              className="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] text-[#474F7C] placeholder:text-[#BDCAE6]"
              name="password"
              placeholder="Password"
              value={loginFormData.password}
              onChange={handleInputChange}
              required
            ></input>
          </div>

          <div className="w-full flex flex-col gap-y-[12px] mt-1">
            <div className="flex justify-between">
              <div className="flex gap-x-[10px] items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="remember_me"
                  checked={loginFormData.rememberMe}
                  onChange={handleInputChange}
                  className="scale-[1.2] ml-0.5 cursor-pointer text-sm md:text-base"
                ></input>
                <label
                  htmlFor="remember_me"
                  className="text-[#474F7C] text-sm md:text-base cursor-pointer"
                >
                  Ingat saya
                </label>
              </div>
              <a href="#" className="text-[#474F7C] text-sm md:text-base">
                Lupa kata sandi?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#1E3465] text-white text-base font-semibold rounded-md py-3"
            >
              Login
            </button>
            <div className="text-center mt-3">
              <span className="text-[#474F7C] text-sm md:text-base">
                Belum punya akun?
                <a href="signup.html" className="font-semibold">
                  Klik disini
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}