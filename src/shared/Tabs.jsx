import React, {useState} from "react";

import "../styles/tabs.scss";

const Tabs = ({children}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    let header = children.map((x, index) => (
        <button
            className="tabs"
            key={`key:${index}`}
            disabled={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
        >
            {" "}
            Tab number:
            {index}
        </button>
    ));

    let content = children[selectedIndex];

    return (
        <>
            <header>{header}</header>
            {content}
        </>
    );
};

export default Tabs;
