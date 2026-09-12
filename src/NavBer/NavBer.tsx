import navLogo from "../assets/logo-text.png";

const NavBer = () => {
  return (
    <nav className="sticky top-0 z-50 py-4 border-b border-[#E5E7EB] bg-white">
      <div className="flex justify-between container mx-auto items-center">
        <img src={navLogo} className="h-9 w-34" alt="Website-Logo" />
        <ul className="flex gap-5 text-center ">
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
        <div className="flex gap-4">
          <button>Sign In</button>
          <button className="w-20 h-8 bg-[#D91B7E] rounded-[20px] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBer;
