import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useGetAllProductsQuery} from "../../store/api/products";

import Card from "../Card/Card";
import Preloader from "../Preloader/index";
import "../RightAside/RightAside.css"

const RightAside = () => {
    const {products} = useSelector(state => state.products);
    const {error, loading} = useGetAllProductsQuery();

    useEffect(() => {
        console.log({error, loading})
    }, [error, loading])


    const [isloading, setIsloading] = useState(false);
    useEffect(() => {
        setIsloading(true);
        setTimeout(() => {
            setIsloading(false);
        }, 2000);
    }, []);

    return  (
        <div className="right-aside">
            {isloading && <Preloader/>}
            {!products.length && <p> No products </p>}
            {!!products.length &&
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            products?.map(item => {
                                return(
                                    <Card id={item?.id}
                                          key={item?.id}
                                          thumbnail={item?.thumbnail}
                                          price={item?.price}
                                          title={item?.title}
                                          product={item}/>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default RightAside;