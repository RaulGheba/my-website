"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FEATURED_PROJECT = {
  title: "Job Application Tracker",
  emoji: "💼",
  description:
    "A full-stack app to track and manage job applications through every stage of the hiring process. Built end-to-end — from database design to a polished React frontend — with real-time state management via React Context.",
  tech: ["React", "React Context", "Node.js", "Express", "MongoDB"],
  url: "https://job-application-tracker-rust-delta.vercel.app/",
};

const PROJECTS = [
  {
    title: "WorldWise",
    emoji: "🌍",
    description:
      "A travel-tracking app that lets you mark cities you've visited on an interactive world map. Cities are saved locally so you can revisit your journey anytime.",
    tech: ["React", "Leaflet.js", "CSS Modules"],
    url: "https://world-wise-c04wdlgum-rauls-projects-05248210.vercel.app/",
  },
];

const NAV_LINKS = [
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Volunteering", href: "#volunteering" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const el = document.documentElement;
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0d1117] text-white font-[Poppins]">
      {/* SCROLL PROGRESS */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-blue-500 transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d1117]/95 shadow-xl backdrop-blur-sm border-b border-gray-800"
            : "bg-[#0d1117]/80 border-b border-gray-800/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className="text-blue-400 font-bold tracking-wide text-lg">
            rg.dev
          </span>
          <div className="flex gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0d1117]" />
        <div className="relative z-10 text-center max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4"
          >
            Front-End Developer · React &amp; React Native
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl font-bold mb-6 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-400">Raul Gheba</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg mb-6 leading-relaxed"
          >
            I build polished, production-ready interfaces with React and React
            Native — 1.5 years of real-world shipping, not just side projects.
            I care about clean code, fast UIs, and products that actually work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {["React", "React Native", "TypeScript", "Node.js", "REST APIs"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full"
              >
                {s}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors duration-200 font-medium"
            >
              See My Work
            </a>
            <a
              href="/CV (1).pdf.pdf"
              download
              className="px-6 py-2.5 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white text-sm rounded-lg transition-colors duration-200 font-medium"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/RaulGheba"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white text-sm rounded-lg transition-colors duration-200 font-medium"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-16 px-6 border-y border-gray-800/60 bg-[#0d1117]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-10"
          >
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold">What I Work With</h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              {
                label: "Frontend",
                items: ["JavaScript", "React", "React Native", "Redux", "Next.js", "Tailwind CSS"],
              },
              {
                label: "Backend & APIs",
                items: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
              },
              {
                label: "Tooling & Cloud",
                items: ["AWS"],
              },
            ].map((group) => (
              <div
                key={group.label}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
              >
                <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT / EDUCATION */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-video"
          >
            <img
              src="/UO.jpg"
              alt="University of Oradea"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <span className="text-white font-medium">
                University of Oradea
              </span>{" "}
              — Bachelor&apos;s degree in Information Technology
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Built a strong foundation in software engineering — algorithms,
              systems, and applied development. But most of what I know came
              from building real things outside of class, driven by genuine
              curiosity and the desire to ship something that works.
            </p>
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-gray-400 italic text-sm leading-relaxed">
                &ldquo;True wisdom is knowing that you know nothing.&rdquo;
              </p>
              <p className="text-gray-500 text-xs mt-1">— Socrates</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28 px-6 bg-[#111827]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Career
            </p>
            <h2 className="text-3xl font-bold">Experience</h2>
          </motion.div>

          <div className="relative border-l border-gray-700 pl-10 space-y-12">
            {/* Job 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <span className="absolute -left-[2.85rem] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#111827]" />
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">
                Until Feb 2026
              </p>
              <h3 className="text-lg font-semibold">
                Front-End Developer —{" "}
                <span className="text-blue-400">Apidemia Tech</span>
              </h3>
              <p className="text-sm text-gray-400 mt-1 mb-3">
                React Native · 1.5 years
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Shipped production React Native features used by real users —
                building screens, wiring REST APIs, handling state, and
                iterating fast with a senior engineering team. Worked on a
                mentorship platform that pairs struggling students with peers,
                translating product requirements directly into working mobile UI.
              </p>
            </motion.div>

            {/* Job 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <span className="absolute -left-[2.85rem] top-1.5 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#111827]" />
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">
                Earlier
              </p>
              <h3 className="text-lg font-semibold">React Intern</h3>
              <p className="text-sm text-gray-400 mt-1 mb-3">
                React · 3 months
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Built a solid foundation in front-end development during a
                3-month React internship, establishing core skills in component
                architecture and UI development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Work
            </p>
            <h2 className="text-3xl font-bold">Personal Projects</h2>
          </motion.div>

          {/* Featured project */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-6 bg-gradient-to-br from-blue-600/20 to-blue-900/10 border border-blue-500/40 rounded-2xl p-8 hover:border-blue-400/70 transition-colors duration-300"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{FEATURED_PROJECT.emoji}</span>
                <h3 className="text-xl font-bold">{FEATURED_PROJECT.title}</h3>
                <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-medium">
                  Featured
                </span>
              </div>
              <a
                href={FEATURED_PROJECT.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium shrink-0"
              >
                Live Demo →
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {FEATURED_PROJECT.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {FEATURED_PROJECT.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium shrink-0"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-blue-600/15 text-blue-400 text-xs rounded-full border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-500 text-sm mb-4">
              This list keeps growing — more projects on the way.
            </p>
            <a
              href="https://github.com/RaulGheba?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white text-sm rounded-lg transition-colors duration-200"
            >
              View all on GitHub →
            </a>
          </motion.div>
        </div>
      </section>

      {/* VOLUNTEERING */}
      <section id="volunteering" className="py-28 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Community
            </p>
            <h2 className="text-3xl font-bold">Volunteering</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#0d1117] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300"
            >
              <span className="text-2xl mb-4 block">💡</span>
              <h3 className="text-lg font-semibold mb-1">
                Mentor — Dalia&apos;s Book
              </h3>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">
                5 months
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Taught programming and critical thinking to youth using Python.
                Helped students explore problem-solving through engaging and
                practical lessons.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#0d1117] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300"
            >
              <span className="text-2xl mb-4 block">🎤</span>
              <h3 className="text-lg font-semibold mb-1">
                Volunteer — Unchain Fintech Festival
              </h3>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">
                Event
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Welcomed guests and answered questions at the event, helping
                create a smooth and friendly experience for attendees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>
            Built by{" "}
            <span className="text-gray-300 font-medium">Raul Gheba</span>
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/RaulGheba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="/CV (1).pdf.pdf"
              download
              className="hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
