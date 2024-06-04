import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const Hello = () => {
//     return (
//         <>
//             Hello World!
//         </>
//     )
// }

// ReactDOM.render(<Hello />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <App />
   </React.StrictMode>
)