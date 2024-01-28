import React from 'react';
import Feature from './Feature/Feature';

const PriceCart = ({price}) => {
    console.log(price)
    return (
        <div className=' border border-spacing-3 p-5 m-10 bg-purple-600 rounded-xl flex flex-col '>
            <h3 className='text-3xl uppercase font-semibold '>{price.membershipType}</h3>
            <h2 className='py-5'>
                <span className='text-5xl font-extrabold text-white '>{price.price}/</span>
                <span> {price.duration}</span>
            </h2>
            <h3> 
                <span className='text-2xl '>features: </span>
                {
                    price.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                } 
                {/* <span className=' '>{}</span> */}
                </h3>
                <button className='w-full bg-blue-400 p-2 rounded-lg  text-white  mt-auto '>Buy Now</button>

        </div>
    );
};

export default PriceCart;