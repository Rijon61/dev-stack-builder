import HeroImg from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div  className="grid grid-cols-1 md:grid-cols-12 container mx-auto mt-10 md:mt-15 ">
        {/* Hero-Right-side */}
        <div className="md:col-span-8 text-center md:text-left">
          <h2 className="font-bold text-4xl md:text-6xl mt-11">
            Build Your Ideal <br /> <span className="bg-linear-to-r from-[#FE5525] to-[#8139E8] bg-clip-text text-transparent">Development Stack</span>
          </h2>
          <p className="mt-4 font-light">
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your{" "}
            <br />
            next project.
          </p>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <button className="h-10 w-42 rounded-[10px] bg-linear-to-r from-[#FE5525] to-[#EC4998] text-white mt-6 cursor-pointer">Explore Technologies</button>
            <button className="h-10 w-42 rounded-[10px] border border-[#E5E7EB] mt-6 cursor-pointer">Learn More</button>
          </div>
        </div>
        {/* Hero-Lift-Side */}
        <div className=" md:col-span-4 md:-ml-8 flex justify-center md:justify-start">
          {/* Hero-Img */}
          <img src={HeroImg} className="w-100 h-100" alt="" />
        </div>
    </div>
  );
};

export default HeroSection;
