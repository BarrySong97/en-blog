export interface Article {
  id: string;
  slug: string;
  title: string;
  preview: string;
  content: string;
  author: string;
  date: string;
  cover: string;
}

const longContent = `
  <p>The landscape of web development is constantly evolving. As we move further into the decade, we are seeing a shift towards more server-driven architectures, even in the frontend space. This evolution is not just about new tools, but about a fundamental rethinking of how we build for the web.</p>
  <br/>
  <h3>Server Components: A Paradigm Shift</h3>
  <p>React Server Components (RSC) are changing how we think about data fetching and rendering. By moving logic to the server, we can reduce bundle sizes and improve performance. This means less JavaScript sent to the client, faster initial load times, and better SEO.</p>
  <p>Traditionally, we've had to choose between Static Site Generation (SSG) and Server-Side Rendering (SSR). RSCs offer a hybrid approach, allowing us to render parts of our application on the server while keeping other parts interactive on the client. This granular control is a game-changer for performance optimization.</p>
  <br/>
  <h3>Edge Computing: Closer to the User</h3>
  <p>Deploying code closer to the user is becoming easier than ever. Edge functions allow us to run dynamic logic with low latency, providing a better user experience. Instead of requests traveling halfway around the world to a central server, they can be handled by a node in a nearby city.</p>
  <p>This is particularly important for personalized content, A/B testing, and authentication. By handling these tasks at the edge, we can deliver dynamic experiences that feel as fast as static pages.</p>
  <br/>
  <h3>The Rise of AI in Development</h3>
  <p>Artificial Intelligence is also making its mark on web development. From code generation tools like GitHub Copilot to AI-driven testing and debugging, developers are becoming more productive than ever. AI is not replacing developers, but rather augmenting their capabilities, allowing them to focus on higher-level problem solving.</p>
  <br/>
  <h3>WebAssembly (Wasm) and the Future of Performance</h3>
  <p>WebAssembly is opening up new possibilities for high-performance web applications. It allows us to run code written in languages like C++, Rust, and Go directly in the browser at near-native speeds. This is enabling a new generation of web apps, from video editors to 3D games, that were previously only possible on desktop.</p>
  <br/>
  <h3>Conclusion</h3>
  <p>The future of web development is bright and full of potential. By embracing these new technologies and architectures, we can build faster, more resilient, and more engaging user experiences. The key is to stay curious and keep learning, as the only constant in this field is change.</p>
  <br/>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <br/>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
`;

export const articles: Article[] = [
  {
    id: "1",
    slug: "modern-web-development",
    title: "The Future of Modern Web Development",
    preview: "Exploring the latest trends in frontend architecture, from server components to edge computing.",
    content: longContent,
    author: "Barry Song",
    date: "Oct 24, 2023",
    cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
  },
  {
    id: "2",
    slug: "mastering-motion",
    title: "Mastering Animations with Framer Motion",
    preview: "A deep dive into creating smooth, declarative animations for your React applications.",
    content: longContent,
    author: "Barry Song",
    date: "Nov 12, 2023",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "3",
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    preview: "Essential tips and tricks to write cleaner, safer, and more maintainable TypeScript code.",
    content: longContent,
    author: "Barry Song",
    date: "Dec 05, 2023",
    cover: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128",
  },
  {
    id: "4",
    slug: "design-systems",
    title: "Building Scalable Design Systems",
    preview: "How to architect a design system that grows with your product and team.",
    content: longContent,
    author: "Barry Song",
    date: "Jan 15, 2024",
    cover: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "5",
    slug: "state-management",
    title: "The State of State Management",
    preview: "Comparing Redux, Zustand, Jotai, and Recoil for modern React applications.",
    content: longContent,
    author: "Barry Song",
    date: "Feb 20, 2024",
    cover: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "6",
    slug: "css-evolution",
    title: "The Evolution of CSS",
    preview: "From floats to flexbox, grid, and now subgrid. How CSS keeps improving.",
    content: longContent,
    author: "Barry Song",
    date: "Mar 10, 2024",
    cover: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=2000",
  },
];
