// PhotoGallery.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoGallery = () => {
  // Sample photo URLs
  const photos = [
    'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/405112307_303689999294993_5154512419273878582_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ccw8VqDcW9IAX-tZpox&_nc_ht=scontent.ftun2-2.fna&oh=00_AfAkfg71V9fGkww_h9fZfxNicoAwX0yArX-AD_W6ZNtOyQ&oe=657B6A88',
    'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/405085397_303689995961660_5277352327275127462_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=NM9uRbRHRucAX9THWDU&_nc_ht=scontent.ftun2-2.fna&oh=00_AfAVnuxP4VCU7ATM4Sfg7tSBTjFSkTI-LIJcrB0butumJw&oe=657C5437',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Set the number of photos to show at a time
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoGallery;
