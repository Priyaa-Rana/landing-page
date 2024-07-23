import { useState,useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Home() {
  let [current, setCurrent] = useState(0);
  


  let slides = [
    "/img/img1.webp",
    "/img/img2.webp",
    "/img/img3.webp",
    "/img/img4.webp",
    "/img/img5.jpg",
    "/img/img6.webp",
    "/img/img7.webp",
  ];

  const handleAutoSlide = () => {
    const timeout = setTimeout(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    }, 3000); // Adjust the delay for desired timing (in milliseconds)

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  };

  // Use useEffect hook to start and stop auto-slide on mount/unmount
  useEffect(() => {
    const intervalId = setInterval(handleAutoSlide, 3000); // Adjust the delay here if needed

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [slides.length]);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

 

  return (
    
    <div  className="lg:w-2/3 md:p-2 md:w-2/3
    
    
    
     w-full h-full  md:mt-0  ">
    
    <div className="overflow-x-hidden items-left md:relative md:top-0 ">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} className="xl:h-[570px]lg:h-[690px] md:h-[600px] sm:h-[600px]"/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-full sm:justify-between sm:items-center  sm:flex text-white px-3 md:text-3xl text-2xl ">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div> */}
     
    </div>
    <div className='lg:w-1/3 md:w-1/3 md:h-full h-full w-full relative md:absolute lg:absolute lg:p-3  md:top-14 lg:left-auto xl:left-auto md:right-1  top-8 lg:mt-0 mt-2 p-1 drop-shadow-xl'>
        
        <form className='rounded-xl mx-auto bg-white md:m-2 md:p-5  md:pb-1 lg:pt-2 lg:pb-1 xl:p-5 md:pt-8 p-5 ' action="/submit-booking" method="post">
            <h2 className="text-3xl mb-5 text-center">Book Your Service now!</h2>

        <div className="mb-4">
   
   <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required />
 </div>
       
        <div className="mb-4">
   
    <input type="tel" id="phone_no" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5   " placeholder="Phone Number" required />
  </div>
  <div className="mb-4">
   
    <input type="text" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  " placeholder="Gender" required />
  </div>

  <div className="mb-4">
   
   <input type="date" id="date" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 text-gray-400" placeholder="dd-mm-yyyy" required />
 </div>
 <div className="mb-4 inline-block ml-1 md:mr-0 lg:mr-2 lg:w-28 md:w-16 mr-20 pr-2 sm:w-32">
   
    <input type="number" id="hours" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 md:mr-0 lg:mr-8 sm:mr-8  " placeholder="HH" required min="0" max="23" />
  </div>
  <div className="mb-4  inline-block  md:w-16 md:mr-0 lg:mr-2 lg:w-28 mr-20 pr-2 sm:w-32">
   
   <input type="number" id="minutes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  md:ml-0 lg:ml-8 gap-0 " placeholder="MM" required min="0" max="59" />
 </div>
 <div className="mb-4  inline-block sm:ml-12 md:ml-0 lg:ml-7 md:w-16 lg:w-20">
   
   <select className="bg-gray-50 border gap-0 border-gray-300 text-gray-400 text-sm rounded-lg md:ml-0 lg:ml-16 md:mr-0 focus:border-blue-500 block w-full p-2.5  " >
    <option >AM</option >
    <option >PM</option>
   </select>
 </div>

 <div className="mb-4">
   
   <select id="services" className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  " required >
    <option>  Select Services</option>
    <option>Bridal Makeup</option>
    <option>Hair Styling</option>
    <option>Eye Makeup</option>
    <option>Waxing</option>
    <option>Facial</option>
    <option>Threading</option>
    <option>Clean-up</option>
    <option>Groom Makeup</option>
    <option>Guest Makeup</option>
   </select>
 </div>
 <div className="mb-4">
   
   <textarea id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  " placeholder="Message"></textarea>
 </div>

 <div className="mb-4">

 <button type="submit" className="bg-purple-600 border border-gray-300 text-white text-sm rounded-lg focus:border-blue-500 block w-full p-2  ">Submit</button>
    </div>

        </form>

       </div>
    </div>
    
    
  );
}




