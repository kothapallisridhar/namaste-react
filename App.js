import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { id: "child1" }, "Saibaba Sarath Babuji!"),
//   React.createElement("h2", { id: "child2" }, "Shirdi"),
// ]);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React Component => is a JS function which returns a piece of JSX code (i.e. React Element)
// Class based Component - OLD
// Functional Component - NEW
const Title = () => {
  return <h1>Title Component</h1>;
};
const Heading = () => {
  // various ways of calling Components
  return (
    <div id="container">
      {300 + 700}
      <Title />
      {Title()}
      <Title></Title>
      <h1>React Functional Component</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestroCard />
      <RestroCard />
      <RestroCard />
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy74aAasUvsShzcGg5nTMO9Nd34w09s9wmQg&usqp=CAU" />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestroCard = () => {
  return (
    <div className="card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf" />
      <h4>Meghana Foods</h4>
      <h5>Indian, South Indian, Biryani</h5>
      <h5>4.4 stars</h5>
    </div>
  );
};
const Footer = () => {
  return <div className="footer"></div>;
};
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
