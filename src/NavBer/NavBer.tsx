import { GiHamburgerMenu } from "react-icons/gi";
import navLogo from "../assets/logo-text.png";

const NavBer = () => {
  return (
    <nav className="sticky top-0 z-50 py-4 border-b border-[#E5E7EB] bg-white">
      <div className="flex justify-between container mx-auto items-center ">
        {/* Nav-img/logo or HamburgerBtn */}
        <span className="md:hidden text-2xl"><GiHamburgerMenu /></span>
        <img src={navLogo} className="h-9 w-34 " alt="Website-Logo" />
        {/* Link */}
        <ul className=" hidden md:flex gap-5 text-center ">
          <li className="text-[#D91B7E]">
            <a href="">Home</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="">Technologies</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="">Projects</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="">About</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="">Contact</a>
          </li>
        </ul>
        {/* Nav-Button */}
        <div className="flex gap-2 md:gap-4">
          <button className="cursor-pointer" >Sign In</button>
          <button className="px-3 py-1 bg-[#D91B7E]  rounded-[20px] text-white cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBer;
