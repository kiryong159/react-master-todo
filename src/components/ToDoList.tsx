import { useRecoilValue } from "recoil";
import { toDoStatus } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoStatus);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <ul>
        {toDos.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
