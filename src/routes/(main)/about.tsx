import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import { SectionTitle, Paragraph } from "../../components/ui/typography";

export const Route = createFileRoute("/(main)/about")({
  component: AboutPage,
});

function AboutPage() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description:
        "Leading the frontend team, architectural decision making, and mentoring junior developers.",
      logo: "https://ui-avatars.com/api/?name=TC&background=random",
      url: "https://example.com",
    },
    {
      role: "Frontend Developer",
      company: "Startup Inc",
      period: "2019 - 2021",
      description:
        "Built key features for the main product using React and TypeScript.",
      logo: "https://ui-avatars.com/api/?name=SI&background=random",
      url: "https://example.com",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "TanStack",
    "TailwindCSS",
    "Node.js",
    "PostgreSQL",
    "Framer Motion",
  ];

  return (
    <div className="flex flex-col gap-16 pb-20 max-w-4xl">
      {/* Header / Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <SectionTitle>ABOUT ME</SectionTitle>
        <Paragraph>
          I'm Barry Song, a developer based in Digital World. I specialize in
          the React ecosystem and enjoy solving complex problems with simple,
          elegant solutions. When I'm not coding, you can find me exploring new
          technologies or contributing to open source.
        </Paragraph>
      </motion.div>

      <div className="w-full h-px bg-gray-200" />

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-8"
      >
        <SectionTitle>EXPERIENCE</SectionTitle>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-row items-start gap-6">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 rounded-lg object-cover bg-gray-100"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-blue-600 hover:underline transition-colors w-fit"
                >
                  {exp.company}
                </a>
                <div className="text-sm text-gray-500">{exp.period}</div>
                <Paragraph className="mt-2 text-base">
                  {exp.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="w-full h-px bg-gray-200" />

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-8"
      >
        <SectionTitle>TECH STACK</SectionTitle>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="w-full h-px bg-gray-200" />

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-8"
      >
        <SectionTitle>GET IN TOUCH</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:barry@example.com"
            className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg text-gray-700">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Email</div>
                <div className="font-bold">barry@example.com</div>
              </div>
            </div>
            <ArrowUpRight
              className="text-gray-400 group-hover:text-gray-900 transition-colors"
              size={20}
            />
          </a>

          <a
            href="https://github.com/barrysong"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg text-gray-700">
                <Github size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">GitHub</div>
                <div className="font-bold">@barrysong</div>
              </div>
            </div>
            <ArrowUpRight
              className="text-gray-400 group-hover:text-gray-900 transition-colors"
              size={20}
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
