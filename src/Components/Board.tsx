import styled from "styled-components";

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
  position: relative;
  button {
    position: absolute;
    top: -30px;
    right: 5px;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
`;

/* const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfdfdf"
      : props.draggingFromThisWith
      ? "#a3a3a3"
      : "#e5e8ee"};
  flex-grow: 1;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
`; */

const Form = styled.form`
  width: 100%;
  padding: 5px 10px;
  input {
    width: 100%;
    border: none;
    padding: 5px 15px;
    border-radius: 10px;
  }
`;

function Board() {
  return;
}

export default Board;
