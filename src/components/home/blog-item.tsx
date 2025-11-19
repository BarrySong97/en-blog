import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Article } from "@/data/articles";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { Media } from "@/payload-types";

interface BlogItemProps {
  article: Article;
  index?: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BlogItem({ article }: BlogItemProps) {
  return (
    <motion.div variants={itemVariants}>
      <Link
        to="/blogs/$slug"
        params={{ slug: article.slug }}
        className="group block"
        data-cursor-text="Read More"
      >
        <div className="flex gap-6 items-start">
          {/* Cover Image */}
          <div className="w-48 h-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
            <ImageWithFallback
              image={article.cover as Media}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.author}</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
              {article.title}
            </h3>

            <p className="text-gray-600 line-clamp-2 leading-relaxed">
              {article.preview}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
