const Calender = () => {
  const dates = [
    "",
    "",
    "",
    "",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="container mx-auto flex-center h-[100dvh] bg-slate-200">
      <div className="min-w-[300px] p-4 bg-neutral-600 grid grid-cols-7 rounded-md ">
        {days.map((day, ind) => (
          <div
            key={ind}
            className="flex-center size-9 p-2 rounded-full text-gray-400"
          >
            {day}
          </div>
        ))}
        {dates.map((date, ind) =>
          !date ? (
            <div key={ind} className="size-9"></div>
          ) : (
            <div
              key={ind}
              className="flex-center cursor-pointer size-9 p-2 rounded-full hover:bg-neutral-500 text-white"
            >
              {date}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calender;
