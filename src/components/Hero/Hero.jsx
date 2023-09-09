import React from "react";
import {HiLocationMarker} from 'react-icons/hi'
import "./Hero.css";
import CountUp from "react-countup"
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container">
        {/* left side.................................................................... */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-cirlce" />
            <h1>
              Discover <br /> Most Subitable <br />
              Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>

          </div>


          <div className="flexCenter search-bar "> 
          <HiLocationMarker color="var(--blue)" size={25} />
          <input type="text" />
          <button className="button">Search</button>


          </div>
{/* premium products................................................ */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={8800} end={9000}  duration={4}/>
                    <span>+</span>
                </span>
               
                <span className="secondaryText">
                    Premius Producs
                </span>

            </div>

          
{/* happy customers................................................ */}

          {/* <div className="flexColumn stat"> */}
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1950} end={2000}  duration={4}/>
                    <span>+</span>
                </span>
               
                <span className="secondaryText">
                    Happy Customers
                </span>

            </div>

          {/* </div> */}
{/* ....Award Winning............................................ */}

          {/* <div className="flexColumn stat"> */}
            <div className="flexColCenter stat">
                <span>
                    <CountUp end={28} />
                    <span>+</span>
                </span>
               
                <span className="secondaryText">
                    Award Winning
                </span>

            </div>

          {/* </div> */}

          </div>


        </div>
        {/* right side.................................................................... */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
