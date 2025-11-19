import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface ProductItemProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  index: number;
}

export function ProductItem({
  title,
  description,
  tags,
  link,
  image,
  index,
}: ProductItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full"
        data-cursor-text="View More"
      >
        {/* 16:9 Cover Image */}
        <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-50 text-gray-300">
              <span className="text-4xl font-bold opacity-20">{title[0]}</span>
            </div>
          )}

          {/* External Link Overlay Button */}
          <div className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-black">
            <ExternalLink size={18} />
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-gray-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
