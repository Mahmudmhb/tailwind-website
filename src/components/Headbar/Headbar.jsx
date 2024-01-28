import React, { useState } from 'react';
import Link from './Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About Us', path: '/about' },
    { id: 3, name: 'Contact', path: '/contact' },
    { id: 4, name: 'Products', path: '/products' },
    // Add more routes as needed
  ];
  
  console.log(routes);
  

const Headbar = () => {
   const [open, setOpen] = useState(false)
    return (
        <nav className=' bg-purple-500'>
           <div onClick={()=> setOpen(!open)} className='md:hidden' >
            <span>
                {open === true ? 
                
                < XMarkIcon className="h-6 w-6 text-white-500" />
                 :  
                 < Bars3Icon className="h-6 w-6 text-white-500" /> }
            </span>
            
          
          
           </div>
            
           <ul className={` md:flex absolute duration-500   md:static text-center p-3 rounded bg-red-600 text-white ${ open ? 'top-6': '-top-36' }`}>
           {
                routes.map(route => <Link 
                    key={route.id}
                    route ={route}
                ></Link>)
            }
           </ul>
        </nav>
    );
};

export default Headbar;