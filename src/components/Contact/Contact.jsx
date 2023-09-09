import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import './Contact.css'

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className=" padding innerWidth flexCenter c-container">
        {/* left sdie */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            we always ready tohelp by providing the best services for you. we
            bleeive a good <br />
            place to live cna make your life better
          </span>
        

        <div className="flexColStart contactModes">
          {/* /////////// first row */}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">

             
              <div className="flexCenter icon">
                <MdCall size={25} />
              </div>

              <div className="flexColStart detail">
                <span  className="primaryText">Call</span>
                <span className="secondaryText">+252 613807887</span>
              </div>
            </div>

            <div className="flexCenter button">
              Call now

            </div>


          </div>
  {/*                      second mode */}
          <div className="flexColCenter mode">
              <div className="flexStart">

             
              <div className="flexCenter icon">
                <BsFillChatDotsFill size={25} />
              </div>

              <div className="flexColStart detail">
                <span  className="primaryText">Chat</span>
                <span className="secondaryText">+252 613807887</span>
              </div>
            </div>

            <div className="flexCenter button">
              Chat now

            </div>


          </div>
          </div>
{/* ////////////////////////// second row */}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">

             
              <div className="flexCenter icon">
                <BsFillChatDotsFill size={25} />
              </div>

              <div className="flexColStart detail">
                <span  className="primaryText">Video Call</span>
                <span className="secondaryText">+252 613807887</span>
              </div>
            </div>

            <div className="flexCenter button">
              Call now

            </div>


          </div>
  {/*                      fourth mode */}
          <div className="flexColCenter mode">
              <div className="flexStart">

             
              <div className="flexCenter icon">
                <HiChatBubbleBottomCenter size={25} />
              </div>

              <div className="flexColStart detail">
                <span  className="primaryText">Message</span>
                <span className="secondaryText">+252 613807887</span>
              </div>
            </div>

            <div className="flexCenter button">
              Message now

            </div>


          </div>
          </div>
          
        </div>
        </div>
        {/* right side */}
        <div className="c-right flexCenter">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
