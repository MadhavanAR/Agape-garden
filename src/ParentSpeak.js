export default function ParentSpeak() {
  return (
    <div className="parent-speak-container">
      <div className="heading">
        <h1>
          <span style={{ color: "black" }}>Parents </span>
          <span style={{ color: "#F55DAF" }}>Speak</span>
        </h1>
        <p>
          Read what parents love about our play school and how it positively
          impacts their children's growth!
        </p>
      </div>
      <div className="pscard-container">
        <button>
          <img src="./images/left.png" alt="iimg"></img>
        </button>
        <div className="review-box">
          <img src="./images/profile-pic.png" alt="profile" id="profile" />
          <div className="pscard">
            <h1>Arjun b</h1>
            <img src="./images/stars.png" alt="stars" />
            <img src="./images/qstart.png" alt="" />
           
            <img src="./images/qend.png" alt="" />
          </div>
        </div>
        <button>
          <img src="./images/right.png" alt="iimg"></img>
        </button>
      </div>
    </div>
  );
}
