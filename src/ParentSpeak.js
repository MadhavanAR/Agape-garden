import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './parent-speak.css';
const arr = [
  {
    img: "./images/profile-pic.png",
    name: "Arjun B",
    review:"Agape Garden has been a fantastic choice for our son. He lovesgoing to school every day, thanks to the caring teachers andcaregivers. We've seen great improvements in his social skills,activities, and academics. Huge thanks to all the teachers,especially Angel Priya, Amala and Anita for their exceptionaldedication.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Syed Ismail",
    review:"I am so grateful for the wonderful care and attention that the staff at the Agape garden Play school and Day center provide for my child. The environment is safe, nurturing, and stimulating, which gives me great peace of mind while I'm at work. My child always comes home happy and excited to share about their day, which is a true testament to the quality of care they receive. I highly recommend this daycare center to any parent looking for a trusting and loving place for their child to grow and learn.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "M Anuranjani",
    review: "My child  had an amazing experience at Agape Garden,with caring teachers and engaging activities. The preschool's focus on social-emotional learning has helped my child develop essential life skills."
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Pradeep Shankar",
    review: "As parents we are so much happy with the school. We could see so many good changes with our child's behavior. We are fortunate to have such a school and staffs n care takers they are so supportive and caring towards kids. Safety is assured and its ambience is such that every child would love it. We highly recommend this school"
  },
];

export default function ParentSpeak() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  };

  const { img: profile, name, review } = arr[index];

  return (
    <div className="parent-speak-container">
      <div className="heading">
        <img src="./images/speakstrike.png" alt="speakstrike" id="speakstrike" />
        <h1>
          <span style={{ color: "black" }}>Parents </span>
          <span style={{ color: "#F55DAF" }}>Speak</span>
        </h1>
        <p style={{paddingTop:"12px"}}>
          Read what parents love about our play school and how it positively
          impacts their children's growth!
        </p>
      </div>
      <div className="pscard-container">
        <button id="left-button" onClick={handlePrevious}>
          <img src="./images/left.png" alt="Previous" />
        </button>
        <div className="review-box">
          <img src={profile} alt="profile" id="profile" />
          <div className="pscard">
            <h1>{name}</h1>
            <img src="./images/stars.png" alt="stars" />
            <div className="review">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} /> {review}{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
            </div>
          </div>
        </div>
        <button id="right-button" onClick={handleNext}>
          <img src="./images/right.png" alt="Next" />
        </button>
      </div>
    </div>
  );
}
