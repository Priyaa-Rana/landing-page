import React from 'react'
import { useState } from 'react';


function Services() {
  const [numCardsToShow, setNumCardsToShow] = useState(2);
  const handleShowMore = () => {
    setNumCardsToShow(cards.length); // Show all remaining cards
  };
  const handleShowLess = () => {
    setNumCardsToShow(2); // Show initial number of cards again
  };

  const cards = [
    {
      image: '/services/img1.webp',
      title: 'Bridal Special',
      description:
        'Our team of expert professional artists specialize in enhancing your natural beauty and make you look stunning on your special day. From expert hair styling to flawless makeup application, our artists strive to create an incredible look that reflects your unique style and personality. With our focus on advanced techniques and high quality products, our team is dedicated to bring your dream bridal vision to life and make your wedding day even more magical and memorable with a perfect look. Celebrate your wedding with a Flawless complexion, gorgeous hair and picture perfect look with our exclusive facials, hair spas, manicures, pedicures and breath taking bridal makeup.',
        price:'Starting at 7,999/-'
    },
    {
      image: '/services/img2.webp',
      title: 'Groom Styling',
      description:'Our groom beauty services offer a touch of perfection to your handsome look. Our experienced team of stylists and makeup artists ensure that your look is perfect and elegant. We provide turban tying, haircuts, groom makeup, styling, shaving, beard trimming, skin care treatments, and facials. Our professionals use premium products and take extra care to ensure that your groom makeup and styling is splendid for the special day. With our experience and expertise, you can be sure of looking your absolute best on your wedding day!'
        ,
        price:'Starting at 1,999/-'
    },
    {
      image: '/services/img3.webp',
      title: 'Party Makeup',
      description:
        'Glamup the gathering and look fabulous with our perfect party makeup. We offer affordable and quick services ranging from hair styling to makeup and nail art-all to make you feel party ready in no time. You can choose from a subtle and elegant look or go bold with a vibrant makeup.',
        price:'Starting at 3,499/-'
    },
    {
      image: '/services/img4.webp',
      title: 'Engagement special',
      description:
        'Look stunningly gorgeous on your special day with our enchanting engagement makeup . we have everything you need for a glamorous and picture-perfect look ranging from facial , makeup ,hairstyling to nail art .Our team of experienced makeup artists help you achieve the perfect look , complementing your individual style and needs. Depending on your personal taste and preferences , the style and intensity of the makeup can range from natural and radiant to bold and glamorous . Make your special moments memorable with our experts who are committed to create a look that perfectly captures the essence of your joyous occasion.',
        price:'Starting at 3,999/-'
    },
    {
      image: '/services/img6.webp',
      title: 'Guest Special',
      description:'Our skilled and professional makeup artists are dedicated to enhancing your natural beauty and highlighting your features, ensuring that you look and feel your best for any occasion. Whether you are attending a wedding, party, or special event, our expert makeup application will complement your style and attire.',
      price:'Starting at 3,499/-'
    },
    {
      image: '/services/img7.webp',
      title: 'Daily Lifestyle',
      description:'Elevate your daily lifestyle with our comprehensive range of rejuvenating services .Treat your skin with refreshing facials, D-Tan sessions, manicures, pedicures, threading, and smooth waxing treatments .Treat yourself with the ultimate self-care experience and embrace each day with a refreshed and radiant glow.',
      price:'Starting at 1,499/-'
    },

  ];
  return (
   <>
   <section id="Services">
  <div className="container mx-auto lg:top-[50px]  md:top-[400px] relative  px-4 py-2">
      <h2 className="text-3xl lg:top-[200px] font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 gap-8">
        {cards.slice(0,numCardsToShow).map((card) => (
          <div
            key={card.title}
            className="card rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            {
              <img
                className="w-full h-full xl:w-96 xl:h-80object-cover md:w-1/2"
                src={card.image}
                alt={card.title}
              />
            }
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4 ">{card.description}</p>
              
              <h2 className=" mb-4 text-2xl  ">{card.price}</h2>
              </div>
              
              <button className="btn btn-secondary rounded-md border border-gray-900  block p-2 min-w-[150px] max-w-[200px] shadow-lg hover:bg-gray-500 ">Book Now</button>
            </div>
           
          
          </div>
          
        ))}
        
        {/* Conditionally render "Show More" or "Show Less" button */}
        <div className="flex justify-center mt-1"> {/* Centered button container */}
            {numCardsToShow === cards.length ? (
              <button
                className="btn btn-secondary rounded-md border border-gray-900 block p-2 min-w-[150px] max-w-[250px] shadow-lg hover:bg-gray-500"
                onClick={handleShowLess}
              >
                Show Less
              </button>
            ) : (
              <button
                className="btn btn-secondary rounded-md border border-gray-900 block p-2 min-w-[150px] max-w-[250px] shadow-lg hover:bg-gray-500"
                onClick={handleShowMore}
              >
                Show More 
              </button>
            )}
          </div>
      </div>
      <div className='bg-cover rounded-xl bg-no-repeat opacity-100'style={{ backgroundImage: `url('/bg_img.jpg')` }}>
      <div className="my-5  text-white">
    <h2 className="text-3xl pt-16 justify-center font-bold flex">Why Choose Us?</h2>
  </div>
      <div className="grid md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-5 xs:grid-cols-2 xs:gap-1 text-white font-sans pl-4 pr-2">  

  <div className="my-5 items-center">
    <h4 className="mb-3 font-semibold text-2xl">Safety Assurance</h4>
    <p className="mb-4 ">Relax ,refresh and celebrate your perfect look - all with assurance of safety.</p>
    <p className="mb-4 ">Our experienced and well-behaved staff are committed to using the best quality products and ensuring your safety while providing services.</p>
  </div>

  <div className="my-5 ">
    <h4 className="mb-3 font-semibold text-2xl">Hygiene</h4>
    <p className="mb-10 ">Yes! We don’t compromise on hygine</p>
    <p className="mb-4 ">Our experienced and well-behaved staff are committed to using the best quality products and ensuring your safety while providing services.</p>
  </div>

  <div className="my-5 ">
    <h4 className="mb-3 font-semibold  text-2xl">On Site Service | 10+ cities</h4>
    <p className="mb-2 ">Enjoy hassle free services from the comfort of your home</p>
    <p className="mb-4 ">We bring convenience and quality to your doorstep by providing onsite services in over 10 cities, including Chandigarh, Panchkula, Mohali, Zirakpur, Kalka, Delhi, Kharar, Gurgaon, Alwar, Una and many more.....</p>
  </div>
  <div className="my-0 ">
    <h4 className="mb-3 font-semibold  text-2xl">Happy Customers</h4>
    <p className="mb-4 ">Add a touch of personalization and be picture perfect on your special day</p>
    <p className="mb-4 ">You can customize your wedding package by selecting and choosing services for bride and groom according to your individual needs and preferences.</p>
  </div>
  <div className="my-0 ">
    <h4 className="mb-3 font-semibold text-2xl">Custom Packages</h4>
    <p className="mb-10 ">Yes! We don’t compromise on hygine</p>
    <p className="mb-4 ">Our experienced and well-behaved staff are committed to using the best quality products and ensuring your safety while providing services.</p>
  </div>
  <div className="my-0 ">
    <h4 className="mb-3 font-semibold  text-2xl">Best Experience</h4>
    <p className="mb-10 ">Encounter extraordinary beauty experience</p>
    <p className="mb-4 ">At GrooBe, we take pride in providing the absolute best beauty experience for our valued clients. With the team of skilled professionals, premium products, and personalized attention, we ensure that your every moment is a memorable with us . Customer satisfaction is our ultimate goal.</p>
  </div>
 
</div>
</div>
    </div>
    </section>

   </>
  )
}

export default Services