import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled, { createGlobalStyle } from "styled-components";
import HelmetComponent from "./helmet";

const GlobalCss = createGlobalStyle`
body{
  font-family: "Nunito", sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:black
}
a {
  text-decoration-line: none;
color:inherit;
}
* {
  box-sizing: border-box;
}
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 100px;
  right: 150px;
  border: none;
  background-color: inherit;
  font-size: 40px;
  cursor: pointer;
`;

const ListForm = styled.form`
  position: absolute;
  top: 200px;
  right: 250px;
  z-index: 99;
  div {
    display: flex;
    width: 250px;
    height: 150px;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #34495e;

    span {
      font-size: 20px;
      font-weight: bold;
    }
    input {
      margin: 10px 0px;
      width: 80%;
      height: 30px;
      background-color: inherit;
      border: none;
      box-shadow: 0px 0px 1px 0px #34495e;
      border-radius: 10px;
      padding: 5px 10px;
    }
  }
`;

function App() {
  const onDragEnd = () => {};
  return (
    <>
      <HelmetComponent />
      <GlobalCss />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Droppable droppableId="1">
            {(magic) => (
              <ul ref={magic.innerRef} {...magic.droppableProps}>
                <Draggable draggableId="one" index={0}>
                  {(magic) => (
                    <li
                      ref={magic.innerRef}
                      {...magic.dragHandleProps}
                      {...magic.draggableProps}
                    >
                      hello
                    </li>
                  )}
                </Draggable>
                <Draggable draggableId="two" index={1}>
                  {(magic) => (
                    <li
                      ref={magic.innerRef}
                      {...magic.dragHandleProps}
                      {...magic.draggableProps}
                    >
                      hellod
                    </li>
                  )}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
