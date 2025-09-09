import React from 'react'

function Content() {
  return (
    <main id="content" className="section color">
        <div className="texture-overlay"></div>
        <div className="container-medium w-container">
          <div className="animation-wrapper">
            {/* Left Intro */}
            <div
              data-w-id="e2b6ec92-6089-848e-fcb0-ec7e4c84bf4c"
              style={{
                transform:
                  "translate3d(0%, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
                transformStyle: "preserve-3d",
              }}
              className="about-intro w-clearfix"
            >
              <div className="figure-left">
                <img
                  src="https://cdn.prod.website-files.com/573b8919b03d8ea144ce01b3/5a8ccd0baee9140001943892_raleigh-skyline-mysketch.jpg"
                  width="301"
                  alt="skyline"
                  sizes="(max-width: 479px) 67vw, (max-width: 767px) 301px, (max-width: 991px) 26vw, 301px"
                  srcSet="
                    https://assets.website-files.com/573b8919b03d8ea144ce01b3/5a8ccd0baee9140001943892_raleigh-skyline-mysketch-p-500.jpeg 500w,
                    https://assets.website-files.com/573b8919b03d8ea144ce01b3/5a8ccd0baee9140001943892_raleigh-skyline-mysketch-p-800.jpeg 800w,
                    https://assets.website-files.com/573b8919b03d8ea144ce01b3/5a8ccd0baee9140001943892_raleigh-skyline-mysketch.jpg 852w
                  "
                />
                <div className="texture-overlay"></div>
              </div>
              <h4>Welcome to my digital world!</h4>
              <p>
                Since I learned Webdesign and development in 2021 I discovered a whole new world and found many
                awesome people around. Some of them became my friends, some of them are my customers.
              </p>
              <p>
                There are people who I am learning from and also people who I helped to learn. It
                became a new chapter of my life-book and I am trying to make it beautiful.
              </p>
              <div
                style={{
                  transform:
                    "translate3d(203%, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="animation-overlay-left"
              ></div>
            </div>

            {/* Right Intro */}
           
          </div>
        </div>
      </main>
  )
}

export default Content
