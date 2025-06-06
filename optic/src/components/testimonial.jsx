import React from 'react';
import Slider from 'react-slick';
import '../App.css';

const testimonials = [
  {
    name: "Grace N.",
    location: "Nairobi, Kenya",
    message: "Clarvo changed my son’s life. After struggling with blurry vision and poor grades, the team quickly diagnosed and treated him with smart lenses. Now he’s thriving in school. Truly life-changing!",
    rating: 5
  },
  {
    name: "Samuel K.",
    location: "Accra, Ghana",
    message: "I was impressed by how tech-savvy Clarvo is. From online appointment booking to smart diagnostic tools, everything was seamless and modern. This is the future of eye care in Africa!",
    rating: 4
  },
  {
    name: "Amina T.",
    location: "Kitale, Kenya",
    message: "Clarvo’s outreach program came to our village and offered free checkups. I got a pair of glasses I couldn't afford before. May God bless this mission!",
    rating: 5
  },
  {
    name: "Kevin M.",
    location: "Johannesburg, South Africa",
    message: "My first experience at Clarvo was beyond amazing. The staff was warm, the clinic was clean and high-tech, and my glasses arrived faster than expected. Highly recommend!",
    rating: 5
  },
  {
    name: "Yvonne O.",
    location: "Kampala, Uganda",
    message: "I’ve been with Clarvo for 5 years. What keeps me coming back is the consistency in service quality and the friendliness of the team. You feel seen, heard, and cared for.",
    rating: 4
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-message">“{review.message}”</p>
            <div className="testimonial-stars">{renderStars(review.rating)}</div>
            <div className="testimonial-author">
              <strong>{review.name}</strong>
              <span className="testimonial-location">{review.location}</span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
