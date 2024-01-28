import React from 'react';


const Link = ({route}) => {
    return (
        <li className='md:mr-10  hover:bg-blue-400 duration-1000'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;