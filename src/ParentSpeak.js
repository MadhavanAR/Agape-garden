import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useState, forwardRef } from "react";
import "./parent-speak.css";

const arr = [
  {
    img: "./images/profile-pic.png",
    name: "Arjun B",
    review:
      "Agape Garden has been a fantastic choice for our son. He loves going to school every day, thanks to the caring teachers and caregivers. We've seen great improvements in his social skills, activities, and academics. Huge thanks to all the teachers, especially Angel Priya, Amala and Anita for their exceptional dedication.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Syed Ismail",
    review:
      "I am so grateful for the wonderful care and attention that the staff at the Agape Garden Play School and Day Center provide for my child. The environment is safe, nurturing, and stimulating, which gives me great peace of mind while I'm at work. My child always comes home happy and excited to share about their day, which is a true testament to the quality of care they receive. I highly recommend this daycare center to any parent looking for a trusting and loving place for their child to grow and learn.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "M Anuranjani",
    review:
      "My child had an amazing experience at Agape Garden, with caring teachers and engaging activities. The preschool's focus on social-emotional learning has helped my child develop essential life skills.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Pradeep Shankar",
    review:
      "As parents, we are so much happy with the school. We could see so many good changes with our child's behavior. We are fortunate to have such a school and staff; caretakers are so supportive and caring towards kids. Safety is assured and its ambience is such that every child would love it. We highly recommend this school.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Amhirdha Valli",
    review:
      "Good morning mam. I am very happy to say about few words about Agape garden.Agape garden is one of the most comfortable home for kids, when they come out for the first time.The stay, atmosphere , each and everyday activity which the children had is awesome.Teachers and staffs are very kind to children. Finally, i would like to say thanks to Angel mam, each and every staff who were involved in shaping our kids. Once again thank you all.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Sharon Reuban",
    review:
      "The best environment for your toddler. They are such a warm and inviting set of people who give such good care to the kids who attend there. Their intentions are far beyond monetary benefits and so, you can be rest assured that your child will find a second home at Agape!",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Keerthana Gunaseelan",
    review:
      "Now my son completed UKG in Agape.. Really We are missing Agape.. it is safety trusted place.. it is like second home for my son.. Thank you very much Mam, Care Takers.. We love Agape.. My son wants to come to agape for 1st STD also mam. Really Very Good School.. My Son very much interested to go to school..i like monthly syllabus and monthly snacks concepts very much.. main part is we dont  need to worry about kids safety.. teaching method very nice..",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Nivedha M",
    review:
      "Our daughter did her Kindergarten here for two years and I have really seen a beautiful transformation in terms of education and she as a person whom she has evolved into. The various activities everyday that builds their cognitive & literacy  skills are great. Would definitely recommend this to Parents.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Deepak Bahera",
    review:
      "One of the best decisions that I have taken towards my child's future is to enrol him at Agape Garden. Conveniently located in Kovilambakkam about two hundred metres behind Nilgiris. The street where the school is located is decently wide so that you can drop your kids in car or two wheeler. They have enrolments for Pre-KG,LKG and UKG. They follow the CBSE syllabus. They also offer Day care facilities.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Tamilarasi Renu",
    review:
      "I'm thankful to angel mam and my son class miss for take care for my child  and effort taken to improve every child academically and also I am thankful to thamema care taker too. My son really enjoyed going to school best place to learn and play 😊 …",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Steffie Grace",
    review:
      "Agape garden :Homely infrastructure , friendly teachers and care takers. Best place where you can tune your little bud with good habits and knowledge .. Thank so much  for the care and love poured on every individual kid.. would love to recommend.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Pauline Samuel",
    review:
      "Feeling blessed to have put my daughter in Agape. she loves going to school and I saw lot of progress in a month. First and foremost thing i love about the school  is all teaching and non teaching staff shower their love and affection on the children. The management  puts lot of effort to make the children happy by celebrating  all festive ocassions and taking them to field trips.",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Meena Mahalingam",
    review:
      "The journey with Agape garden helps my kid to grow up in the next stage. Your team is taking more effort on kids growth by giving more creative activities to them. Especially we have enjoyed the annual day celebration and happy to see our kids on stage. As well your daughter had hosted the entire programme very nicely and proud of her. Thank you so much for day care.. We feel comfortable when she is being in Agape garden. Thank you very much for Angel Mam , teachers and caring aunts..",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Raj Kamal",
    review:
      "Excellent Homely atmosphere for  kids to stay study and play in a healthy way. Its a 2nd home for my son with extreme care, love and affection from Mrs Angel mam and Amala mam . Very Hygienic and with Modern Facilities. Staff teaching is very good and polite. They helped a lot to adjust my kid in daily activities as well as helping a lot to have food on time. Special thanks to care taker who take care of my kid in terms of cleanliness as well as food. Fully and strongly strongly recommended👍. yeah it's Agape Garden's",
  },
  {
    img: "./profile pictures/blank-pfp.webp",
    name: "Sahana KC",
    review:
      "My Daughter had a good Start @ Agape. Very Flexible and there is a good rapport between Teacher's, Students and Parents. Special Mention: Very Supportive during hard times (Pandemic,etc.,) Happy to be a part of Agape Garden 🤗 Thank you 👍",
      },
];

const ParentSpeak = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  };

  const { img: profile, name, review } = arr[index];

  return (
    <section ref={ref}>
      <div className="parent-speak-container">
        <div className="parent-heading">
          <img
            src="./images/speakstrike.png"
            alt="speakstrike"
            id="speakstrike"
          />
          <h1>
            <span style={{ color: "black" }}>Parents </span>
            <span style={{ color: "#F55DAF" }}>Speak</span>
          </h1>
          <p style={{ paddingTop: "12px" }}>
            Read what parents love about our play school and how it positively
            impacts their children's growth!
          </p>
        </div>
        <div className="pscard-container">
          <button
            id="left-button"
            onClick={handlePrevious}
            aria-label="Previous review"
          >
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
            <a
                  href="https://www.google.com/maps/place/Agape+Garden+Play+School+%26+Day+Care+Centre/@12.9472833,80.1969516,17z/data=!4m8!3m7!1s0x3a525dcdf26b952d:0x126e2ec396280c4b!8m2!3d12.9472781!4d80.1995265!9m1!1b1!16s%2Fg%2F11c1mw2m_8?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="checkout">Checkout</button>
                </a>
          </div>
          <button
            id="right-button"
            onClick={handleNext}
            aria-label="Next review"
          >
            <img src="./images/right.png" alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
});

export default ParentSpeak;
