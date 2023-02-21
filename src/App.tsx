import React, {useState} from 'react';
import './App.css';
import {colorListData} from "./data/ColorListData";
import ColorList from "./components/ColorList";

function App() {
  const [colors, setColors] = useState(colorListData);
  return <ColorList colors={colors} onRemoveColor={(id) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  }} />
}

export default App;
