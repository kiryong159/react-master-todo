import { createGlobalStyle } from "styled-components";
import HelmetComponent from "./helmet";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const GlobalCss = createGlobalStyle`
body{
  font-family: "Nunito", sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration-line: none;
color:inherit;
}
* {
  box-sizing: border-box;
}
`;

function App() {
  const onDragEnd = () => {};
  return (
    <>
      <HelmetComponent />
      <GlobalCss />
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="one">
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable draggableId="first" index={0}>
                  {(magic) => (
                    <li ref={magic.innerRef} {...magic.draggableProps}>
                      <span {...magic.dragHandleProps}>❤</span>
                      one
                    </li>
                  )}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                  {(magic) => (
                    <li
                      ref={magic.innerRef}
                      {...magic.dragHandleProps}
                      {...magic.draggableProps}
                    >
                      two
                    </li>
                  )}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
