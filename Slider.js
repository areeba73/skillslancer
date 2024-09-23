import React, { useState, useEffect } from 'react'


import one from "../assets/Images/1 (1).jpg"
import two from "../assets/Images/1 (2).jpg"
import three from "../assets/Images/1 (3).jpg"
import four from "../assets/Images/1 (4).jpg"
import five from "../assets/Images/1 (5).jpg"

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Company Inc.',
      text: 'This product has completely transformed the way we do business. Highly recommended!',
      image: one,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Manager, Tech Corp.',
      text: 'Exceptional service and amazing results. We have seen significant growth.',
      image:two,
    },
    {
      name: 'Mike Johnson',
      position: 'CTO, StartUp LLC',
      text: 'A game changer for our development process. Support has been fantastic!',
      image: three,    },
    {
      name: 'Sarah Williams',
      position: 'Head of Operations, MegaCorp',
      text: 'Outstanding experience! Our business has improved dramatically since using this service.',
      image:four,
    },
    {
      name: 'Chris Evans',
      position: 'Product Manager, InnovateX',
      text: 'The team is professional and the results exceeded expectations. Highly recommended!',
      image:five,    },
    {
      name: 'Emma Watson',
      position: 'Creative Director, DesignHub',
      text: 'We have increased our efficiency and improved our workflow with their excellent platform.',
      image: two,    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 2 ? prevIndex + 2 : 0
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="testimonial-section">
      <h2 className="section-title">From our Users</h2>
      <div className="testimonial-container">
        {/* Left arrow */}
        <button onClick={prevTestimonial} className="arrow prev-arrow">
          &#9664;
        </button>

        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
          <div className="testimonial-card " key={index}>
            <div className="image-container " >
              <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
            </div>
            <h3 className="name">{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
            <p className="testimonial-text">"{testimonial.text}"</p>
          </div>
        ))}

        {/* Right arrow */}
        <button onClick={nextTestimonial} className="arrow next-arrow">
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
