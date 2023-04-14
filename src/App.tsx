import { createGlobalStyle } from "styled-components";
import HelmetComponent from "./helmet";
import ToDoList from "./components/ToDoList";

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
  return (
    <>
      <HelmetComponent />
      <GlobalCss />
      <ToDoList />
    </>
  );
}

export default App;
