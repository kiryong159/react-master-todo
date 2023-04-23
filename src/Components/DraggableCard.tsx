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
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCard) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={Boolean(snapshot.isDragging)}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
