import { createFileRoute } from "@tanstack/react-router";
import { ProductItem } from "../../components/products/product-item";

export const Route = createFileRoute("/_main/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const products = [
    {
      title: "DevTools Pro",
      description:
        "A comprehensive suite of developer tools to boost your productivity. Includes performance profiling, network inspection, and state management debugging.",
      tags: ["Electron", "React", "Rust"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600&h=900",
    },
    {
      title: "Design System UI",
      description:
        "A modern, accessible design system for building consistent user interfaces. Features a complete set of accessible components and comprehensive documentation.",
      tags: ["Figma", "React", "Tailwind"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600&h=900",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with customizable widgets and reports. Visualize your data with interactive charts and gain actionable insights.",
      tags: ["Next.js", "D3.js", "TypeScript"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900",
    },
    {
      title: "Task Master",
      description:
        "A minimalist task management app focused on deep work and focus. Organize your tasks, set priorities, and track your progress with ease.",
      tags: ["Vue", "Firebase", "PWA"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600&h=900",
    },
  ];

  return (
    <div className="flex flex-col gap-12 pb-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold tracking-tight">Products</h2>
        <p className="text-gray-500">
          Open source projects and commercial products I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <ProductItem key={product.title} {...product} index={index} />
        ))}
      </div>
    </div>
  );
}
