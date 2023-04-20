import styled, { createGlobalStyle } from "styled-components";
import HelmetComponent from "./helmet";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./Components/Board";
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
  max-width: 680px;
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

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { draggableId, destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      //같은박스이동
      setToDos((allBoards) => {
        const copyBoard = [...allBoards[source.droppableId]];
        copyBoard.splice(source.index, 1);
        copyBoard.splice(destination?.index, 0, draggableId);
        return { ...allBoards, [source.droppableId]: copyBoard };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      //다른박스 이동
      setToDos((allBoards) => {
        const copySource = [...allBoards[source.droppableId]];
        const copyDestination = [...allBoards[destination.droppableId]];
        copySource.splice(source.index, 1);
        copyDestination.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: copySource,
          [destination.droppableId]: copyDestination,
        };
      });
    }
  };
  return (
    <>
      <HelmetComponent />
      <GlobalCss />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board
                key={boardId}
                droppableId={boardId}
                toDos={toDos[boardId]}
              />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
