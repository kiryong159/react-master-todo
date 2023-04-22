import { atom } from "recoil";

export const toDosState = atom({
  key: "toDos",
  default: ["A", "B", "C", "D", "E", "F"],
});
