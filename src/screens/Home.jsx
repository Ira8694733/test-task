import React from 'react';

import RightAside from "../components/RightAside/RightAside";
import LeftAside from "../components/LeftAside/LeftAside";

const Home = () => {

    return  (
        <>
            <div className="d-flex">
                 <LeftAside/>
                 <RightAside/>
            </div>
        </>
    );
};

export default Home;