const ContainerWithBackground = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white p-4">
      {children}
    </div>
  );
};

export default ContainerWithBackground;
