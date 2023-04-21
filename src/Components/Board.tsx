import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDOs, toDoState } from "../atoms";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  padding: 10px 0px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfdfdf"
      : props.draggingFromThisWith
      ? "#a3a3a3"
      : "#e5e8ee"};
  flex-grow: 1;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps {
  toDos: IToDOs[];
  droppableId: string;
}

interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

interface IForm {
  toDo: string;
}

function Board({ toDos, droppableId }: IBoardProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDoState = useSetRecoilState(toDoState);
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDoState((allBoards) => {
      return {
        ...allBoards,
        [droppableId]: [...allBoards[droppableId], newToDo],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{droppableId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder="Add ToDo"
        />
      </Form>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((todo, index) => (
              <DraggableCard
                key={todo.id}
                index={index}
                toDoId={todo.id}
                toDoText={todo.text}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
