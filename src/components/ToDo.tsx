import { useSetRecoilState } from "recoil";
import { IToDos, toDoStatus } from "../atoms";

function ToDo({ text, category, id }: IToDos) {
  const setToDos = useSetRecoilState(toDoStatus);
  const onClick = (newCategory: IToDos["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newTodo = { text, id, category: newCategory };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
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
