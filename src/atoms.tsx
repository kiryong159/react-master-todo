import { atom } from "recoil";

interface ItoDoState {
  [key: string]: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
}

export const toDosState = atom<ItoDoState>({
  key: "toDos",
  default: {
    "To Do": [],
    DOING: [],
    DONE: [],
  },
});
