interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative w-full py-[52px] px-[38px] overflow-hidden">
      <img
        src="/airport.avif"
        alt="Airport background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "color-mix(in oklab, var(--color-brand-purple) 60%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between h-full">
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
    </div>
  );
}
