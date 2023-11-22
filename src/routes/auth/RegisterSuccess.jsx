export default function RegisterSuccess() {
  return (
    <div className="
      bg-[url('assets/images/blue-background.webp')] 
      bg-no-repeat bg-center bg-cover 
      w-full h-auto lg:h-screen 
      flex justify-center items-center 
      px-4 py-20"
    >
      <div className="flex flex-col bg-white justify-center items-center w-full max-w-[1064px] h-auto rounded-[24px] md:rounded-[40px] py-[130px] md:py-[102px] lg:py-[114px] px-3 gap-y-4 select-none">
        <div className="w-full lg:w-auto flex-auto lg:flex-1 flex justify-center items-center self-center">
          <img src="assets/icons/register-success.png" className="w-[105px]" alt="Register Success" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center mb-5">
          <h1 className="text-[#272C49] text-[27px] md:text-[33px] text-center font-extrabold font-opensans mb-4">You have been Registered!</h1>
          <p className="text-[#272C49] text-sm md:text-base text-center mb-1">Jangan Lupa untuk cek inbox email mu untuk <br className="hidden md:block" />mengaktivasi akun</p>
        </div>

        <a className="w-full max-w-[460px] flex" href="login.html">
          <button className="w-full bg-[#1E3465] text-white text-base font-semibold rounded-md py-3">
            Go to Login Page
          </button>
        </a>
      </div>
    </div>
  );
}