import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import { SectionTitle, Paragraph } from "../../components/ui/typography";
import { ExperiencesResponse } from "@/api/experiences";
import { SkillsResponse } from "@/api/skills";
import { Home } from "@/payload-types";
import { getImageUrl } from "@/lib/get-image-url";
import { Icon } from "@iconify/react";
import { aboutQueryOptions } from "@/serverfn/about";
import { homeQueryOptions } from "@/serverfn/home";
import { experiencesQueryOptions } from "@/serverfn/experiences";
import { skillsQueryOptions } from "@/serverfn/skills";

export const Route = createFileRoute("/(main)/about")({
  component: AboutPage,
  loader: async ({ context: { queryClient } }) => {
    await Promise.all([
      queryClient.ensureQueryData(aboutQueryOptions),
      queryClient.ensureQueryData(experiencesQueryOptions),
      queryClient.ensureQueryData(skillsQueryOptions),
      queryClient.ensureQueryData(homeQueryOptions),
    ]);
  },
});

function AboutPage() {
  const { data: experiencesData } = useSuspenseQuery(
    experiencesQueryOptions
  ) as unknown as {
    data: ExperiencesResponse;
  };

  const { data: skillsData } = useSuspenseQuery(
    skillsQueryOptions
  ) as unknown as {
    data: SkillsResponse;
  };

  const { data: homeData } = useSuspenseQuery(homeQueryOptions) as unknown as {
    data: Home;
  };
  const experiences = experiencesData?.docs || [];
  const skills = skillsData?.docs || [];

  return (
    <div className="flex flex-col gap-16 pb-20 max-w-4xl">
      {/* Header / Intro - 从 About content 渲染 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <SectionTitle>ABOUT ME</SectionTitle>
        <Paragraph>{homeData.about_description}</Paragraph>
      </motion.div>

      <div className="w-full h-px bg-gray-200" />

      {/* Experience - 使用真实数据 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-8"
      >
        <SectionTitle>EXPERIENCE</SectionTitle>

        <div className="grid gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex flex-row items-start gap-6">
              {exp.companyLogo && typeof exp.companyLogo === "object" && (
                <img
                  src={getImageUrl(exp.companyLogo)}
                  alt={`${exp.company} logo`}
                  className="w-6 h-6 mt-1  object-cover bg-gray-100"
                />
              )}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <a
                  href={exp.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-green-600 hover:underline transition-colors w-fit"
                >
                  {exp.company}
                </a>
                <div className="text-sm text-gray-500">{exp.period}</div>
                {exp.companyLocation && (
                  <div className="text-sm text-gray-500">
                    {exp.companyLocation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="w-full h-px bg-gray-200" />

      {/* Skills - 使用真实数据 */}
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
              key={skill.id}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-default flex items-center gap-2"
            >
              <Icon icon={skill.icon} className="w-5 h-5" />
              {skill.name}
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
                <div className="font-bold">524000659@qq.com</div>
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
                <a
                  href={
                    homeData.socialLinks.find((link) => link.name === "Github")
                      ?.url ?? ""
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  @barrysong
                </a>
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
