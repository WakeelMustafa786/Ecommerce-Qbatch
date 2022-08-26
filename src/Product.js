import React from 'react'
import {  useEffect } from 'react';
import { add } from './store/cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/productSlice';
import { useNavigate } from 'react-router-dom';

export const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    console.log(products);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchProducts());
        console.log('in ', products);
      }, [dispatch])
    
    //     const fetchproduct = async () => {
    //         const res = await fetch('http://localhost:5000/hello');
    //         const data = await res.json();
    //         console.log(data);
    //         setProducts(data);

    //     }

    //     fetchproduct();

    // }, [])
    function handleAdd(e) {
        console.log('before dispatching product:', e);
        dispatch(add(e));
        alert("Added SuccesFully");

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-3">
                    {
                        products.products.map((e) => {
                            return (

                                <div className="col-3 mt-5" key={e.id}>

                                    <div className="card" >
                                        <img src={e.image} style={{ height: 377 }} onClick={() => { navigate(`/products/${e.id}`) }} />

                                        <h5 className="card-title">{e.title}</h5>
                                        <h5 className="card-title">{"Price:" + e.price}</h5>
                                        <button type="button" className="btn btn-primary" onClick={() => handleAdd(e)}>Add to Cart</button>
                                    </div>
                                </div>



                            );
                        })
                    }
                </div>
            </div>
        </>


    );
}
