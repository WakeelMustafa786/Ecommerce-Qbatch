import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { FaShoppingBag } from "react-icons/fa";
import { remove } from './store/cartslice';

export const Cart = () => {
    let sum = 0;
    const item = useDispatch();
    function handleRemove({ title }) {
        item(remove(title));

    }
    const product = useSelector((state) => state.cart);
    const getTotalPrice = () => {
        for (let i = 0; i < product.length; ++i) {
            sum = sum + product[i].price;
        }
        return sum;
    }
    return (

        <>

            {/* for(let i=0;i<product.length;++i){

        } */}
            <h1>Cart</h1>
            <div>
                <div className="row">
                    {
                        product.map((e) =>
                            <div className="col-3" key={e.id}>

                                <div className="card" >
                                    <img src={e.image} style={{ height: 377 }} />
                                    <h5 className="card-title">{e.title}</h5>
                                    <h5 className="card-title">{"Price:" + e.price}</h5>
                                    <button type="button" className="btn btn-primary" onClick={() => handleRemove(e)}>Remove From Cart</button>
                                </div>
                            </div>

                        )

                    }

                </div>
            </div>
            {product.length == 0 ?
                <h1><FaShoppingBag />Cart is Empty</h1> :
                <h1>Total Bill: $ {getTotalPrice()}</h1>
            }

        </>
    )
}
