import { getImageUrl } from "@/lib/get-image-url";
import { Home } from "@/payload-types";
import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Left({ homeData }: { homeData: Home }) {
  const router = useRouterState();

  const menuItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/about" },
    { label: "PRODUCTS", to: "/products" },
  ];
  const githubUrl = homeData.socialLinks.find(
    (link) => link.name === "Github"
  )?.url;

  return (
    <div className="col-span-4 h-screen sticky top-0 p-12 flex flex-col justify-between border-r border-gray-200 bg-[#f2f2f2]">
      {/* Profile Section */}
      <div className="flex flex-col gap-6">
        <motion.div
          className="w-24 h-24 rounded-full overflow-hidden bg-gray-200"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <img
            src={getImageUrl(homeData.avatar.url ?? "")}
            alt="Barry Song's Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Barry Song</h1>
          <p className="text-gray-500 mt-2 text-lg">{homeData.description}</p>
        </motion.div>
        <motion.div
          className="flex gap-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <a
            href={githubUrl ?? ""}
            className="hover:text-black transition-colors"
            target="_blank"
            data-cursor="-md"
          >
            <Github size={20} />
          </a>
          <a
            href={"https://x.com/SongBarry80670"}
            className="hover:text-black transition-colors"
            target="_blank"
            data-cursor="-md"
          >
            <Twitter size={20} />
          </a>
        </motion.div>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col gap-4">
        {menuItems.map((item, index) => {
          const isActive = router.location.pathname === item.to;
          return (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="w-fit"
            >
              <Link to={item.to} className="block">
                <motion.div
                  className="flex items-center gap-2 relative"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    className="w-2 h-2 bg-black rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0,
                    }}
                  />
                  <span
                    className={`text-xl font-medium transition-colors ${
                      isActive
                        ? "text-black"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Underline Animation */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-0 h-[2px] bg-black origin-left"
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
