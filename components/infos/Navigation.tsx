import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Components
import { infoComponentList } from "./Infos";
import { useAppContext } from "@/app/context/AppProvider";

export function Navigation() {
  const { changeInfo, handleNextInfo } = useAppContext();

  const dots: JSX.Element[] = [];
  for (let i = 0; i < infoComponentList.length; i++) {
    dots.push(
      <button
        key={i}
        className={`${i === changeInfo ? "w-3 h-3 bg-[blue]" : "w-2 h-2 bg-[#add8e6]"}
        border-none rounded-full duration-300 hover:w-3 hover:h-3 hover:bg-[blue]`}
        onClick={() => handleNextInfo({ isNext: i > changeInfo, isArrow: false, index: i })}
      ></button>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 w-full">
      <button
        className="border-none hover:scale-110 transition-0.25s"
        onClick={() => handleNextInfo({ isNext: false })}
      >
        <FaArrowCircleLeft size="30px" color="blue" />
      </button>

      <div className="flex items-center justify-center gap-2 m-2">{dots.map((item) => item)}</div>

      <button
        className="border-none hover:scale-110 transition-0.25s"
        onClick={() => handleNextInfo({ isNext: true })}
      >
        <FaArrowCircleRight size="30px" color="blue" />
      </button>
    </div>
  );
}
