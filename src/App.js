import React,{useRef, useEffect} from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

//styling
import './App.scss';

// images
import arrow from './images/arrow-right.svg';
import imgBoy from './images/boy.webp';
import imgGirl from './images/girl.webp';



function App() {

  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({delay:.8});


  useEffect(()=>{
    // Create a vriable for the images

    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // Content Variables

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;

    const contentP = content.children[1];
    const contentButton = content.children[2];

    // Removing initial flash
    TweenMax.to(app, 0, { css: {visibility: 'visible'}})

    // Images Animation
    tl.from(girlImage, 1.2, {y:1280, ease: Power3.easeOut}, 'start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    tl.from(boyImage, 1.2, {y:-1280, ease: Power3.easeOut}, .2)
    .from(boyImage.lastElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      x:100,
      y:44,
      ease: Power3.easeOut,
      delay:.5
    }, .15, 'start')
    .from(contentP, 1, {y:20, opacity:0, ease:Power3.easeOut},1.4)
    .from(contentButton, 1, {y:20, x:-50, opacity:0, ease:Power3.easeOut},1.6)


  },[tl])

  return (
    <div className="hero" ref={ el => app = el }>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={ el => content = el }>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviour.</div>
                </div>
              </h1>
              <p>Better treats serious cardiometabolic diseases to transform lives and reduce healthcare utilization through the use of digital therapeiutics.</p>
              <div className="btn-row">
                <button className="explore-button">Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        
          <div className="hero-images">
            <div className="hero-images-inner" ref={ el => images = el }>
              <div className="hero-image boy">
                <img src={imgBoy} alt="first" />
              </div>
              <div className="hero-image girl">
                <img src={imgGirl} alt="second" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
