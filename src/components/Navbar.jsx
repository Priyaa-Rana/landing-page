

import {React,useState} from 'react';
import { IoMdOutlet } from 'react-icons/io';
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { Link } from 'react-router-dom';


const Menu = [
     {
       id: 1,
       name: "Home",
       link: "/#Home",
     },
     {
       id: 2,
       name: "About Us",
       link: "/#aboutUs",
     },
     {
       id: 3,
       name: "Gallery",
       link: "/#Gallery",
     },
     {
       id: 4,
       name: "Services",
       link: "/#Services",
      },
     {
       id: 5,
       name: "Testimonials",
       link: "/#Testimonials",
     },
     {
       id: 6,
       name: "Contact Us",
       link: "/#contactUs",
     },
   ];

   const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Clearer variable name
    
  
    const toggleMenu = () => {
      
      console.log(isOpen);
      setIsOpen(!isOpen);
    };
   
    
    return (
      <div className='bg-white'> 
        <div className='py-3 '>
          <div className='container relative  z-10'>
            <div className='flex gap-2 items-center '>
              <a href="#">
                <img src="img/GroobeLogo.svg" alt="logo" className='ml-[20px] mt-[12px]' />
              </a>
  
              <div className='lg:block md:block'>
                <ul className={`md:flex md:items-center sm:text-xs md:pb-0 pb-10 absolute md:static md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-9 pt-4 transition-all duration-900  ease-in ${isOpen ? '' : 'hidden'}`}>
                  {Menu.map((data, i) => (
                    <li key={i} className='md:ml-0 text-sm md:text-lg md:my-0 my-6 px-1 py-0 '>
                      <a
                        href={data.link} 
                        className="inline px-2 text-gray-500 text-decoration-none hover:text-black transition duration-200  cursor-pointer"
                      >
                        {data.name}
                      </a>
                    
                      
                    </li>
                  
                  ))}
                  
                    
                </ul>
                
                
               
              
                </div>
             
                
                
              <div className='relative xs:hidden sm:right-[-400px] sm:top-[14px] md:right-[-1px] lg:right-[-300px] xl:right-[-650px]' >
             
              <button className=' p-1 bg-gray-200 rounded-md   '>Call Now</button>
              </div>
              
              <button onClick={toggleMenu} className="text-3xl absolute right-0 top-6 cursor-pointer md:hidden xs:top-8 sm:top-6 sm:cursor-pointer xs:cursor-pointer ">
                {isOpen ? <RxCross2  />: <IoMenuOutline/>}
              </button>

            </div>
            
          </div>
          
        </div>
        
    </div>

      
    );
  };

export default Navbar;
