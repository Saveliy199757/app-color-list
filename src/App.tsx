import React from 'react';
import './App.css';
import StarRating from "./components/StarRating";

function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={() => alert("double click")}
    />
  );
}

export default App;
