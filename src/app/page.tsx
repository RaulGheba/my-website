"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const EducationRef = useRef(null);
  const ExperienceRef = useRef(null);

  const educationControls = useAnimation();
  const experienceControls = useAnimation();

  const isEducationInView = useInView(EducationRef, { threshold: 0.3 });
  const isExperienceInView = useInView(ExperienceRef, { threshold: 0.3 });

  const controls = useAnimation();

  useEffect(() => {
    if (isEducationInView) {
      educationControls.start({ opacity: 1, y: 0 });
    } else {
      educationControls.start({ opacity: 0, y: 50 });
    }
  }, [isEducationInView, educationControls]);

  useEffect(() => {
    if (isExperienceInView) {
      experienceControls.start({ opacity: 1, y: 0 });
    } else {
      experienceControls.start({ opacity: 0, y: 50 });
    }
  }, [isExperienceInView, experienceControls]);

  return (
    <main className="min-h-screen bg-gray-100 relative">
      {/* HERO SECTION */}
      <section
        className="relative h-[95vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-70" />

        {/* CONTENT */}
        <div className="relative z-10 text-white text-center max-w-3xl bg-opacity-40 rounded-xl p-8 mb-12">
          <h1 className="text-4xl font-bold font-[Poppins] mb-4 ">
            Hi, I'm Raul Gheba
          </h1>
          <p className="text-lg mb-6 font-[Poppins]">
            I'm a web and native front-end developer focused on building clean,
            responsive, and functional web and native applications.
          </p>
          <a
            href="/CV (1).pdf.pdf"
            download
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-[Poppins]"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/UO.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />

        <motion.div
          ref={EducationRef}
          animate={educationControls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white flex flex-col gap-2 text-center max-w-3xl bg-black/60  rounded-xl p-8"
        >
          <h2 className="text-3xl  mb-4 font-bold font-[Poppins]">Education</h2>
          <p className="text-lg font-[Poppins]">
            🎓 University of Oradea — Bachelor's degree in Information
            Technology
            <br />
          </p>
          <p className="font-[Poppins]">
            Learned several programming principles and fundamentals, practical
            skills, and most importantly, problem solving and critical thinking
            under pressure.
          </p>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/programming.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />

        <motion.div
          ref={ExperienceRef}
          animate={experienceControls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white flex flex-col gap-2 text-center max-w-3xl bg-black/60  rounded-xl p-8"
        >
          <h2 className="text-3xl  mb-4 font-bold font-[Poppins]">
            Experience
          </h2>
          <p className="text-lg font-[Poppins]">
            👨‍💻 I began my career with a 3-month React internship, where I built
            a solid foundation in front-end development. Since then, I’ve been
            working at Apidemia Tech for one year (and in present) as a
            front-end developer using React Native, building production-ready
            apps, integrating APIs, and learning from experienced engineers
            around me.
            <br />
          </p>
          <p className="text-lg font-[Poppins]">
            I'm especially happy to know my work leaves a mark, because I worked
            on an app that allows struggling students in school to connect with
            a mentor from their peers, to facilitate learning difficulties and
            growing.
            <br />
          </p>
        </motion.div>

        {/* LEARNING */}

        <section
          className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center px-4"
          style={{ backgroundImage: "url('/books.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white flex flex-col gap-4 text-center max-w-3xl bg-black/60 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold font-[Poppins]">
              Constant Learning
            </h2>
            <blockquote className="italic text-lg text-gray-300 font-[Poppins]">
              “True wisdom is knowing that you know nothing.”
              <br />— Socrates
            </blockquote>
            <p className="text-base text-gray-200 font-[Poppins] leading-relaxed">
              I’m always trying to improve — not just in code, but in how I
              think, communicate, and solve problems. Whether it’s debugging
              something tricky or learning something completely new, I stay
              curious and keep growing. Inside and outside of work.
            </p>
          </motion.div>
        </section>
      </section>
      {/* VOLUNTEERING */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/volunteering.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white flex flex-col gap-4 text-center max-w-3xl bg-black/60 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold font-[Poppins]">Volunteering</h2>

          <div className="text-lg font-[Poppins]">
            <p className="mb-4">
              💡 <strong>Mentor – Dalia's Book</strong> <em>(5 months)</em>
              <br />
              Taught programming and critical thinking to youth using Python.
              Helped students explore problem-solving through engaging and
              practical lessons.
            </p>

            <p>
              🎤 <strong>Volunteer – Unchain Fintech Festival</strong>
              <br />
              Welcomed guests and answered questions at the event, helping
              create a smooth and friendly experience for attendees.
            </p>
            <p>And much more...</p>
          </div>
        </motion.div>
      </section>
      {/* PERSONAL PROJECTS */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/project.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white flex flex-col gap-6 text-center max-w-3xl bg-black/60 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold font-[Poppins]">
            Personal Projects
          </h2>

          <div className="text-lg font-[Poppins] space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">🌍 WorldWise</h3>
              <p>
                A travel-tracking app that lets you mark cities you've visited
                on an interactive world map. Cities are saved locally so you can
                revisit your journey anytime.
                <br />
                <span className="text-sm text-gray-300">
                  Tech: React, Leaflet.js, CSS Modules
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">🏕️ The Wild Oasis</h3>
              <p>
                A full-featured admin interface for managing cabin rentals.
                Authentication, dashboards, booking flows, and cabin CRUD — all
                powered by Supabase on the backend.
                <br />
                <span className="text-sm text-gray-300">
                  Tech: React, Supabase, Styled Components
                </span>
              </p>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="mt-6">
            <a
              href="https://github.com/RaulGheba?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-[Poppins]"
            >
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
