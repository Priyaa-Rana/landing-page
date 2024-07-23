import React from 'react'
import { useState } from 'react';



const Gallery = () => {
  

  const images = [
    { id: 8, src: '/gallery/engagement/img1.jpg', alt: 'Engagement photo', category: 'Engagement',description: 'Description for image 1' },
    { id: 2, src: '/gallery/engagement/img2.jpg', alt: 'Engagement Photo', category: 'Engagement',description: 'Description for image 1' },
    { id: 3, src: '/gallery/wedding/img8.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
    { id: 4, src: '/gallery/mehndi/img23.jpg', alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1' },
    { id: 5, src: '/gallery/wedding/img12.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 6, src:'/gallery/mehndi/img29.jpg' , alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1'},
     { id: 7, src: '/gallery/wedding/img7.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 1, src: '/gallery/engagement/img3.jpg', alt: 'Engagement photo', category: 'Engagement',description: 'Description for image 1' },
     { id: 9, src: '/gallery/wedding/img18.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 10, src: '/gallery/mehndi/img24.jpg', alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1' },
     { id: 11, src: '/gallery/nailart/img32.jpg', alt:  'Nail Art Design', category: ' Nail Art',description: 'Description for image 1' },
     { id: 12, src: '/gallery/engagement/img4.jpg', alt: 'Engagement photo', category: 'Engagement',description: 'Description for image 1' },
     { id: 13, src: '/gallery/wedding/img10.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 14, src: '/gallery/wedding/img17.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 15, src: '/gallery/wedding/img9.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id:16, src: '/gallery/mehndi/img25.jpg', alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1' },
     { id: 17, src: '/gallery/engagement/img5.jpg', alt: 'Engagement photo', category: 'Engagement',description: 'Description for image 1' },
     { id: 18, src: '/gallery/hairstyle/img39.jpg', alt: 'Hairstyle photo', category:'Hairstyle',description: 'Description for image 1' },
     { id: 19, src: '/gallery/wedding/img11.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     
     { id: 20, src: '/gallery/hairstyle/img36.jpg', alt: 'Hairstyle photo', category: 'Hairstyle',description: 'Description for image 1' },
     { id: 21, src: '/gallery/hairstyle/img35.jpg', alt: 'Hairstyle photo', category: 'Hairstyle',description: 'Description for image 1' },
     { id:22, src: '/gallery/wedding/img15.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 23, src: '/gallery/wedding/img16.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 24, src:  '/gallery/party/img20.jpg', alt: 'Party photo', category: 'Party',description: 'Description for image 1' },
     { id: 25, src: '/gallery/mehndi/img26.jpg', alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1' },
     { id: 26, src: '/gallery/wedding/img13.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     { id: 27, src:'/gallery/mehndi/img30.jpg', alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1' },
     
     { id: 28, src: '/gallery/wedding/img14.jpg', alt: 'Wedding photo', category: 'Wedding',description: 'Description for image 1' },
     
     { id: 29, src: '/gallery/engagement/img6.jpg', alt: 'Engagement photo', category: 'Engagement' ,description: 'Description for image 1'}, 
     { id: 30, src:  '/gallery/party/img21.jpg', alt: 'Party photo', category: 'Party',description: 'Description for image 1' },
     { id: 31, src: '/gallery/mehndi/img28.jpg', alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1' }, 
     { id: 33, src: '/gallery/hairstyle/img37.jpg', alt: 'Hairstyle photo', category: 'Hairstyle',description: 'Description for image 1' },
     { id: 34, src: '/gallery/nailart/img31.jpg', alt:  'Nail Art Design', category: 'Nail Art',description: 'Description for image 1' },
     { id: 35, src: '/gallery/nailart/img34.jpg', alt: 'Nail Art Design', category: 'Nail Art',description: 'Description for image 1' },
     { id: 36, src:  '/gallery/party/img22.jpg', alt: 'Party photo', category: 'Party',description: 'Description for image 1' },
     { id: 37, src: '/gallery/nailart/img33.jpg', alt: 'Nail Art Design', category: 'Nail Art',description: 'Description for image 1' },
     { id: 38, src: '/gallery/hairstyle/img40.jpg', alt: 'Hairstyle photo', category: 'Hairstyle',description: 'Description for image 1' },
     { id: 39, src: '/gallery/mehndi/img27.jpg', alt: 'Mehndi photo', category: 'Mehndi',description: 'Description for image 1' },
     { id: 40, src: '/gallery/party/img19.jpg', alt: 'Party photo', category: 'Party' ,description: 'Description for image 1'},
    
     
    // ... more images
  ];

  const [selectedCategory, setSelectedCategory] = useState('all'); // Initial category
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter((image) => image.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  

  return (
    <>
    <section id="Gallery">
   <div className="gallery relative lg:top-2 lg:mt-24 md:top-60 md:mt-52 md:pt-10 xs:ml-5 xs:mr-5 lg:ml-10 lg:mr-10">
    <h1 className='text-4xl flex justify-center mb-5'>Gallery</h1>
      <ul className="gallery-menu flex justify-center ">
        {/* <li
          className={`gallery-menu-item px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 ${
            selectedCategory === 'all' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleCategoryClick('all')}
        >
          All
        </li> */}
        <li
          className={`gallery-menu-item px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 ${
            selectedCategory === 'Wedding' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleCategoryClick('Wedding')}
        >
          Wedding
        </li>
        <li
          className={`gallery-menu-item px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 ${
            selectedCategory === 'Party' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleCategoryClick('Party')}
        >
          Party
        </li>
        <li
          className={`gallery-menu-item px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 ${
            selectedCategory === 'Haistyle' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleCategoryClick('Hairstyle')}
        >
          Hairstyle
        </li>
        <li
          className={`gallery-menu-item px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 ${
            selectedCategory === 'Engagement' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleCategoryClick('Engagement')}
        >
          Engagement
        </li>
        
       
       
        <li
          className={`gallery-menu-item px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 ${
            selectedCategory === 'Mehndi' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleCategoryClick('Mehndi')}
        >
          Mehndi
        </li>
        <li
          className={`gallery-menu-item px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 ${
            selectedCategory === 'Nail Art' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleCategoryClick('Nail Art')}
        >Nail Art
          
        </li>
      </ul>
      <div className="grid ml-2 mr-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {filteredImages.map((image) => (
        <div key={image.src} className="image-container relative">
          <img
            
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-xl object-cover shadow-md hover:opacity-75 transition duration-300 ease-in-out"
          
          />
          <div className="image-overlay absolute inset-0 flex justify-center items-center bg-transparent rounded-xl hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer" onClick={() => handleImageClick(image)}>
         
        
            </div>
            </div>
            
          
        ))}
     </div>
     {selectedImage && (
        <div className="image-modal fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center  z-50 ">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-auto h-auto max-w-2xl max-h-screen  object-contain mx-auto pb-10 pt-10 rounded-xl"
          />
          <div className="image-description absolute rounded-xl bottom-10 opacity-70 bg-black p-4 text-white">
            <p className='flex justify-center font-semibold'>{selectedImage.category}</p><p>{selectedImage.description}</p>
           
          </div>
          {/* Click outside the modal to close (optional) */}
          <div className="modal-overlay absolute inset-0 cursor-pointer" onClick={handleCloseModal} />
        </div>
      )}

    </div>
    </section>
    </>
    
  )
}

export default Gallery