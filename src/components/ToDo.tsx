import { useSetRecoilState } from "recoil";
import { IToDos, toDoStatus } from "../atoms";

function ToDo({ text, category }: IToDos) {
  const setToDo = useSetRecoilState(toDoStatus);
  const onClick = (newCategory: IToDos["category"]) => {
    console.log(newCategory);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button
          onClick={() => {
            onClick("DOING");
          }}
        >
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button
          onClick={() => {
            onClick("TO_DO");
          }}
        >
          ToDo
        </button>
      )}
      {category !== "DONE" && (
        <button
          onClick={() => {
            onClick("DONE");
          }}
        >
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;
