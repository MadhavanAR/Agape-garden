"use client"

import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "Arjun b",
      content: "Agape Garden has been a fantastic choice for our son. He loves going to school every day, thanks to the caring teachers and caregivers. We've seen great improvements in his social skills, activities, and academics. Huge thanks to all the teachers, especially Angel Priya, Amala and Anita for their exceptional dedication.",
    },
    {
      id: 2,
      title: "Bala",
      content: "Agape Garden has been a fantastic choice for our son. He loves going to school every day, thanks to the caring teachers and caregivers. We've seen great improvements in his social skills, activities, and academics. Huge thanks to all the teachers, especially Angel Priya, Amala and Anita for their exceptional dedication.",
    },
    {
      id: 3,
      title: "Mahi",
      content: "Agape Garden has been a fantastic choice for our son. He loves going to school every day, thanks to the caring teachers and caregivers. We've seen great improvements in his social skills, activities, and academics. Huge thanks to all the teachers, especially Angel Priya, Amala and Anita for their exceptional dedication.",
    },
    // Add more testimonials here
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };

  // Define a list of border radius values for each card
  const borderRadiusValues = ['10px', '20px', '30px']; // Adjust these values as needed

  return (
    <section style={{
      marginTop: '6rem',
      maxWidth: '1006px',
      margin: 'auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center horizontally
      justifyContent: 'center', // Center vertically
      minHeight: '60vh' // Ensure enough vertical space
    }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: '600',
        color: '#EC4899', // Pink color used in the header
        marginBottom: '1.5rem'
      }}>
        Parents <span style={{ color: '#EC4899' }}>Speak</span>
      </h2>
      <p style={{
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#1F2937',
        marginBottom: '2rem', // Add space between paragraph and carousel
        maxWidth: '770px',
        margin: 'auto'
      }}>
        Read what parents love about our play school and how it positively impacts their children's growth!
      </p>
      <div className="carousel" style={{
        position: 'relative',
        width: '740px',
        height: '377px',
        perspective: '500px',
        transformStyle: 'preserve-3d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem' // Add space between the paragraph and carousel
      }}>
        <button 
          className="nav left" 
          onClick={handlePrev} 
          style={{
            color: '#EC4899', // Pink color for arrows
            fontSize: '5rem',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: '50%',
            left: '-8rem', // Add space to the left of the carousel
            zIndex: '2',
            cursor: 'pointer',
            userSelect: 'none',
            background: 'unset',
            border: 'unset',
            transform: 'translateY(-50%)'
          }}
        >
          <TiChevronLeftOutline />
        </button>
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className="card-container" 
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `rotateY(${(index - activeIndex) * 50}deg) scaleY(${1 - Math.abs(index - activeIndex) * 0.4}) translateZ(${Math.abs(index - activeIndex) * -30}rem)`,
              filter: `blur(${Math.abs(index - activeIndex) * 1}rem)`,
              transition: 'all 0.3s ease-out',
              opacity: Math.abs(index - activeIndex) < 3 ? 1 : 0,
              display: Math.abs(index - activeIndex) < 3 ? 'block' : 'none',
              border: '2px solid #EC4899', // Pink border color for each card
              borderRadius: borderRadiusValues[index % borderRadiusValues.length] // Apply dynamic border radius
            }}
          >
            <div 
              className="card" 
              style={{
                width: '100%',
                height: '100%',
                padding: '2rem',
                backgroundColor: `hsl(280deg, 40%, ${100 - (Math.abs(index - activeIndex) * 50)}%)`,
                borderRadius: '1rem',
                color: '#9CA3AF',
                textAlign: 'justify',
                transition: 'all 0.3s ease-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative'
              }}
            >
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/772a8b1ccee666ff466b17201cf28c685ec2b227f81a25eeece9ade71a95a893?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048"
                alt="Profile" 
                style={{
                  position: 'absolute',
                  top: '-45px', // Move the image higher
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '102px',
                  height: '102px',
                  borderRadius: '50%', // Ensure the image is circular
                  objectFit: 'cover'
                }}
              />
              <h2 style={{
                textAlign: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '2rem 0 0.7em', // Adjust top margin to ensure space for the image
                color: '#1F2937'
              }}>
                {testimonial.title}
              </h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b05d1ba8e98c3950391e79198ef26d3a8053244d9875ad67cb980dc2922488c7?apiKey=6e8a6127015d45199b071b5b69920048&&apiKey=6e8a6127015d45199b071b5b69920048"
                alt="Star"
                style={{
                  width: '10rem', // Adjust width to match the font size of the name
                  height: '10rem', // Adjust height to match the font size of the name
                  marginTop: '-5rem' // Add margin to separate from text
                }}
              />
              <p style={{
                fontWeight: 'bold', // Make the paragraph text bold
                marginTop: '2rem', // Adjust margin to ensure proper spacing
                textAlign: 'center', // Center align text
                marginTop: '-2rem'
              }}>
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
        <button 
          className="nav right" 
          onClick={handleNext} 
          style={{
            color: '#EC4899', // Pink color for arrows
            fontSize: '5rem',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: '50%',
            right: '-8rem', // Add space to the right of the carousel
            zIndex: '2',
            cursor: 'pointer',
            userSelect: 'none',
            background: 'unset',
            border: 'unset',
            transform: 'translateY(-50%)'
          }}
        >
          <TiChevronRightOutline />
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;


