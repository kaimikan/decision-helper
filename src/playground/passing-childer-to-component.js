import React from "react";
import ReactDOM from "react-dom";

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {/* #1 way props.content */}
//       {/* #2 way */}
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };
const Layout = (props) => (
  <div>
    <p>header</p>
    {/* #1 way props.content */}
    {/* #2 way */}
    {props.children}
    <p>footer</p>
  </div>
);

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);

// #1 way ReactDOM.render(<Layout content={template} />, document.getElementById("app"));
// #2 way
ReactDOM.render(
  <Layout>
    <p>This is inline</p>
  </Layout>,
  document.getElementById("app")
);
