import { useState } from "react";

/* eslint-disable import/no-anonymous-default-export */
export default function Faq() {
  // State to store the id of the currently visible paragraph
  const [visibleId, setVisibleId] = useState(null);

  const sentences = [
    {
      id: 1,
      paragraph:
        "At Agape Garden, we embrace a holistic educational approach that combines play-based learning with structured activities. Our curriculum is designed to foster independence, creativity, and critical thinking skills.",
      q: "What educational approach does Agape Garden follow?",
    },
    {
      id: 2,
      paragraph: "This is the paragraph for sentence 2.",
      q: "What age group does Agape Garden cater to?",
    },
    {
      id: 3,
      paragraph: "This is the paragraph for sentence 3.",
      q: "How are teachers selected and trained at Agape Garden?",
    },
    {
      id: 4,
      paragraph: "This is the paragraph for sentence 4.",
      q: "What sets Agape Garden apart from other preschools?",
    },
  ];

  // Toggle visibility of a paragraph
  const toggleParagraph = (id) => {
    setVisibleId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
    <div className="bg-faq">
      <img src="./images/puzzle-icon.png" alt="puzzle" id="puzzle" />
      <div className="faq-container">
        <div className="heading">
        <h1>
          <span style={{ color: "black" }}> Frequently Asked </span>
          <span style={{ color: "#F55DAF" }}>Questions</span>
        </h1>
        </div>
        <img
          src="./images/hand-drawing.png"
          alt="curvyline"
          id="curvyline"
        ></img>
        <div className="faq-content">
          {sentences.map((s) => (
            <div key={s.id}>
              <p style={{ color: "black", margin: "5px 0px" }}>
                {s.q}
                <button
                  onClick={() => toggleParagraph(s.id)}
                  className="transparent-button"
                >
                  {visibleId === s.id ? (
                    <img src="./images/minus.png" alt="minus" />
                  ) : (
                    <img src="./images/plus.png" alt="plus" />
                  )}
                </button>
              </p>

              {visibleId === s.id && <p>{s.paragraph}</p>}
              <div className="faq-line"></div>
            </div>
          ))}
        </div>
      </div>
      <img src="./images/tower-icon.png" alt="tower" id="tower" />
    </div>
    <img src="images/light-pink.png" alt="line" style={{width:"100%"}}/>
    </div>
  );
}
