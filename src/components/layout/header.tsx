import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function Header() {
  const menuItems = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "ABOUT",
      to: "/about",
    },

    {
      label: "BLOGS",
      to: "/blogs",
    },
  ];
  return (
    <div className="flex justify-between items-center  mx-auto py-6 px-8">
      <div className="text-4xl font-extrabold">4REAL</div>
      <div className="flex gap-8">
        {menuItems.map((item) => (
          <MenuItem key={item.to} label={item.label} to={item.to} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ label, to }: { label: string; to: string }) {
  const router = useRouterState();
  const isActive = router.location.pathname === to;

  return (
    <motion.div
      className="relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Link to={to} className="text-xl font-medium">
        {label}
      </Link>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-black w-full"
        variants={{
          rest: { scaleX: isActive ? 1 : 0 },
          hover: { scaleX: 1 },
        }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
