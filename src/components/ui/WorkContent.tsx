import React from "react";

function WorkContent({ id }: { id: string }) {
  return (
    <section id={id} className="work section color">
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
            <div className="figure-right">
              <img
                src="/desk.png"
                width="301"
                alt="Developer workspace"
                sizes="(max-width: 479px) 67vw, (max-width: 767px) 301px, (max-width: 991px) 26vw, 301px"
              />
            </div>

            <h4>Things I’ve built & worked on</h4>

            <p>
              I build modern, scalable web applications using React, Node.js,
              MongoDB and other technologies across the full stack.
            </p>

            <p>
              From production-ready features and responsive interfaces to
              AI-powered applications and automation, I enjoy turning ideas
              into useful digital products.
            </p>

            {/* Projects Link */}
            <a
              href="/projects"
              className="projects-link"
              style={{
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              View all projects →
            </a>

            <div
              style={{
                transform:
                  "translate3d(203%, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
                transformStyle: "preserve-3d",
              }}
              className="animation-overlay-left"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkContent;