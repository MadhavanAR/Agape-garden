import React, { forwardRef, useState } from 'react';
import './faq.css';
const Faq = forwardRef((props, ref) => {
  const [visibleId, setVisibleId] = useState(null);

  const sentences = [
    { id: 1, q: "What educational approach does Agape Garden follow?", paragraph: "At Agape Garden, we embrace a holistic educational approach that combines play-based learning with structured activities. Our curriculum is designed to foster independence, creativity, and critical thinking skills." },
    { id: 2, q: "What age group does Agape Garden cater to?", paragraph: "This is the paragraph for sentence 2." },
    { id: 3, q: "How are teachers selected and trained at Agape Garden?", paragraph: "This is the paragraph for sentence 3." },
    { id: 4, q: "What sets Agape Garden apart from other preschools?", paragraph: "This is the paragraph for sentence 4." },

    // Add more questions and answers as needed
  ];

  const toggleParagraph = (id) => {
    setVisibleId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className='bg-faq'>
        <img src='./images/tower-icon.png' alt='tower' id='tower' />
        <img src='./images/puzzle-icon.png' alt='puzzle' id='puzzle' />
        <img src='./images/curvyline.png' alt='curvyline' id='curvyline' />
          <div className="faq-heading">
            <h1 style={{paddingBottom:"50px"}}>
              <span className="black-text">Frequently Asked </span>
              <span className="pink-text" style={{color:"#F55DAF"}}>Questions</span>
            </h1>
          </div>
          <div ref={ref} className="faq-container">
          <div className="faq-content">
            {sentences.map(({ id, q, paragraph }) => (
              <div key={id} className="faq-item">
                <div className="faq-question-container">
                  <p className="faq-question">{q}</p>
                  <button onClick={() => toggleParagraph(id)} className="transparent-button">
                    {visibleId === id ? (
                      <img src="./images/minus.png" alt="minus" />
                    ) : (
                      <img src="./images/plus.png" alt="plus" />
                    )}
                  </button>
                </div>
                {visibleId === id && <p style={{color:"#F55DAF"}}> {paragraph}</p>}
                <div className="faq-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src='./images/light-pink.png' alt='waves' style={{width:"100%"}} />
    </div>
  );
});

export default Faq;
