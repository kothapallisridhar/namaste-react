const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child1" }, "Saibaba Sarath Babuji!"),
  React.createElement("h2", { id: "child2" }, "Shirdi"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
