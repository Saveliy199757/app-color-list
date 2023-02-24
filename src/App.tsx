import React, {useState} from 'react';
import './App.css';
import {colorListData} from "./data/ColorListData";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorListData);
  return (
      <>
        <AddColorForm onNewColor={(title, color) => {
        const newColor = [
            ...colors,
          {
            id: v4(),
            rating: 0,
            title,
            color
          }
        ]
            setColors(newColor)
        }
        } />
      <ColorList colors={colors} onRemoveColor={(id) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  }} />
      </>
  )
}

export default App;
