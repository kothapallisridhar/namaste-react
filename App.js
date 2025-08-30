import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

// React Element
const heading = <h1 id='heading'>🪐 Namaste React using JSX ✈️ 🏎️ 🏡</h1>

// React Component
// Class based Component - OLD
// Functional Component - NEW
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);