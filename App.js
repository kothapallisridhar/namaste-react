import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

const elem = <span>React Element</span>

const Title = () => {
    return <h1 className='head' tabIndex='5'>
        {elem}
        React using JSX 🥇
        </h1>
}

const number = 10000;

// Component Composition
const HeadingComponent = () => (
    <div id='container'>
     <h2>{number}</h2>     
     {Title()}
     <Title />
     <Title></Title>
     <h1 className='heading'>React Functional Component 🚀</h1>    
    </div> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(HeadingComponent());
root.render(<HeadingComponent />);