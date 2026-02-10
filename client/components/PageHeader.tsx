interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative bg-[#b8a5d4] py-[52px] w-full px-[38px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h3
        className="text-4xl tracking-[-2%] font-medium leading-8 text-white"
        style={{
          fontFamily: "'Loew Next Arabic', sans-serif",
        }}
      >
        Hi,
        <span className="font-bold"> {title}</span>
      </h3>

      <div
        className="w-full sm:w-[338px] h-10 flex items-end justify-end"
        style={{ backdropFilter: "blur(9.6px)" }}
      >
        <div className="flex items-center blur-[19.2] p-2 gap-3 rounded-xl w-full h-full bg-white/20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 20L15.5 15.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-none placeholder:text-white text-white text-sm sm:text-base leading-[22px]"
          />
        </div>
      </div>
    </div>
  );
}
