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

function DraggableCard() {
  return;
}
export default DraggableCard;
