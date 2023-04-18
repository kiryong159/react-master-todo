import { atom, selector } from "recoil";

export const minutes = atom({
  key: "minutes",
  default: 0,
});

export const hoursAtom = selector({
  key: "hours",
  get: ({ get }) => {
    const getminutes = get(minutes);
    return getminutes / 60;
  },
  set: ({ set }, newValue) => {
    const editMinutes = Number(newValue) * 60;
    set(minutes, editMinutes);
  },
});
