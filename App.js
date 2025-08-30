import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

// React Element
// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "This is a React Element 🚀");
console.log("heading:", heading);
// JSX 
const jsxHeading = <h1 id='heading'>Namaste React using JSX ✈️ 🏎️ 🏡 💰 💶 💵 💷 💴 🧧 💸 🪐</h1>
console.log("jsxHeading:", jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);