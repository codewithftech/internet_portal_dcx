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
    <div className="w-full max-w-[338px] rounded-[20px] bg-white/90 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)] backdrop-blur-[12px] overflow-hidden p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <Users className="w-6 h-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-gray-900">
            Employee Roaster
          </h3>
        </div>
        <button className="px-4 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-semibold hover:bg-[#7A60A9]/20 transition-colors">
          See All
        </button>
      </div>

      {/* Department List */}
      <div className="flex flex-col gap-3">
        {departments.map((dept, index) => (
          <button
            key={index}
            className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex items-center gap-3">
              {/* Employee Count Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7A60A9]/10">
                <Users className="w-4 h-4 text-[#7A60A9]" strokeWidth={0.867} />
                <span className="text-sm font-semibold text-[#7A60A9]">
                  {dept.count}
                </span>
              </div>

              {/* Department Name */}
              <span className="text-base font-semibold text-gray-700">
                {dept.name}
              </span>
            </div>

            {/* Chevron */}
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#7A60A9] transition-colors" strokeWidth={1.114} />
          </button>
        ))}
      </div>
    </div>
  );
}
