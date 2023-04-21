import { atom } from "recoil";

export interface IToDOs {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDOs[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
