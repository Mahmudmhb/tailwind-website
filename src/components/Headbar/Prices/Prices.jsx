import React, { useEffect, useState } from 'react';
import PriceCart from '../../PriceCart/PriceCart';

const Prices = () => {
    const [prices, setPrice] = useState([])
    useEffect(()=>{
        
    fetch('priceList.json')
    .then(res=> res.json())
    .then(data  => setPrice(data))
    }
    ,[])
    // console.log(prices)
    return (
        <div >
            <h2 className='text-7xl text-center text-white bg-purple-500 py-6 uppercase ' >Price List Of my GYM</h2>
            <div className='grid md:grid-cols-3 gap-3'>

            {
                prices.map(price => <PriceCart key={price.id} price={price}></PriceCart>)
            }
            </div>
        </div>
    );
};

export default Prices;