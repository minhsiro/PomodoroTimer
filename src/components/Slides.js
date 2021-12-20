// ReactComponent is not optional when using svg, it must be it
import tomato from "../SVG/tomato.png";
import lightbulb from "../SVG/lightbulb.png";
import sun from "../SVG/sun.png";
import study from "../SVG/study.png";
import knowledge from "../SVG/knowledge.png";
import clock from "../SVG/clock.png";
import * as React from "react";

export default function Slides(props) {
  //const [slideIndex,setIndex] = React.useState(0);
  const isDown = React.useRef(false);
  const startX = React.useRef(null);
  const scrollLeft = React.useRef(null); // extremely important
    /* use createRef to create a reference to parent div, so that you can call ref.scrollLeft just as when doing with vanilla Js: getElementById */
  const ref = React.createRef();

  // handle drag and scroll
  const handleMouseDown = (event) => {
    isDown.current = true;
    startX.current = event.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  }

  // handle drag and scroll
  const handleMouseLeave = (event) => {
    isDown.current = false;
  }

  // handle drag and scroll
  const handleMouseUp = (event) => {
    isDown.current = false;
  }

  // handle drag and scroll
  const handleMouseMove = (event) => {
    if(!isDown.current) return;
    event.preventDefault();
    const x= event.pageX - ref.current.offsetLeft;
    const walk  = x - startX.current;
    ref.current.scrollLeft = scrollLeft.current - walk;
    console.log(ref.current.scrollLeft);
  }

  const handleUp = () => {
    ref.current.scrollLeft += 400;
  }

 return (
   <div className={`slides ${props.isInstructionShow ? "visible" : "invisible"}`} key={Math.random()}>
    {/* {slides[slideIndex]} */}
    <div className="slide-grid" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} ref={ref}>
      <div className={`slide`}>
        <img id="tomato" src={tomato} alt="tomato"/>
        <p className="slide-title">What is Time Blocking?</p>
        <p>Working in time blocks is an effective strategy for using time wisely and achieving greater results. It helps you bring structure to your work process allows you to focus on one task at a time, limit distraction and procrastination. It is used by developers, designers, writers and students all around the world.</p>
    </div>
    <div className={`slide`}>
      <p className="slide-title">How does it work?</p>
      <p>First choose a task that you need to complete.Eliminate all distraction and set timer for 25 mintes and work until it rings</p>
      <img id="lightbulb" src={lightbulb} alt="lightbulb"/>
    </div>
      <div className={`slide`}>
      <p className="slide-title">Stay focused, do your work</p>
      <p>Give your work your undivided attention.
      The wold can wait 25 minutes for you to finish your tasks.</p>
      <img id="study" src={study} alt="study"/>
    </div>
      <div className={`slide`}>
      <p className="slide-title">Then take a break!</p>
      <p>Take a short 5-minute break. Do some push-ups or take a breath of fresh air.
      this break is designed to let you regain your energy.</p>
      <img id="sun" src={sun} alt="sun"/>
    </div>
    <div className={`slide`}>
      <p className="slide-title">Repeat this cycle</p>
      <p>Repeat this cycle four times and then take a long break. The more you do this, the more productive you will become as your body gets used to this method and rhythm.</p>
      <img id="knowledge" src={knowledge} alt="knowledge"/>
      </div>
    <div className={`slide`}>
      <p className="slide-title">What are the benefits?</p>
      <p>By using this technique you will be able to produce great results. You Will stay fressh and as this cycle becomes
      natural to you, your ability to focus and work will improve</p>
      <img id="clock" src={clock} alt="clock"/>
      <button onClick={() => props.toggleInstruction()}>start using flow timer now</button>
    </div>
  </div>
    <button className="move-btn" onClick={() => handleUp()}>{">"}</button>
    <button className="close" onClick={() => props.toggleInstruction()}>X</button>
   </div>
 )
}

// const slides = [
//   (<div className={`slide`} >
//       <img id="tomato" src={tomato} alt="tomato"/>
//     <p className="slide-title">What is Time Blocking?</p>
//     <p>Working in time blocks is an effective strategy for using time wisely and achieving greater results. It helps you bring structure to your work process allows you to focus on one task at a time, limit distraction and procrastination. It is used by developers, designers, writers and students all around the world.</p>
//   </div>),
//   (<div className={`slide`}>
//     <p className="slide-title">How does it work?</p>
//     <p>First choose a task that you need to complete.Eliminate all distraction and set timer for 25 mintes and work until it rings</p>
//     <img id="lightbulb" src={lightbulb} alt="lightbulb"/>
//   </div>),
//   (<div className={`slide`}>
//     <p className="slide-title">Stay focused, do your work</p>
//     <p>Give your work your undivided attention.
//     The wold can wait 25 minutes for you to finish your tasks.</p>
//     <img id="study" src={study} alt="study"/>
//   </div>),
//   (<div className={`slide`}>
//     <p className="slide-title">Then take a break!</p>
//     <p>Take a short 5-minute break. Do some push-ups or take a breath of fresh air.
//     this break is designed to let you regain your energy.</p>
//     <img id="sun" src={sun} alt="sun"/>
//   </div>),
//   (<div className={`slide`}>
//     <p className="slide-title">Repeat this cycle</p>
//     <p>Repeat this cycle four times and then take a long break. The more you do this, the more productive you will become as your body gets used to this method and rhythm.</p>
//     <img id="knowledge" src={knowledge} alt="knowledge"/>
//     </div>),
//   (<div className={`slide`}>
//     <p className="slide-title">What are the benefits?</p>
//     <p>By using this technique you will be able to produce great results. You Will stay fressh and as this cycle becomes
//     natural to you, your ability to focus and work will improve</p>
//     <img id="clock" src={clock} alt="clock"/>
//     <button onClick={() => props.toggleInstruction()}>start using flow timer now</button>
//   </div>)
// ];