import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: ${(props) =>
    props.isDragging ? "#3498db" : props.theme.cardColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: inherit;
    border: none;
  }
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  droppableId: string;
}

interface IDeleteBtn {
  droppableId: string;
  index: number;
}

function DraggableCard({
  toDoId,
  toDoText,
  index,
  droppableId,
}: IDraggableCardProps) {
  const setToDoState = useSetRecoilState(toDoState);

  const deleteBtn = ({ droppableId, index }: IDeleteBtn) => {
    setToDoState((allBoards) => {
      const deleteBoards = [...allBoards[droppableId]];
      deleteBoards.splice(index, 1);
      return { ...allBoards, [droppableId]: deleteBoards };
    });
  };
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={Boolean(snapshot.isDragging)}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <span>{toDoText}</span>
          <button onClick={() => deleteBtn({ droppableId, index })}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
