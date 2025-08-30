import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

// React Element
// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "This is a React Element 🚀");
console.log("heading:", heading);

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before is reaches JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = <h1 id='heading'>🪐 Namaste React using JSX ✈️ 🏎️ 🏡</h1>
console.log("jsxHeading:", jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);