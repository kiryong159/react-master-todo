import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "local_save_data",
  storage: localStorage,
});

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDos {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoStatus = atom<IToDos[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelectorr = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoStatus);
    const categoryy = get(categoryState);
    return toDos.filter((item) => item.category === categoryy);
  },
});
