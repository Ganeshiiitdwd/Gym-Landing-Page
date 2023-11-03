import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import background_img from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calorie from "../../assets/calories.png";
import { motion} from "framer-motion";
import NumberCounter from 'number-counter';
function Main() {
  const transition={type:'spring',duration:3}
 //making animation responsive
 const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="main">
      <div className="blur blur-main"></div>
      <div className="left-h">
        <Header />
        <div className="ad">
          <motion.div
          initial={{left:mobile?"175px":"238px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>The Best fitness clud in the town</span>
        </div>
        {/* hero heading */}
        <div className="main-heading">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="small-text">
            <span>
              In here we will help you to shape and build your ideal live up
              your life to fullest
            </span>{" "}
          </div>
        </div>
        {/* fihures i.e data */}
        <div className="figure">
          <div>
          <span> <NumberCounter end={140} start={50} preFix='+' delay='3'/></span> 
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={678} preFix='+' delay='2'/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={12} preFix='+' delay='4'/></span>
            <span>fitness progress</span>
          </div>
        </div>
        {/* main buttons */}
        <div className="main-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div className="heart-rate"
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        >
          <img src={heart} alt=""></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero img */}
        <img src={hero_image} className="hero-img" alt=""></img>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={background_img} className="hero-background" alt=""></motion.img>
        {/* calorie */}
        <motion.div className="calorie"
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
         transition={transition}
         
        >
          <img src={calorie} alt=""></img>
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
