import React, { useState } from "react";
import Book_manu from "./component/basics/BookStore";

const App = () => {
  const [myStyle, setMyStyle] = useState({
    color: "#132630",
    backgroundColor: "#b8c0ca",
  });

  const toggleStyle = () => {
    if (myStyle.backgroundColor === "#b8c0ca") {
      setMyStyle({
        color: "blue",
        backgroundColor: "#26263c",
      });
    } else {
      setMyStyle({
        color: "#132630",
        backgroundColor: "#b8c0ca",
      });
    }
  };

  return (
    <div style={myStyle}>
      <label class="switch">
        <input type="checkbox" onClick={toggleStyle} />
        <span class="slider round"></span>
      </label>
      <Book_manu />
    </div>
  );
};

export default App;
