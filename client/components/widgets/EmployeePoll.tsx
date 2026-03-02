import { Clock } from "lucide-react";
import { useState } from "react";

const moodOptions = [
  { emoji: "😊", label: "Great" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😕", label: "Not Great" },
  { emoji: "😰", label: "Stressed" },
];

export default function EmployeePoll() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <div 
      className="w-full  rounded-[20px] overflow-hidden relative shadow-[0_24px_32px_0_rgba(18,12,55,0.08)]"
      style={{
        background: 'linear-gradient(135deg, #8A78B1 0%, #7A60A9 50%, #A79AC5 100%)',
      }}
    >
      {/* Decorative gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'bg-[linear-gradient(135deg,#A566F2_0%,#793EC2_32%,#753BBD_55%,#7B3FC1_78%,#C26CFF_100%)]'
        }}
      />

      {/* Content */}
      <div className="relative p-6 flex flex-col h-full min-h-[346px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[51.76px]">
          <h3 className="text-lg font-semibold text-[#FFFFFF]">
            Employee Poll
          </h3>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#9458DF]/40 backdrop-blur-sm
">
            <Clock className="w-5 h-5 text-white" strokeWidth={2} />
            <span className="text-sm font-medium text-white">
              3 days
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-[27.35px] font-semibold  leading-tight mb-[13px]
           bg-gradient-to-r from-white/90 to-[#D7C4FF]/70
           bg-clip-text text-transparent">
            How Are You
            <br />
            Feeling Today?
          </h2>

          {/* Emoji Options */}
          <div className="grid grid-cols-4 gap-[18px] w-full  mb-10">
            {moodOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedMood(index)}
                className="flex flex-col items-center gap-2.5 group"
              >
 <div
  className={`w-14 h-14 rounded-full flex items-center justify-center 
              text-[31.92px] transition-[background-color,transform] duration-200 ease-out ${
    selectedMood === index
      ? 'bg-white scale-110 shadow-lg'
      : 'bg-white/10 hover:bg-white/20 hover:scale-105'
  }`}
>


              {option.emoji}
                </div>
                <span className="text-[10.64px] font-bold text-white text-center leading-tight whitespace-nowrap">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Send Answer Button */}
        <button 
  className="w-full px-4 py-3 rounded-2xl
             bg-white/15 hover:bg-white
             text-white hover:text-[#7A60A9]
             transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
>
  <span className="text-base font-medium">
    Send Answer
  </span>
</button>

        </div>
      </div>
    </div>
  );
}
