import { Users, ChevronRight } from "lucide-react";

const departments = [
  { name: "Corporate Affairs", count: 24 },
  { name: "Technical Affairs", count: 24 },
  { name: "Support Services", count: 54 },
  { name: "Commercial", count: 37 },
  { name: "Strategy", count: 20 },
];

export default function EmployeeRoaster() {
  return (
    <div className="w-full lg:w-1/4 rounded-[20px] bg-white/80 pt-2 p-4 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <Users className="size-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-[#4F4F4F]">Employee Roaster</h3>
        </div>
        <button className="px-3 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm leading-6 font-bold">
          See All
        </button>
      </div>

      {/* Department List */}
      <div className="flex flex-col gap-2">
        {departments.map((dept, index) => (
          <button
            key={index}
            className="flex items-center justify-between pl-[14px] pr-3 py-[13px] rounded-xl bg-white shadow-[0_12px_24px_0_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-2">
              {/* Employee Count Badge */}
              <div className="flex items-center gap-0.5 px-1.5 py-1 rounded-full bg-[#7A60A9]/10">
                <Users className="w-4 h-4 text-[#7A60A9]" strokeWidth={0.867} />
                <span className="text-sm font-medium text-[#7A60A9]">
                  {dept.count}
                </span>
              </div>

              {/* Department Name */}
              <span className="text-base font-medium text-[#4F4F4F]">
                {dept.name}
              </span>
            </div>

            {/* Chevron */}
            <ChevronRight className="size-5 text-[#7A60A9]" strokeWidth={2} />
          </button>
        ))}
      </div>
    </div>
  );
}
