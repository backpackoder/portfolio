// Utils
import { parts } from "../utils/parts";

type HeaderProps = {
  setPartList: React.Dispatch<React.SetStateAction<boolean>>[];
  changePart: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
};

export function Header({ setPartList, changePart }: HeaderProps) {
  return (
    <header>
      <ul className="parts">
        {parts.map((part, index) => {
          return (
            <li key={index} onClick={() => changePart(setPartList[index])}>
              {part.name}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
