import React from 'react';


const CartFooter = ({total}) => {
    const {count, price} = total;
    return (
        <footer className="cart-footer">
            <div className="cart-footer__count"> TOTAL: {count}</div>
            <div className="cart-footer__price"> TOTAL PRICE: {price} $</div>
        </footer>
    )
}


export default CartFooter