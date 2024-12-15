const heading = React.createElement("h1",{},"Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const heading2 = React.createElement("h2",{},"Hello World1");
const root2 = ReactDOM.createRoot(document.getElementById("root1"));
root2.render(heading2);

//Nested Elements
const parent = React.createElement("div",{id:"parent"},React.createElement(
    "div",{id:"child"},React.createElement(
        "h1",{},"THis is Nested Element"
    )
));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent);


//Siblings- means under the same level
//Have to be an Array
const sibling = React.createElement("div",{id:parent},[
    React.createElement("h1",{},"I'm the first Sibling"),
    React.createElement("h2",{},"I'm the Second Sibling")
]);
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(sibling);