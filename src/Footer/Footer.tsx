import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto">
    <div className="  grid md:grid-cols-12 mt-10 pb-5 border-b border-[#dcdee2]">
        {/* 30% */}
      <div className="md:col-span-5 ">
        <img src={FooterLogo} className="mx-auto md:mx-0" alt="" />
        <p className="text-[#64748B] mt-1 text-center md:text-left">
          Curated tools, technologies, and resources for developers building{" "}
          <br /> modern software.
        </p>
        <div className="flex gap-4 text-[20px] mt-1 justify-center md:justify-start ">
          <span className=" w-10 h-10 hover:bg-black hover:text-white rounded-full flex items-center justify-center cursor-pointer">
            <FaGithub />
          </span>
          <span className=" w-10 h-10 hover:bg-[#1D9BF0] hover:text-white rounded-full flex items-center justify-center cursor-pointer">
            <FaTwitter />
          </span>
          <span className=" w-10 h-10 hover:bg-[#0063C2] hover:text-white rounded-full flex items-center justify-center cursor-pointer">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
       {/* 70% */}
      <div className="md:col-span-7 md:grid md:grid-cols-12">
        <div className="md:col-span-4 hidden md:block ">
          <h3 className="font-semibold mb-1.5 ">PRODUCT</h3>
          <ul className="text-[#64748B] grid gap-1.5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 hidden md:block" >
          <h3 className="font-semibold mb-1.5">COMPANY</h3>
          <ul className="text-[#64748B] grid gap-1.5">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 hidden md:block ">
          <h3 className="font-semibold mb-1.5">LEGAL</h3>
          <ul className="text-[#64748B] grid gap-1.5 ">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-between py-4">
        <p className="text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</p>
        <p className="text-[#94A3B8]">Privacy  Terms</p>
    </div>
    
    </div>
  );
};

export default Footer;
