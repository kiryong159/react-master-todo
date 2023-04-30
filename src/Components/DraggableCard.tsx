import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

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

interface IDraggableCard {
  toDoText: string;
  toDoId: number;
  index: number;
}

function DraggableCard({ toDoText, index, toDoId }: IDraggableCard) {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
