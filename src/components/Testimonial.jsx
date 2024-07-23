import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
  const testimonials = [
    {
      name: 'Simran Kaur',
      company: 'Company A',
      testimonial: '"Choosing Groobe for my bridal makeup was undoubtedly one of the best decisions I made for my wedding. If you are looking for a team that is passionate, skilled, and committed to making you look and feel your best on your big day, I wholeheartedly recommend Groobe. Their attention to detail, personalized approach, and exceptional artistry make them a standout choice in the world of bridal makeup.Thank you, Groobe, for making me feel like an absolute queen on the most important day of my life! The moment I looked in the mirror after my bridal makeup was complete, I was left in awe. Groobe had managed to capture my dream bridal look perfectly – the balance between elegance and natural beauty was flawless. The makeup enhanced my features while ensuring I still felt like myself. It was evident that their artists had an exceptional understanding of different skin tones and types."',
      rating: '/star.svg',
      image: '/reviews/img1.jpg', // Replace with your image
    },
    {
      name: 'Nandani Gupta',
      company: 'Company bitter',
      testimonial:'"I had an exceptional experience with GrooBe for my Haldi ceremony makeup. Their service was outstanding from start to finish. Booking was hassle-free, and the team accommodated my schedule.On the big day, the makeup artist arrived promptly and engaged in a detailed consultation to understand my preferences. She used high-quality products to create a flawless look while preserving my natural beauty. What truly impressed me was her patience and receptiveness to my feedback, ensuring I was completely satisfied.Throughout the process, the makeup artist cheerful demeanor created a relaxed atmosphere. GrooBe professionalism and dedication to customer satisfaction exceeded my expectations. I felt beautiful and confident.In conclusion, GrooBe is highly recommended for their expertise and personalized service. Thank you, GrooBe!"',
      rating: '/star.svg',
      image: '/reviews/img2.jpg', // Replace with your image
    },
    {
      name: 'Muskan Aggarwal',
      company: 'Company b',
      testimonial:'"Groobe bridal makeup service was an absolute game-changer for my wedding day. From the initial consultation to the final touch-up, their expertise and dedication were evident at every step. The pre-wedding prep allowed them to tailor the makeup to my style, and the results were breathtaking.The team professionalism and friendliness made the experience even more enjoyable. On the big day, my bridal makeup was not just flawless; it lasted perfectly from morning to night. The artistry of Groobe makeup artists made me feel confident and radiant, and the photos captured their work beautifully.In summary, Groobe bridal makeup service is a must for any bride-to-be. They combine skill, artistry, and a personal touch to create a truly magical bridal look. My wedding day would not have been the same without them."',
      rating: '/star.svg',
      image: '/reviews/img3.jpg', // Replace with your image
    },
    
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Optional: Autoplay the carousel
    autoplaySpeed: 3000,
  };
  

  

  return (
    <section id="Testimonials">
    <div className=" relative">
      <div className='left-[30px] ml-4 mt-16' >
      <p className=' ml-2 bg-[rgba(232,199,232,0.48)] rounded-full md:mt-64 lg:mt-20 z-1 h-12 w-12  min-h-24 max-h-32 max-w-32 mb-[-72px] min-w-24'></p><h1 className='ml-14 text-4xl font-semibold'>Reviews</h1>
      <p className='ml-14 mb-10'>Words to customers by customers</p></div>
      <div className=' xs:ml-6 xs:mr-6 sm:ml-6 sm:mr-6 md:mx-5'>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center sm:m-4 p-8 bg-[#f5f2d6] md:h-[470px] rounded-xl shadow-md my-auto overflow-hidden">
            <div className='w-1/3'> <img src={testimonial.image} alt={testimonial.name} className="h-0 w-0 md:block md:h-[400px] md:w-[300px] hover:opacity-70 !important" /></div>
            <div className='relative md:left-24 md:items-end md:w-2/3 md:bottom-[400px] md:ml-40 lg:ml-56 '>
             <h3 className="text-4xl sm:left-24 md:text-center font-medium mb-2">{testimonial.name}</h3>
             <span className='sm:left-20 md:justify-center flex '><img src={testimonial.rating} className='flex float-left text-lg'/><img src={testimonial.rating} className='flex float-left text-xl'/><img src={testimonial.rating} className='flex float-left text-lg'/><img src={testimonial.rating} className='flex float-left text-lg'/><img src={testimonial.rating}/></span>
             <p className="text-gray-700 mt-4 sm:left-20 ">{testimonial.testimonial}</p>
             </div>
             
           
           
           
           
           
          </div>
        ))}
      </Slider>
      </div>
   
    </div>
    </section>
  );
}

export default Testimonial;
