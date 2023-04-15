import { useSetRecoilState } from "recoil";
import { Categories, IToDos, toDoStatus } from "../atoms";

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
  const onDelete = () => {
    setToDos((prev) => {
      const deleteIndex = prev.findIndex((todo) => todo.id === id);
      return [...prev.slice(0, deleteIndex), ...prev.slice(deleteIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button
          onClick={() => {
            onClick(Categories.DOING);
          }}
        >
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button
          onClick={() => {
            onClick(Categories.TO_DO);
          }}
        >
          ToDo
        </button>
      )}
      {category !== Categories.DONE && (
        <button
          onClick={() => {
            onClick(Categories.DONE);
          }}
        >
          Done
        </button>
      )}
      <button onClick={() => onDelete()}>Delete</button>
    </li>
  );
}
export default ToDo;
