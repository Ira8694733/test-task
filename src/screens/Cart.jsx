import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from "../components/CardCart/CardCart";
import Form from "../components/Form/Form";

import "../components/RightAside/RightAside.css"
import CartFooter from "../components/CardFooter/CardFooter";

const Cart = () => {

    const cartItems = useSelector((state)=> state.basket.basketItems);

    const [inputValue, setInputValue] = useState(cartItems);

    const handelSubmitButton = (e) => {
        setInputValue(!inputValue)};

    const [total, setTotal] = useState({
        price: cartItems.reduce((prev, curr)=>{return prev + curr.price}, 0),
        count: cartItems.reduce((prev, curr)=>{return prev + curr.quantity}, 0),
    })

    useEffect(() => {
    setTotal({
        price: cartItems.reduce((prev, curr)=>{return prev + curr.price}, 0),
        count: cartItems.reduce((prev, curr)=>{return prev + curr.quantity}, 0),
    });
    }, [cartItems])

    return (
        <>
            <div className="d-flex">
            <Form/>
            <section className="section-js hidden py-5 right-aside" >
                <div className="container px-4 px-lg-5 mt-5" style={{minHeight:"41vh"}}>
                    {!cartItems.length &&
                    <div style={{fontSize: "22px", display: "flex", gap: "20px", justifyContent: "center"}}>
                        <span>YOUR CART IS EMPTY</span>
                    <Link className="not-found_link" to="/">
                        <button
                             type="button"
                             className="btn btn-outline-dark mt-auto add-basket">
                             ALL PRODUCTS
                        </button>
                    </Link>
                </div>}
                    {cartItems?.map((product, index) => {
                        return (
                            <Card
                                key={`shopping-cart${index}`}
                                thumbnail={product?.thumbnail}
                                title={product?.title}
                                price={product?.price}
                                discountPercentage={product?.discountPercentage}
                                quantity={product?.quantity}
                                id={product?.id}
                                product={product}
                            />
                        );
                    })}
                    <div>
                    </div>
                </div>
                <div className="d-flex justify-content-center gap-5">
                    <CartFooter total={total}/>
                    <button type="submit" className="btn btn-primary"
                            onClick={handelSubmitButton}>Submit</button>
                </div>
            </section>
            </div>
        </>
    );
}

export default Cart;