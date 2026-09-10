import HeroImg from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div  className="grid grid-cols-12 container mx-auto mt-10 ">
        {/* Hero-Right-side */}
        <div className="col-span-8">
          <h2 className="font-bold text-6xl mt-11">
            Build Your Ideal <br /> <span className="bg-linear-to-r from-[#FE5525] to-[#8139E8] bg-clip-text text-transparent">Development Stack</span>
          </h2>
          <p className="mt-4 font-light">
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your{" "}
            <br />
            next project.
          </p>
          <div className="flex gap-3 items-center">
            <button className="h-10 w-42 rounded-[10px] bg-linear-to-r from-[#FE5525] to-[#EC4998] text-white mt-6">Explore Technologies</button>
            <button className="h-10 w-42 rounded-[10px] border border-[#E5E7EB] mt-6">Learn More</button>
          </div>
        </div>
        {/* Hero-Lift-Side */}
        <div className="col-span-4 -ml-8">
          {/* Hero-Img */}
          <img src={HeroImg} className="w-100 h-100" alt="" />
        </div>
    </div>
  );
};

export default HeroSection;
