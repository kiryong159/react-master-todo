import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import { toDosState } from "./atoms";
import Board from "./Components/Board";
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
  const [toDos, setToDos] = useRecoilState(toDosState);
  const onDragEnd = (data: DropResult) => {
    const { source, destination, draggableId } = data;
    /* 
    source => 출발지  index / droppableId->board항목 
    destination => 도착지
    draggableId -> 내용
    */
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      //같은 보드 이동
      setToDos((allBoards) => {
        const copyBoards = [...allBoards[source.droppableId]];
        const taskObj = copyBoards[source.index];
        copyBoards.splice(source.index, 1);
        copyBoards.splice(destination.index, 0, taskObj);
        return { ...allBoards, [source.droppableId]: copyBoards };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      //다른 보드로 이동
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        const destBoard = [...allBoards[destination.droppableId]];
        destBoard.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destBoard,
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
            {Object.keys(toDos).map((boardName) => (
              <Board
                key={boardName}
                toDos={toDos[boardName]}
                boardName={boardName}
              />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
