import type TechnologyType from "../Type/TechnologyType";

interface TechnologyCardPops{
    technologyCard:TechnologyType
    handleAddToStack:(technology:TechnologyType) => void
    selected :boolean
}

const TechnologyCard = ({technologyCard ,handleAddToStack,selected}:TechnologyCardPops) => {
    console.log(TechnologyCard);
    
    return (
        <div className={`  rounded-[10px] p-5 ${selected ? `border border-[#D91B7E]`:`border border-[#dcdee2]` }`}>
            <div className="flex justify-between ">
                <img src={technologyCard.icon} className="w-8 h-8" alt={technologyCard.name} />
                <h4 className=" border border-[#CFFAFE] px-2 py-1 rounded-[20px] text-[#0891B2] bg-[#ECFEFF]">{technologyCard.badge}</h4>
            </div>
            <h2 className="font-semibold text-2xl mt-8">{technologyCard.name}</h2>
            <p className="font-light mt-4 text-[#64748B]">{technologyCard.description}</p>
            <div className="flex justify-between mt-5 text-center items-center">
                <p className="bg-[#F4F7FA] px-3 py-1.5 rounded-[10px] text-[#64748B]">{technologyCard.category}</p>
                <p className="text-[#64748B]  ">{technologyCard.difficulty}</p>
                <span className="text-[#64748B]">⭐{technologyCard.rating}</span>
            </div>
            <button className={`w-full px-3 py-1.5  mt-3 rounded-[10px] cursor-pointer ${ selected ? `text-[#D91B7E] bg-[#FCF2F7]` : `bg-black text-white`} `} onClick={()=>handleAddToStack(technologyCard)}>{ selected ? "✓ Added to Stack" : 'Add to Stack'}</button>
            
        </div>
    );
};

export default TechnologyCard;