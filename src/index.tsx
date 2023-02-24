import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {colorListData} from "./data/ColorListData";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ColorProvider from "./data/ColorProvider";

export const ColorContext = createContext(colorListData);
export const useColors = () => useContext(ColorContext);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ColorProvider>
          <App />
      </ColorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
