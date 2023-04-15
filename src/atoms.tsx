import { atom, selector } from "recoil";

export interface IToDos {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoStatus = atom<IToDos[]>({
  key: "toDo",
  default: [],
});

export const toDoSelectorr = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoStatus);
    const categoryy = get(categoryState);
    return toDos.filter((item) => item.category === categoryy);
  },
});
