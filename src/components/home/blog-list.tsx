import { motion } from "motion/react";
import BlogItem from "@/components/home/blog-item";
import type { Article } from "@/data/articles";

interface BlogListProps {
  articles: Article[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogList({ articles }: BlogListProps) {
  return (
    <motion.div
      className="grid gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {articles.map((article) => (
        <BlogItem key={article.id} article={article} />
      ))}
    </motion.div>
  );
}
