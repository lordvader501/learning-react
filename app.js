import React from "react";
import ReactDOM from "react-dom/client";

const h1 = (
    <h1 id="one" key="k1">
        this is jsx
    </h1>
);
const Component = () => (
    <div>
        {h1}
        <h2 id="two" key="k2">this is react</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);