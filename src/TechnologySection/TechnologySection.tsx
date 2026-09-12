import { use, useState } from "react";
import type TechnologyType from "../Type/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import AddToStackCard from "./AddToStackCard";
import { Bounce, toast } from "react-toastify";

interface TechnologiesPops {
  technologyPromise: Promise<TechnologyType[]>;
}

const TechnologySection = ({ technologyPromise }: TechnologiesPops) => {
  const technologySection = use(technologyPromise);

  const [selectedTechnology, setSelectedTechnology] = useState<
    TechnologyType[]
  >([]);

  // Event Handling Add To Stack

  const handleAddToStack = (technology: TechnologyType): void => {
    const alreadyExists = selectedTechnology.find(
      (tech) => tech.id === technology.id,
    );
    if (alreadyExists) {
      return;
    } else {
      setSelectedTechnology([...selectedTechnology, technology]);
    }
    toast.success(`${technology.name} add to Stack`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  // Event Handling Remove The Stack

  const handleRemovedToStack = (technology: TechnologyType): void => {
    const exists = selectedTechnology.find((t) => t.id === technology.id);
    if (exists) {
      const remainingTech = selectedTechnology.filter(
        (t) => t.id !== technology.id,
      );
      setSelectedTechnology(remainingTech);
    }
     toast.success(`${technology.name} remove to Stack` , {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleRemovedAll = ():void => {
    setSelectedTechnology([])
    toast.success(`Removed All Stack` , {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  }

  return (
    <div className=" border-b border-[#dcdee2] mb-3 pb-20">
    <div className="container mx-auto mt-12 py-5">
      <h1 className="font-bold text-3xl text-center md:text-start">
        Explore the <span className="text-[#CB4FB9]">Technologies</span>
      </h1>
      <p className="font-light text-center md:text-start">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-10 p-8 md:p-0">
        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* 80% */}
          {technologySection.map((technologyCard) => (
            <TechnologyCard
              technologyCard={technologyCard}
              key={technologyCard.id}
              handleAddToStack={handleAddToStack}
              selected={selectedTechnology.some((tech) => tech.id === technologyCard.id)}
            />
          ))}
        </div>
        <div className="md:col-span-3 border border-[#dcdee2] p-5 rounded-[10px]">
          {/* 20% */}
          <h1 className="font-semibold text-2xl ">Your Stack</h1>
          <p className="text-[#A3B0C2] text-[17px]">
            {selectedTechnology.length} Technology Selected
          </p>
          <div>
            {selectedTechnology.length > 0 ? (
              <div className=" border border-[#dcdee2] rounded-[10px] p-3 mt-3 ">
                {selectedTechnology.map((AddToStack) => (
                  <AddToStackCard
                    AddToStack={AddToStack}
                    key={AddToStack.id}
                    handleRemovedToStack={handleRemovedToStack}
                  />
                ))}
                <button className="border w-full px-3 py-1.5 rounded-[10px] text-[#D82C20] border-[#D82C20] mt-10 font-bold cursor-pointer" onClick={handleRemovedAll}>
                  Remove All
                </button>
              </div>
            ) : (
              <div className="border border-dashed border-[#dcdee2] rounded-[10px] p-3 mt-3">
                <p className="w-full px-3 py-3 text-[#dcdee2]">
                  Your stack is empty.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TechnologySection;
