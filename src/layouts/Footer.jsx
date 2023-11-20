import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#272C49]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-between items-center py-10 lg:py-14 gap-y-10">
        <div className="w-full flex flex-col gap-y-5">
          <div className="order-1">
            <img src="icons/baby-care-logo.png" alt="Baby Care Logo" className="w-40 md:w-44 lg:w-48"></img>
          </div>
          <div className="order-2 flex flex-col -mt-3">
            <span className="text-sm lg:text-base text-white">Alamat: 123 Sprout Street, Nurtureville, Babyland, Nutritionia, 12345, NourishVille</span>
            <span className="text-sm lg:text-base text-white">Nomor Telepon: (555) 123-4567</span>
            <span className="text-sm lg:text-base text-white">Kode Pos: 67890</span>
          </div>
          <div className="order-4 lg:order-3 flex justify-start lg:justify-end items-center gap-x-6">
            <a href="#">
              <img src="icons/facebook.png" alt="Facebook" className="w-[28px] lg:w-[35px]"></img>
            </a>
            <a href="#">
              <img src="icons/instagram.png" alt="Instagram" className="w-[28px] lg:w-[35px]"></img>
            </a>
            <a href="#">
              <img src="icons/twitter.png" alt="Twitter" className="w-[28px] lg:w-[35px]"></img>
            </a>
            <a href="#">
              <img src="icons/youtube.png" alt="Youtube" className="w-[28px] lg:w-[35px]"></img>
            </a>
          </div>
          <nav className="order-3 lg:order-4">
            <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-y-3 gap-x-10">
              <li><Link to="/" className="text-white text-sm lg:text-base hover:text-[#FFCB40] duration-300 ease-in-out">Home</Link></li>
              <li><Link to="#features" className="text-white text-sm lg:text-base hover:text-[#FFCB40] duration-300 ease-in-out">Features</Link></li>
              <li><Link to="/articles" className="text-white text-sm lg:text-base hover:text-[#FFCB40] duration-300 ease-in-out">Articles</Link></li>
              <li><Link to="#reviews" className="text-white text-sm lg:text-base hover:text-[#FFCB40] duration-300 ease-in-out">Reviews</Link></li>
            </ul>
          </nav>
        </div>

        <div className="w-full pt-4 border-t border-[#D1D9E2]">
          <span className="text-[12px] lg:text-sm text-white">© Copyright 2023 • babycare.com</span>
        </div>
      </div>
    </footer>
  );
}
