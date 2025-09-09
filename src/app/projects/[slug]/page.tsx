"use client";

import React from "react";
import "../project.css";
import { projects } from "@/data/projectsData";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Z from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const contactFormSchema = Z.object({
  name: Z.string().nonempty("Name is required"),
  email: Z.string().email("Invalid email").nonempty("Email is required"),
  subject: Z.string().nonempty("Subject is required"),
  message: Z.string().nonempty("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type ContactFormData = Z.infer<typeof contactFormSchema>;

function Page() {

    
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  // ✅ Submit Handler with EmailJS
  const onSubmit = async (data: ContactFormData) => {
    
    setLoading(true);
    try {
      const payload = {
        name: data.name,
        to_name: "Full Stack Developer",
        message: data.message,
        email: data.email,
        title: data.subject,
      };

      const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!;

      await emailjs.send(serviceID, templateID, payload, publicKey);



      toast.success("Thank you! Your submission has been received!");
      reset(initialValues);
    } catch (error) {
      toast.error("Failed to send message, please try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <section id="projects" className="body-case-studies h-screen">
      {/* Navbar Section */}
      <header id="Header" className="navbar w-nav">
        <div className="navbar w-container">
          <a href="/" className="brand w-nav-brand" aria-label="home">
            <h1 className="logo">Ankit Rathore</h1>
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a
              href="/"
              aria-current="page"
              className="nav-link onwhite w-nav-link w--current"
            >
              Home
            </a>
            <a href="/resume" className="nav-link onwhite w-nav-link">
              Resume
            </a>
            <a href="#Footer" className="nav-link cta onwhite w-nav-link">
              Get In Touch
            </a>
          </nav>
          <button
            className="menu-button onwhite w-nav-button"
            aria-label="menu"
          >
            <div className="icon w-icon-nav-menu"></div>
          </button>
        </div>
      </header>

      {/* Projects Section */}
      

      {/* Footer Section */}
      <footer id="Footer" className="footer-charcoal">
        <div className="container form-container w-container">
          <div className="div-block-10">
            <div className="get-in-touch">
              <h2 className="heading-25">Get in Touch</h2>
              <p className="paragraph-5">
                Currently open to mentorship opportunities, freelance, and
                remote brand and web roles on LGBTQ+ inclusive design teams
              </p>
            </div>

            {/* Contact Form */}
            <div className="form-block-charcoal dark-mode w-form">
              <form onSubmit={handleSubmit(onSubmit)} id="email-form" name="email-form" className="form">
                <div className="form-fields">
                  <input
                    className="form-field dark-mode w-input"
                     {...register("name")}
                    placeholder="Name"
                    type="text"
                    required
                  />
                  <input
                    className="form-field dark-mode w-input"
                    {...register("email")}
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    className="form-field dark-mode w-input"
                   {...register("subject")}
                     placeholder="What’s this about?"
                    type="text"
                    required
                  />
                  <input
                    className="form-field dark-mode hcih w-input"
                    {...register("message")}  
                    placeholder="How Can I Help?"
                    type="text"
                    required
                  />
                </div>
                <button type="submit" className="submit-button dark w-button">
                  Submit
                </button>
              </form>
             
              <div className="error-message w-form-fail">
                <div className="text-block-3">
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sword Animation */}
          <motion.div
            className="sword"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://cdn.prod.website-files.com/62acc17f0bea707cb5017f40/62d44dfab7f9bc59f734ad64_navy%20sword.svg"
              // src={"/fsw.png"}
              loading="lazy"
              alt=""
              className="image-5"
            />
          </motion.div>
        </div>
        {/* Social Links */}
        <div className="container form-container w-container">
          <div className="follow-along">
            <h2 className="heading-24">Follow Along</h2>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/ankit-rathore-417ab4280"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-outline white w-inline-block"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
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
              <a
                href="https://www.instagram.com/ankit.rathore__?igsh=YmtqYzM2YnAxbzE2"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-outline white w-inline-block"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide social-link-image lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              </a>
              <a
                href="https://github.com/Ankitrathore2006"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-outline white w-inline-block"
              >
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
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
            </div>
          </div>
          <div className="back-to-top">
            <a href="#Header" className="link white submit-button">
              back to top ^
            </a>
          </div>
          <div className="copywright dark-mode">
            © {new Date().getFullYear()} Ankit Rathore
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Page;
