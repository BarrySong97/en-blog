import { ClientOnly, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Blog, Media } from "@/payload-types";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface BlogSidebarProps {
  article: Blog;
}

export function BlogSidebar({ article }: BlogSidebarProps) {
  return (
    <motion.div
      className="col-span-4 h-screen sticky top-0 p-12 flex flex-col justify-between border-r border-gray-200 bg-[#f2f2f2] z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors w-fit"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </Link>

        <motion.div
          className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <ImageWithFallback
            image={
              (article.coverImage.sizes?.tablet?.url
                ? article.coverImage.sizes?.tablet
                : article.coverImage) as Media
            }
            alt={article.title}
            className="w-full h-full object-cover"
            layout="fullWidth"
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-bold leading-tight text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          {article.title}
        </motion.h1>
      </div>

      <div className="flex flex-col gap-6">
        <motion.div
          className="flex items-center justify-between border-t border-gray-300 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1760"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                Author
              </p>
              <p className="font-medium">Barry Song</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
              Date
            </p>
            <p className="font-medium">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
