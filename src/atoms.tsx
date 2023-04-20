import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["A", "B", "1"],
    Doing: ["C", "D", "2"],
    Done: ["E", "F", "3"],
  },
});
