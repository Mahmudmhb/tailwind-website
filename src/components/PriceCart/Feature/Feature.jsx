import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex py-2 my-2'>
            <span className='mr-2'>   < ArrowRightCircleIcon className="h-6 w-6 text-white" /> </span>
            <span>{feature}</span>
        </div>
    );
};

export default Feature;