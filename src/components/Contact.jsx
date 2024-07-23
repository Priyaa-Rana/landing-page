import React from 'react'

function Contact() {
  return (
    <>
    <section id="contactUs" className="contact-section relative mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Contact Information */}
        <div className="contact-info flex flex-col gap-8 mb-8 md:mb-0 w-full md:w-1/2">
          <div className="contact-item flex items-center shadow-lg pl-8 pr-4 py-7 border-slate-300 rounded-lg">
            <img src="/contact/phone.png" alt="Phone icon" className="mr-4 w-8 h-8" />
            <div>
              <h4>Phone</h4>
              <p className="text-gray-600">+91-8360741113</p>
            </div>
          </div>
          <div className="contact-item flex items-center shadow-lg pl-8 pr-4 py-7 border-slate-300 rounded-lg">
            <img src="/contact/email.png" alt="Email icon" className="mr-4 w-8 h-8" />
            <div>
              <h4>Email</h4>
              <p className="text-gray-600">support@groobe.in</p>
            </div>
          </div>
          <div className="contact-item flex items-center shadow-lg pl-8 pr-4 py-7 border-slate-300 rounded-lg">
            <img src="/contact/address.png" alt="Address icon" className="mr-4 w-8 h-8" />
            <div>
              <h4>Address</h4>
              <p className="text-gray-600">ACIC RISE, CGC, Landran, Mohali</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form w-full md:w-1/2 ml-0 md:ml-8">
          <form className="mt-8 md:mt-4">
            <h2 className="text-3xl pl-0 md:pl-6">Get In Touch</h2>
            <div className="form-group mt-6">
             
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-1/2 px-3 py-2 rounded-lg border float-left  border-gray-300 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group mt-6">
              
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-1/2 px-3 pl-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group mt-6">
              
              <input
                type="text"
                id="phone_no"
                name="phone_no"
                placeholder="Your Phone"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          <textarea placeholder="Message" id="message" rows="3" className='focus:ring-indigo-500 focus:border-indigo-500 rounded-lg border border-gray-300 outline-none focus:ring-1   w-full px-3 py-2 mt-6'></textarea>
          <button type="submit"   className="bg-purple-600 border border-gray-300 text-white text-sm rounded-lg  block w-full px-3 py-2 mt-6 focus:ring-indigo-500 ">Send Message</button>
            </form></div>
      </div>

    </section>
    </>
    
  )
}

export default Contact