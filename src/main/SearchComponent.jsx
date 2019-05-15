import React, {useState} from "react";

import InputSearch from "../componentSearch/InputSearch";

//import db from "../shared/firestore";

const SearchComponent = () => {
    const [searchValue, setSearchValue] = useState("");

    //const myCollection = db.collection("cafe");



    return (
        <div className="App">
            <section>
                <h2>Search your Rated Cafés</h2>

                <InputSearch
                    searchValue={searchValue}
                    searchOnChange={value => setSearchValue(value)}
                />
            </section>
        </div>
    );
};

export default SearchComponent;
