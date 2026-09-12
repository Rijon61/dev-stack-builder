import { CiSquareRemove } from "react-icons/ci";
import type TechnologyType from "../Type/TechnologyType";

interface AddToStackCardProps {
  AddToStack: TechnologyType;
  handleRemovedToStack:(technology:TechnologyType) => void;
  
}

const AddToStackCard = ({ AddToStack ,handleRemovedToStack }: AddToStackCardProps) => {
  return (
    <div className="flex justify-between items-center border border-[#dcdee2] rounded-[10px] my-3 p-4">
      <div className="flex gap-5  ">
        <img
          src={AddToStack.icon}
          className="w-10 h-10 "
          alt={AddToStack.name}
        />
        <div className=" ">
          <h2 className="text-[18px] font-semibold">{AddToStack.name}</h2>
          <p className="text-[#A3B0C2] text-left  text-nowrap">{AddToStack.category}</p>
        </div>
      </div>

      {/* Remove icon */}
      <div>
          <button className="text-3xl hover:text-[#D82C20]" onClick={()=>handleRemovedToStack(AddToStack)}><CiSquareRemove /></button>
      </div>
    </div>
  );
};

export default AddToStackCard;
