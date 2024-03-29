const heading = React.createElement("h1", { id: "heading", className: "heading"}, "Hello React!");

const parent = React.createElement(
    "div", 
    { id: "parent"},[
        React.createElement("div", { id: "child1" }, 
        [
            React.createElement('h2', {}, "line 1"),
            React.createElement('h2', {}, "line 2")
        ]),
        React.createElement("div", { id: "child2" }, 
        [
            React.createElement('h2', {}, "line 3"),
            React.createElement('h2', {}, "line 4")
        ])
    ]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

root.render(parent);

console.log(heading);