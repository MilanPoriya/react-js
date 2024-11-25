// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!"); // three argument : 3rd argumet is children

//     // console.log(heading);

//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(heading);

// {} - here in this empty object we can add attribute like an ID etc.   {id:"heading"}

// Q. what is createElement (("h1", {}, "Hello world from React!")) ?
// -> It is an JavaScript Object at end of the day. (do console the heading and see.like console.log(heading);)

// Core React - how can write the HTML using react
// --------------------------------------------------

/*
*   <div id="parent">
*       <div id="child">
*           <h1>I am H1 tag</h1>
*           <h2>I am H2 tag</h2>
*       <div>
*       <div id="child2">
*           <h1>I am H1 tag</h1>
*           <h2>I am H2 tag</h2>
*       <div>
*   </div>
*
*   ReactElement(Object) --> HTML(Browser Understands)
*/

// above structure using core react

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H1 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H1 tag"),
    ]),
  ]);
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);
  