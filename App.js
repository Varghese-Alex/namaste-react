import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => when render object onto the DOM, then it becomes a HTML element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste JavaScript!"
);

// JSX
const jsxHeading = <h1 id="heading">Namaste React using JSX!</h1>;

const jsxSample = (
  <div>
    <h1 className="test">Test</h1>
  </div>
);

// * React Components

// * What is a Functional Component?
// const HeadingComponent = () => {
//     return (<h1>Namaste React Component</h1>)
// }

const myName = <h1>Varghese Alex</h1>;

const TempHeading = () => (
  <div>
    <h1>My name is Tommy Shelby!</h1>
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component!</h1>
    <SubComponent />
    {myName}
    <TempHeading />
    <TempHeading></TempHeading>
    {TempHeading()}
  </div>
);

const SubComponent = () => <h2 className="subHeading">Taught by Akshay</h2>;

console.log(heading);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent />);
