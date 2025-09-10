"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function AboutMe({ id }: { id: string }) {
  const timeline = [
    {
      type: "work",
      title: "Web Developer",
      company: "IQpaths",
      date: "Nov 2024 – Present",
      description:
        "Built and optimized front-end interfaces with <strong>React.js</strong> & <strong>Tailwind</strong>. Integrated APIs, solved UX issues, and delivered two client projects with responsive design.",
    },
    {
      type: "internship",
      title: "Web Developer Intern",
      company: "PocketVender Tech Pvt. Ltd.",
      date: "May 2025 – Jul 2025",
      description:
        "Built <strong>MERN</strong> features, APIs, and enhanced UI/UX with <strong>Tailwind</strong> & <strong>Express.js</strong>.",
    },
    {
      type: "internship",
      title: "MERN Stack Developer Intern",
      company: "Ideal IT Techno Pvt. Ltd.",
      date: "Jun 2024 – Aug 2024",
      description:
        "Improved UI & backend with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>.",
    },
    {
      type: "work",
      title: "PHP Web Developer",
      company: "Dr. B. R. Ambedkar Polytechnic College",
      date: "Jul 2021 – Jul 2022",
      description:
        "Developed and debugged <strong>full-stack PHP apps</strong>. Improved UI and backend features with <strong>MySQL</strong> and <strong>AJAX</strong>.",
    },
    {
      type: "education",
      title: "B.Tech (Lateral), CSE",
      company: "Medi-Caps University",
      date: "2023 – 2026",
      description: "",
    },
    {
      type: "education",
      title: "Diploma, CSE",
      company: "Dr. Bhim Rao Ambedkar Polytechnic College, Gwalior",
      date: "2020 – 2023",
      description: "",
    },
  ];

  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* ABOUT ME SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-xl fredericka md:text-5xl font-bold text-[#430f44]">
            About <span className="text-[#ff4c75]">Me</span>
          </h2>
          <p className="mt-6 text-[17.2px] text-gray-400 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m <strong className="text-[#430f44] fredericka">Ankit Rathore</strong>, a{" "}
            <strong className="text-[#ff4c75]">Full-Stack Developer</strong>{" "}
            with 2+ years of experience in building scalable web applications
            using <strong className="text-[#430f44]">PHP</strong> and the{" "}
            <strong className="text-[#430f44]">MERN stack</strong>. I’ve
            delivered <strong className="text-[#ff4c75]">production-ready</strong> solutions
            for startups and educational institutions. My passion lies in{" "}
            <strong className="text-[#430f44]">automation</strong>,{" "}
            <strong className="text-[#430f44]">AI</strong>, and crafting{" "}
            <strong className="text-[#ff4c75]">user-focused designs</strong>.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#ff4c75] to-[#fef4fe] h-full rounded-full"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-8  flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-full md:w-1/2 relative">
                {/* ICON */}
                <div className="absolute -left-10 mx-13 top-4 md:-left-14 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#430f44] to-[#ff4c75] text-white shadow-lg ring-4 ring-white dark:ring-gray-900">
                  {item.type === "work" ? (
                    <Briefcase size={22} />
                  ) : item.type === "education" ? (
                    <GraduationCap size={22} />
                  ) : (
                    <Award size={22} />
                  )}
                </div>

                {/* CARD */}
                <div className="bg-white mx-9 md:mx-5 dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition duration-300">
                  <h3 className="text-[15px] ml-3 my-0 font-semibold text-[rgba(67,15,68,0.8)]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] ml-3 mb-0 text-[rgba(255,76,117,0.7)] font-medium">
                    {item.company} • {item.date}
                  </p>
                  <p
                    className="text-[9.5px] mt-1.5 m-0 text-gray-400 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
