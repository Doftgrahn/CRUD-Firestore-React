import React from "react";

const InputSearch = ({searchValue, searchOnChange}) => {
    return (
        <main>
            <input
                type="text"
                value={searchValue}
                placeholder="Search..."
                onChange={event => searchOnChange(event.target.value)}
            />
        </main>
    );
};

export default InputSearch;
