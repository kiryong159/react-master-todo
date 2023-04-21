import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface IToDOs {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: IToDOs[];
}

const { persistAtom } = recoilPersist({
  key: `recoil-persist`,
  storage: localStorage,
});

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const addListState = atom({
  key: "addList",
  default: false,
});

/* 
1. 추가 버튼 생성
2. form 작성 -> handlesubmit 
3.todostate에 추가 

1. 삭제 버튼생성
2. 버튼의 key를 알아냄 object.keys
3. foreach 돌려서 key랑 같은 문구면 삭제

*/
