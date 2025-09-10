"use client";

import { useEffect, useRef, useState } from "react";
import Content from "@/components/ui/Content";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";
import TextScroll from "@/components/ui/TextScroll";
import { Briefcase, House, Info, Menu, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "@/components/ui/Contact";
import AboutMe from "@/components/ui/AboutMe";
import "./globals.css";
import path from "path/win32";

function useTiltToMouse() {
  useEffect(() => {
    const triggers = document.querySelectorAll('[data-tilt-to-mouse="1"]');
    const listeners: {
      trigger: Element;
      fn: (e: DeviceOrientationEvent) => void;
    }[] = [];

    triggers.forEach((trigger) => {
      const maxX = trigger.clientWidth;
      const maxY = trigger.clientHeight;
      const centerX = maxX / 2;
      const centerY = maxY / 2;

      let clientX = centerX;
      let clientY = centerY;

      const X_SENSITIVITY = parseFloat(
        trigger.getAttribute("data-tilt-to-mouse-x-sensitivity") || "1"
      );
      const Y_SENSITIVITY = parseFloat(
        trigger.getAttribute("data-tilt-to-mouse-y-sensitivity") || "1.6"
      );
      const X_OFFSET = parseFloat(
        trigger.getAttribute("data-tilt-to-mouse-x-offset") || "0"
      );
      const Y_OFFSET = parseFloat(
        trigger.getAttribute("data-tilt-to-mouse-y-offset") || "0"
      );

      const handleOrientation = (event: DeviceOrientationEvent) => {
        if (event.beta == null || event.gamma == null) return;

        const y = event.beta;
        const x = event.gamma;

        clientX = centerX + maxX * (x / 90 + X_OFFSET) * X_SENSITIVITY;
        clientY = centerY + maxY * (y / 180 + Y_OFFSET) * Y_SENSITIVITY;

        trigger.dispatchEvent(
          new MouseEvent("mousemove", {
            bubbles: true,
            cancelable: false,
            clientX,
            clientY,
            view: window,
          })
        );
      };

      window.addEventListener("deviceorientation", handleOrientation);
      listeners.push({ trigger, fn: handleOrientation });
    });

    return () => {
      listeners.forEach(({ fn }) => {
        window.removeEventListener("deviceorientation", fn);
      });
    };
  }, []);
}

function Page() {
  useTiltToMouse();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shrinkSidebar, setShrinkSidebar] = useState(false);
  const [overlayHeight, setOverlayHeight] = useState("50vh");
  const [navOpen, setNavOpen] = useState(false);

  const [activeSection, setActiveSection] = useState<string>("home");

useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      let mostVisibleSection: { id: string; ratio: number } = {
        id: activeSection,
        ratio: 0,
      };

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > mostVisibleSection.ratio) {
          mostVisibleSection = {
            id: entry.target.id,
            ratio: entry.intersectionRatio,
          };
        }
      });

      if (mostVisibleSection.id !== activeSection) {
        setActiveSection(mostVisibleSection.id);
      }
    },
    {
      threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0.0 → 1.0
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, [activeSection]);



  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(
        Math.max((windowHeight - rect.top) / rect.height, 0),
        1
      );

      // Update overlay height (shrink gradually)
      const newHeight = `${50 - scrollProgress * 46}vh`; // 50vh → 4vh
      setOverlayHeight(newHeight);

      // Shrink sidebar at 80% scroll
      setShrinkSidebar(scrollProgress > 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      <section id="home" ref={sectionRef} className="">
        {/* Navigation */}
        {/* Navigation */}
        <div>
          {/* Desktop Sidebar (unchanged) */}
          <div
            className="navigation-wrap w-hidden-tiny h-screen"
            style={{
              width: shrinkSidebar ? "80px" : "185px",
              transition: "width 500ms ease-in-out",
              willChange: "width",
            }}
          >
            <img
              src="/2-removebg-preview.png"
              alt=""
              className={`logo-img ${
                shrinkSidebar ? "!w-100%" : ""
              } w-hidden-tiny`}
            />

            {/* Scroll Down Arrow */}
            <a
              href="#"
              className="arrows-wrap w-hidden-tiny w-inline-block"
              style={{ willChange: "opacity", opacity: 1 }}
            >
              <div className="arrow-half-wrap">
                <div className="arros-fontawesome"></div>
                <div
                  className="arrow-color-overlay white"
                  style={{ transform: "translate3d(0,0,0)" }}
                ></div>
              </div>
              <div className="arrow-half-wrap">
                <div className="arros-fontawesome light"></div>
                <div
                  className="arrow-color-overlay"
                  style={{ transform: "translate3d(0,0,0)" }}
                ></div>
              </div>
            </a>

            {/* Sidebar */}
            <div className="side-navbar w-nav">
              <div className="side-nav-container w-container">
                {/* Nav Button */}
                <div
                  className="menu-button-2 "
                  aria-label="menu"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShrinkSidebar(!shrinkSidebar)}
                >
                  <Menu className="icon w-hidden-tiny w-icon-nav-menu"></Menu>
                </div>

                {/* Overlay shrink */}
                <motion.div
                  className="block-overlay w-hidden-tiny"
                  animate={{ height: overlayHeight }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Nav Links */}
                <nav
                  role="navigation"
                  className={`side-nav-menu w-nav-menu transition-all duration-500 ${
                    navOpen ? "block" : "hidden"
                  }`}
                >
                  {shrinkSidebar ? (
                    <>
                      <a
                        href="/"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "home" ? "w--current" : ""
                        }`}
                        title="Home"
                      >
                        <House />
                      </a>
                      <a
                        href="/projects"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "project" ? "w--current" : ""
                        }`}
                        title="My Works"
                      >
                        <Briefcase />
                      </a>
                      <a
                        href="#about"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "about" ? "w--current" : ""
                        }`}
                        title="About"
                      >
                        <Info />
                      </a>
                      <a
                        href="#contact"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "contact" ? "w--current" : ""
                        }`}
                        title="Contact"
                      >
                        <Phone />
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="/"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "home" ? "w--current" : ""
                        }`}
                      >
                        Home
                      </a>
                      <a
                        href="/projects"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "projects" ? "w--current" : ""
                        }`}
                      >
                        My works
                      </a>
                      <a
                        href="#about"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "about" ? "w--current" : ""
                        }`}
                      >
                        About
                      </a>
                      <a
                        href="#contact"
                        className={`side-nav-link w-nav-link ${
                          activeSection === "contact" ? "w--current" : ""
                        }`}
                      >
                        Contact
                      </a>
                    </>
                  )}
                </nav>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`links-wrap mob-land ${
                shrinkSidebar ? "flex-col" : "flex-row"
              } transition-all duration-500`}
            >
              <a
                href="https://www.instagram.com/ankit.rathore__?igsh=YmtqYzM2YnAxbzE2"
                target="_blank"
                className="social-btn w-inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://github.com/Ankitrathore2006"
                target="_blank"
                className="social-btn w-inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github-icon lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-rathore-417ab4280"
                target="_blank"
                className="social-btn w w-inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#430f44] shadow-md z-50 flex items-center justify-center px-4">
            {/* Hamburger */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 w-[6rem] h-[5rem] bg-[#ff6348] flex items-center justify-center overflow-hidden"
            >
              <img
                src="/2-removebg-preview.png"
                alt="logo"
                className="max-w-full max-h-full object-contain"
              />
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {navOpen && (
              <motion.div
                initial={{ y: 100, opacity: 0 }} // start below screen
                animate={{ y: 0, opacity: 1 }} // slide into place
                exit={{ y: 100, opacity: 0 }} // slide out when closing
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden z-100000 fixed bottom-20 left-0  w-full bg-[#430f44] shadow-lg z-40 flex flex-col space-y-4 px-6 pb-40 py-6 rounded-t-2xl"
              >
                {/* Nav Links */}
                <>
                  <a
                    href="/"
                    className={`side-nav-link w-nav-link ${
                      activeSection === "home" ? "w--current" : ""
                    }`}
                  >
                    Home
                  </a>
                  <a
                    href="/projects"
                    className={`side-nav-link w-nav-link ${
                      activeSection === "projects" ? "w--current" : ""
                    }`}
                  >
                    My works
                  </a>
                  <a
                    href="#about"
                    className={`side-nav-link w-nav-link ${
                      activeSection === "about" ? "w--current" : ""
                    }`}
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className={`side-nav-link w-nav-link ${
                      activeSection === "contact" ? "w--current" : ""
                    }`}
                  >
                    Contact
                  </a>
                </>

                {/* Social Links */}
                <div className="links-wrap mob-land pb-12">
                  <a
                    href="https://www.instagram.com/ankit.rathore__?igsh=YmtqYzM2YnAxbzE2"
                    target="_blank"
                    className="social-btn w-inline-block"
                  >
                    {/* Instagram Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Ankitrathore2006"
                    target="_blank"
                    className="social-btn w-inline-block"
                  >
                    {/* GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankit-rathore-417ab4280"
                    target="_blank"
                    className="social-btn w-inline-block"
                  >
                    {/* LinkedIn Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero Section */}
        <Hero />

        <TextScroll />

        {/* Content */}
        <Content  />
      </section>

      {/* About Me Section */}
      <AboutMe id="about" />

      {/* Contact Section */}
      <Contact id="contact" />

      {/* footer */}
      <Footer />
    </>
  );
}

export default Page;
