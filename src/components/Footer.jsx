import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
    <footer>
    <div className="bg-gray-100 text-gray-600 py-8 px-4  mt-4">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 ">
         <img src="img/GroobeLogo.svg" className='flex items-center h-10 w-36'/>
          <p className="mt-2 text-lg ">"Get the look you love"</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-5 space-x-3 md:space-y-0 gap-6">
          <section className="flex flex-col space-y-2">
            <h3 className="text-xl font-medium">PRODUCTS</h3>
            <ul className="list-none pl-4 text-lg">
              <li  className='mt-3 mb-4'><a href="/#Gallery" className="text-gray-500 hover:text-black">Packages</a></li>
              <li><a href="/#Testimonials" className="text-gray-500 hover:text-black">Reviews</a></li>
            </ul>
          </section>
          <section className="flex flex-col space-y-5 ">
            <h3 className="text-xl font-medium">COMPANY</h3>
            <ul className="list-none pl-4 text-lg">
              <li className='mt-3 mb-4'><a href="/#aboutUs" className="text-gray-500 hover:text-black">About</a></li>
              <li ><a href="/#contactUs" className="text-gray-500 hover:text-black">Contact Us</a></li>
            </ul>
          </section>
          <section className="flex flex-col space-y-5">
            <h3 className="text-xl font-medium">CONTACT US</h3>
            <h4 className='text-gray-500 hover:text-black text-lg'>GrooBe Beauty and Grooming Services</h4>
            <ul className="list-none pl-4 text-lg">
            
              <li className='mb-5'><a href="tel:+918360741113" className="text-gray-500 hover:text-black"><img src="contact/phone.png" className="mr-4 w-8 h-8"/> +91-8360741113</a></li>
              <li className='mb-5'><a href="mailto:support@groobe.in" className="text-gray-500 hover:text-black"><img src="contact/email.png" className="mr-4 w-8 h-8"/> support@groobe.in</a></li>
              <li className='mb-5'><a href="#" className="text-gray-500 hover:text-black"><img src="contact/address.png" className="mr-4 w-8 h-8"/>ACIC RISE, CGC, Landran, Mohali</a></li>
            </ul>
          </section>
        </div>
      </div>
      </div>
      <div className="bg-gray-400 mt-1 py-10 ">
      <p className='flex justify-center'>
        Copyright © {year} groobe.in &nbsp;
        </p>
        <p className="flex justify-center py-6 text-lg">All Rights Reserved|
        <a href="/terms-and-conditions" className=" text-2xl text-decoration-none">
          Terms and Conditions
        </a>
        &nbsp; | &nbsp;
        <a href="/privacy-policy" className=" text-2xl text-decoration-none">
          Privacy Policy
        </a>
      </p>
      </div>
      </footer>
   
   
    </>

  );
}

export default Footer;
