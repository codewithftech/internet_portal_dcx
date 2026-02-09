import { useId } from "react";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  const gradientId = useId().replace(/:/g, "-");

  return (
    <div className="relative h-[72px] mb-4">
      <svg
        className="absolute inset-0 pointer-events-none w-full h-full"
        width="1440"
        height="72"
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 0H1440V72H0V0Z" fill={`url(#${gradientId})`} />
        <defs>
          <linearGradient
            id={gradientId}
            x1="720"
            y1="-102.069"
            x2="720"
            y2="165.977"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.37" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1
          className="text-xl sm:text-2xl md:text-[28px] font-bold leading-8 text-white ml-[18px]"
          style={{
            fontFamily: "'Loew Next Arabic', sans-serif",
            letterSpacing: "-0.56px",
          }}
        >
          {title}
        </h1>

        <div
          className="w-full sm:w-[338px] h-10 flex items-end justify-end"
          style={{ backdropFilter: "blur(9.6px)" }}
        >
          <div
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl w-full h-full"
            style={{ background: "rgba(255, 255, 255, 0.90)" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 20L15.5 15.5"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent border-none outline-none text-[#4F4F4F] text-sm sm:text-base leading-[22px]"
              style={{
                fontFamily: "'ADNOC Sans', 'Inter', sans-serif",
                fontWeight: 400,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
