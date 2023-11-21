import NavbarButton from "../components/landing/button/NavbarButton";
import { Link } from 'react-router-dom';

export default function Navbar(){
  return(
    <>
    {/* Open Tag Header */}
    <header className="absolute w-full bg-[#272C49]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center py-3.5">
        <div className="shrink-0">
          <img src="assets/icons/baby-care-logo.png" alt="Baby Care Logo" className="w-40 md:w-44 lg:w-48"></img>
        </div>

        {/* Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-x-10">
            <li><Link to="/" className="text-white hover:text-[#FFCB40] duration-300 ease-in-out">Home</Link></li>
            <li><Link to="#features" className="text-white hover:text-[#FFCB40] duration-300 ease-in-out">Features</Link></li>
            <li><Link to="/articles" className="text-white hover:text-[#FFCB40] duration-300 ease-in-out">Articles</Link></li>
            <li><Link to="#reviews" className="text-white hover:text-[#FFCB40] duration-300 ease-in-out">Reviews</Link></li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <NavbarButton />
        </div>

        {/* Mobile */}
        <div className="block lg:hidden" id="open_modal_btn">
          <svg
            className="fill-white text-[26px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>

        {/* Mobile Modal */}
        <div className="mobile_modal translate-y-[100%] fixed top-0 left-0 w-full h-screen bg-[#272C49] px-4 flex justify-center items-center duration-500 ease-in-out z-[999]">
          <div className="w-full">
            <nav>
              <ul className="flex flex-col justify-center items-center gap-y-6">
                <li><Link to="/" className="text-xl text-white hover:text-[#FFCB40] duration-300 ease-in-out">Home</Link></li>
                <li><Link to="#features" className="text-xl text-white hover:text-[#FFCB40] duration-300 ease-in-out">Features</Link></li>
                <li><Link to="/articles" className="text-xl text-white hover:text-[#FFCB40] duration-300 ease-in-out">Articles</Link></li>
                <li><Link to="#reviews" className="text-xl text-white hover:text-[#FFCB40] duration-300 ease-in-out">Reviews</Link></li>
                <span className="w-[120px] border-t-2 border-[#FFCB40]"></span>
                <li><Link to="/signup" className="text-xl text-white hover:text-[#FFCB40] duration-300 ease-in-out">Get Started</Link></li>
                <li><Link to="/dashboard/index" className="text-xl text-white hover:text-[#FFCB40] duration-300 ease-in-out">Dashboard</Link></li>
              </ul>
            </nav>
          </div>
          <div className="absolute top-6 right-6" id="close_modal_btn">
            <svg
              className="fill-white text-[26px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
    {/* Close Tag Header */}
    </>
  )
}