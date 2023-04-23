import { atom } from "recoil";

interface ItoDoState {
  [key: string]: string[];
}

export const toDosState = atom<ItoDoState>({
  key: "toDos",
  default: { "To Do": ["A", "B"], DOING: ["C", "D"], DONE: ["E", "F"] },
});
