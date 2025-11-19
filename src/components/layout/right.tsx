export default function Right({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="scroll-container"
      className="col-span-8 p-12 bg-white h-screen overflow-y-auto"
      style={{ viewTransitionName: "right-panel" }}
    >
      {children}
    </div>
  );
}
