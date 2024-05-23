const Status = ({ setMenu }) => {
  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-slate-700">
      <h1 className="p-4" onClick={() => setMenu("")}>
        close
      </h1>
    </div>
  );
};

export default Status;
