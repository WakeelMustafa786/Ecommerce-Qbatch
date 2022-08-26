import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import  { useState, useEffect } from 'react';
export const Singleproduct = () => {
    const [produ, setProduct] = useState({});
    const { id } = useParams();
    const products = useSelector(state => { console.log('in use selector function'); return state.products; });

    useEffect(() => {
        const product = products.products.find(p => p.id == id);
    setProduct(product);})

     
    return (
        <>
            <div className="row my-4">
                <div className="col-sm-6 shadow" >
                    <img className='w-100 ' src={`${produ.image}`} style={{height:"400px"}} alt={`${produ.title}`} />
                </div>
                <div className="col-sm-6">
                    <h2>Title:</h2>
                    <p>{produ.title}</p>
                    <h2>Price:</h2>
                    <p>{produ.price}</p>
                </div>
            </div></>
    )

}
