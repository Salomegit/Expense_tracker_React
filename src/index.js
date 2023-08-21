import ReactDOM from "react-dom/client";
import React from 'react';
//in all files that use jsx code so that all jsx code is transformed into methods called on the react object

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
