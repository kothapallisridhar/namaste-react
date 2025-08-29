const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "I am a H1 tag"),
    React.createElement("h2", {
        id: "heading2"
    }, "I am a H2 tag")
]));
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello React World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=namaste-react.6bd02f5a.js.map
