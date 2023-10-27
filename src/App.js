import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutClass from "./components/AboutClass";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

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

const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
