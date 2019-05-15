import React from "react";

import Tabs from "./shared/Tabs";

//import SearchComponent from "./main/SearchComponent";
import LandingPage from "./main/LandingPage";
import CookieStore from "./main/CookiesStore";
import AboutMe from "./main/About_me";

const MyCookieStore = () => {
    return (
        <Tabs>
            <CookieStore />
            <LandingPage />
            <AboutMe />
        </Tabs>
    );
};

export default MyCookieStore;

//<SearchComponent />
