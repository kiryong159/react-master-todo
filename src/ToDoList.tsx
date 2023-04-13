import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

/* function ToDoList() {
  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write todo"
          onChange={onChange}
          value={todo}
        />
        <input type="submit" value="add" />
      </form>
    </div>
  );
} */
const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

interface IForm {
  email: string;
  todo: string;
  password: string;
  password2: string;
}

function ToDoList() {
  const { register, handleSubmit, formState, setError } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if (data.password !== data.password2) {
      setError("password2", { message: "ㅇㅇ" }, { shouldFocus: true });
    }
  };
  console.log(formState.errors);
  return (
    <div>
      <FormBox onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", {
            required: "this is required",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nico ok " : true,
              noNick: (value) => (value.includes("nick") ? "no nick ok" : true),
            },
          })}
          type="text"
          placeholder="write todo"
        />
        <span>{formState.errors?.todo?.message as string}</span>
        <input
          {...register("email", {
            required: "plz write email",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          type="email"
          placeholder="email"
        />
        <span>{formState.errors?.email?.message as string}</span>
        <input
          {...register("password", { required: "password write pz" })}
          type="password"
          placeholder="password"
        />
        <span>{formState.errors?.password?.message as string}</span>
        <input
          {...register("password2", { required: "password write pz" })}
          type="password"
          placeholder="password2"
        />
        <span>{formState.errors?.password2?.message as string}</span>
        <input type="submit" value="add" />
      </FormBox>
    </div>
  );
}

export default ToDoList;
