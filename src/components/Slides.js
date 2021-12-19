// ReactComponent is not optional, it must be it

import tomato from "../SVG/tomato.png";
import lightbulb from "../SVG/lightbulb.png";
import sun from "../SVG/sun.png";
import study from "../SVG/study.png";
import knowledge from "../SVG/knowledge.png";
import clock from "../SVG/clock.png";


const slides = [
  (<div>
      <img id="tomato" src={tomato} alt="tomato"/>
    <h3>What is Time Blocking?</h3>
    <p>Working in time blocks is an effective strategy for using time wisely and achieving greater results. It helps you bring structure to your work process allows you to focus on one task at a time, limit distraction and procrastination. It is used by developers, designers, writers and students all around the world.</p>
  </div>),
  (<div>
    <h3>How does it work?</h3>
    <p>First choose a task that you need to complete.Eliminate all distraction and set timer for 25 mintes and work until it rings</p>
    <img id="lightbulb" src={lightbulb} alt="lightbulb"/>
  </div>),
  (<div>
    <h3>Stay focused, do your work</h3>
    <p>Give your work your undivided attention.
    The wold can wait 25 minutes for you to finish your tasks.</p>
    <img id="study" src={study} alt="study"/>
  </div>),
  (<div>
    <h3>Then take a break!</h3>
    <p>Take a short 5-minute break. Do some push-ups or take a breath of fresh air.
    this break is designed to let you regain your energy.</p>
    <img id="sun" src={sun} alt="sun"/>
  </div>),
  (<div>
    <h3>Repeat this cycle</h3>
    <p>Repeat this cycle four times and then take a long break. The more you do this, the more productive you will become as your body gets used to this method and rhythm.</p>
    <img id="knowledge" src={knowledge} alt="knowledge"/>
    </div>),
  (<div>
    <h3>What are the benefits?</h3>
    <p>By using this technique you will be able to produce great results. You Will stay fressh and as this cycle becomes
    natural to you, your ability to focus and work will improve</p>
    <img id="clock" src={clock} alt="clock"/>
    <button>start using flow timer now</button>
  </div>)
];

export default function Slides() {
 return (
   <div className="slides">
     {slides[0]}
   </div>
 )
}