import { myStacks } from "../utils/myStacks";

export function Stacks() {
  return (
    <>
      <h3>Mes stacks</h3>
      <ul className="mySkills">
        {myStacks.map((stack) => {
          return (
            <li key={stack.name}>
              <img src={stack.img} />
              <p>{stack.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
