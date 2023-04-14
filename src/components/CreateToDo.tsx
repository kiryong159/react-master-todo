import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoStatus } from "../atoms";

interface Iform {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoStatus);
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const onSubmit = (data: Iform) => {
    console.log(data.toDo);
    setToDos((prev) => [
      ...prev,
      { text: data.toDo, id: Date.now(), category: "TO_DO" },
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
