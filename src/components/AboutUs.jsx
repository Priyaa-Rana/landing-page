// import React from 'react'

// function AboutUs() {
//   return (
//     <div className='container'>
     
//     <div  className="lg:w-2/3 md:w-2/3 md:p-2 
    
    
    
//      w-full h-full md:mt-0  ">
//         <img src="/img/about/about_us.jpg" alt="about us image" className='rounded-3xl mt-24 mx-auto lg:ml-12 lg:mt-4 xl:ml-40 w-[400px] h-[600px]  ' />
//       </div>
//       <div className='lg:w-1/3 md:w-1/3 md:h-full h-full w-full relative lg:top-0 md:relative lg:relative lg:p-3  md:top-12 lg:left-[800px] lg:bottom-40 md:right-1  top-10 lg:mt-0 mt-2 p-1 drop-shadow-xl'>
//         <h1 className='text-5xl  lg:ml-24 xl:ml-40 ml-auto '>About Us</h1>
//       </div>
//     </div>
//   )
// }

// export default AboutUs



import React from 'react';

const AboutUs = () => {
  return (
    <>
    <section id="aboutUs"><div  className="lg:w-2/3 md:w-2/3 md:p-2 w-full h-full md:mt-0  ">
             <img src="/img/about/about_us.jpg" alt="about us image" className='rounded-3xl mt-20 mx-auto lg:ml-12  lg:mt-12 xl:ml-40 w-[400px] h-[600px]  ' />
    </div>
   
    
    <section className=" relative md:absolute lg:absolute lg:top-[790px] about-us  py-12 px-4 lg:w-1/2 lg:left-[500px] md:left-7 w-full sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-sans  mb-2">About Us</h2>
        <h2 className='text-3xl  font-serif'> Weddings, Engagements, Makeups, and more!</h2><hr className="border h-2 bg-yellow-700 w-full my-2" /><br/>
        <p className="text-gray-700 leading-relaxed lg:left-4 relative mb-8">
          GrooBe provides exceptional wedding and party services tailored to the needs of Indian celebrations. Our team of skilled professionals works to bring your wedding fantasies to life by giving you your desired look at home, at an affordable price.  We listen closely to your preferences, prioritize hygiene, and use only quality products to ensure a perfect look for your special day. Our goal is to make your wedding day as special and memorable as possible, delivering exceptional customer service and a flawless appearance. Whether you're looking for hair and makeup services or a comprehensive bridal package, our team has the expertise to make your wedding unforgettable. Contact us to learn more about our services.
        </p>
        {/* Add a button or link to contact page here */}
      </div>
    </section>
    </section>
    </>
  );
};

export default AboutUs;
