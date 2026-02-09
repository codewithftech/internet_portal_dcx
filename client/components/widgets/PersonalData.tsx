import { UserCircle2, Heart, Calendar, ListChecks } from "lucide-react";

export default function PersonalData() {
  return (
    <div className="w-full max-w-[338px] rounded-[20px] bg-white/80 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)] backdrop-blur-[12px] overflow-hidden p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 h-8">
        <div className="flex items-center gap-1">
          <UserCircle2 className="w-6 h-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-[#4F4F4F] capitalize" style={{ fontFamily: "'Loew Next Arabic', sans-serif" }}>
            Personal Data
          </h3>
        </div>
        <button className="h-8 px-3 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-bold leading-6 hover:bg-[#7A60A9]/20 transition-colors" style={{ fontFamily: "'Loew Next Arabic', sans-serif" }}>
          My Profile
        </button>
      </div>

      {/* User Info */}
      <div className="mb-6">
        <h4 className="text-2xl font-bold text-[#4F4F4F] mb-1 leading-6" style={{ fontFamily: "'Loew Next Arabic', sans-serif", letterSpacing: '-0.48px' }}>
          Ahmed Radwan
        </h4>
        <p className="text-[10px] font-medium leading-3" style={{ fontFamily: "'Loew Next Arabic', sans-serif", letterSpacing: '-0.2px' }}>
          <span className="text-[#4F4F4F]/50">Job title:</span>
          <span className="text-[#4F4F4F]"> Operations Officer</span>
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col gap-2">
        {/* First Row - Two Cards */}
        <div className="grid grid-cols-2 gap-2">
          {/* Leave Balance */}
          <div className="rounded-xl p-4 bg-[rgba(230,223,239,0.9)] hover:shadow-md transition-all group cursor-pointer h-[104px]">
            <div className="flex items-center gap-1.5 mb-auto">
              <div className="w-[30.8px] h-[30px] rounded-full bg-white flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#7A60A9]" strokeWidth={1.42} />
              </div>
              <span className="text-lg font-bold text-[#4F4F4F] leading-6" style={{ fontFamily: "'Loew Next Arabic', sans-serif", letterSpacing: '-0.36px' }}>
                24 days
              </span>
            </div>
            <div className="mt-auto">
              <p className="text-xs font-medium text-[#4F4F4F] mb-1 leading-[18.67px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Leave balance
              </p>
              <button className="text-[9px] font-medium text-[#7A60A9] leading-[12.44px] group-hover:underline" style={{ fontFamily: 'Poppins, sans-serif' }}>
                View Details
              </button>
            </div>
          </div>

          {/* Events */}
          <div className="rounded-xl p-4 bg-[rgba(230,223,239,0.9)] hover:shadow-md transition-all group cursor-pointer h-[104px]">
            <div className="flex items-center gap-1.5 mb-auto">
              <div className="w-[30.8px] h-[30px] rounded-full bg-white flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#7A60A9]" strokeWidth={1.42} />
              </div>
              <span className="text-lg font-bold text-[#4F4F4F] leading-6" style={{ fontFamily: "'Loew Next Arabic', sans-serif", letterSpacing: '-0.36px' }}>
                3 events
              </span>
            </div>
            <div className="mt-auto">
              <p className="text-xs font-medium text-[#4F4F4F] mb-1 leading-[18.67px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                You are attending
              </p>
              <button className="text-[9px] font-medium text-[#7A60A9] leading-[12.44px] group-hover:underline" style={{ fontFamily: 'Poppins, sans-serif' }}>
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Pending Approvals - Full Width */}
        <div className="rounded-xl p-4 bg-[rgba(230,223,239,0.9)] hover:shadow-md transition-all group cursor-pointer h-[104px]">
          <div className="flex items-center gap-1.5 mb-auto">
            <div className="w-[30.8px] h-[30px] rounded-full bg-white flex items-center justify-center">
              <ListChecks className="w-5 h-5 text-[#7A60A9]" strokeWidth={1.42} />
            </div>
            <span className="text-lg font-bold text-[#4F4F4F] leading-6" style={{ fontFamily: "'Loew Next Arabic', sans-serif", letterSpacing: '-0.36px' }}>
              12
            </span>
          </div>
          <div className="mt-auto">
            <p className="text-xs font-medium text-[#4F4F4F] mb-1 leading-[18.67px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Pending Approvals
            </p>
            <button className="text-[9px] font-medium text-[#7A60A9] leading-[12.44px] group-hover:underline" style={{ fontFamily: 'Poppins, sans-serif' }}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
