const GridFourCols = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 w-full place-items-stretch ">
      {children}
    </div>
  );
};

export default GridFourCols;
