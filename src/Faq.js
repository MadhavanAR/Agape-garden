import React, { forwardRef, useState } from 'react';

const Faq = forwardRef((props, ref) => {
  const [visibleId, setVisibleId] = useState(null);

  const sentences = [
    { id: 1, q: "What educational approach does Agape Garden follow?", paragraph: "At Agape Garden, we embrace a holistic educational approach that combines play-based learning with structured activities. Our curriculum is designed to foster independence, creativity, and critical thinking skills." },
    { id: 2, q: "What age group does Agape Garden cater to?", paragraph: "This is the paragraph for sentence 2." },
    // Add more questions and answers as needed
  ];

  const toggleParagraph = (id) => {
    setVisibleId(prevId => (prevId === id ? null : id));
  };

  return (
    <div ref={ref} className="faq-container">
      <div className="heading">
        <h1>
          <span className="black-text">Frequently Asked </span>
          <span className="pink-text">Questions</span>
        </h1>
      </div>
      <div className="faq-content">
        {sentences.map(({ id, q, paragraph }) => (
          <div key={id}>
            <p className="faq-question">
              {q}
              <button onClick={() => toggleParagraph(id)} className="transparent-button">
                {visibleId === id ? (
                  <img src="./images/minus.png" alt="minus" />
                ) : (
                  <img src="./images/plus.png" alt="plus" />
                )}
              </button>
            </p>
            {visibleId === id && <p>{paragraph}</p>}
            <div className="faq-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Faq;
