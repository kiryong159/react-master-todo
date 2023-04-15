import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoStatus } from "../atoms";

interface Iform {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoStatus);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const onSubmit = (data: Iform) => {
    setToDos((prev) => [
      ...prev,
      { text: data.toDo, id: Date.now(), category },
    ]);
    setValue("toDo", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "plz write toDO" })}
          type="text"
          placeholder="write todo"
        />
        <input type="submit" value="add" />
      </form>
    </>
  );
}
export default CreateToDo;
