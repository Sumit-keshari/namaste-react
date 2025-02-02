// 1.
// let heading = document.createElement("h1");
// heading.innerHTML = "hello word";
// const root = document.getElementById("root");
// root.appendChild(heading);

// 2.
// const heading = React.createElement("h1", {id:'heading'}, "Hello world");

// // print the heading

// console.log(heading);  //object

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

// 3.
// const root = ReactDOM.createRoot(document.querySelector("#root"));
const body = ReactDOM.createRoot(document.querySelector("body"));
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm h1 heading"),
    React.createElement("h2", { id: "heading - 2" }, "I'm h2 tag"),
  ])
);

body.render(parent);
