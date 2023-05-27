import React from 'react';

import "../LeftAside/LeftAside.css"
import {Link} from "react-router-dom";

const AsideMenu = () => {

    return (
        <div className= "left__aside">
            <h3>Shops:</h3>
            <Link  to={'/'} className="nav-item nav-link active ">
                <button type="button" className="btn btn-outline-dark mt-auto left__aside-button">All products</button>
            </Link>
            <Link  to={'/Laptops'} className="nav-item nav-link active">
                <button type="button" className="btn btn-outline-dark mt-auto left__aside-button">Laptops</button>
            </Link>
            <Link  to={'/Smartphones'} className="nav-item nav-link active">
                <button type="button" className="btn btn-outline-dark mt-auto left__aside-button">Smartphones</button>
            </Link>
            <Link  to={"*"} className="nav-item nav-link active">
                <button type="button" className="btn btn-outline-dark mt-auto left__aside-button">etc.</button>
            </Link>
            <Link  to={"*"} className="nav-item nav-link active ">
                <button type="button" className="btn btn-outline-dark mt-auto left__aside-button">etc.</button>
            </Link>
        </div>
    );
};

export default AsideMenu;
