import React from "react";
import { useRecoilState } from "recoil";
import { createGlobalStyle } from "styled-components";
import { hoursAtom, minutes } from "./atoms";
import HelmetComponent from "./helmet";

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
  const [value, setValue] = useRecoilState(minutes);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.currentTarget.value);
  };
  const [hours, setHours] = useRecoilState(hoursAtom);
  const hourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <>
      <HelmetComponent />
      <GlobalCss />
      <input
        value={value}
        type="number"
        onChange={onChange}
        placeholder="minutes"
      ></input>
      <input
        value={hours}
        onChange={hourChange}
        type="number"
        placeholder="hours"
      ></input>
    </>
  );
}

export default App;
