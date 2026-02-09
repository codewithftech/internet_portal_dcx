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
      className="w-full max-w-[338px] rounded-[20px] overflow-hidden relative shadow-[0_24px_32px_0_rgba(18,12,55,0.08)]"
      style={{
        background: 'linear-gradient(135deg, #8A78B1 0%, #7A60A9 50%, #A79AC5 100%)',
      }}
    >
      {/* Decorative gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative p-6 flex flex-col h-full min-h-[346px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-white">
            Employee Poll
          </h3>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-white" strokeWidth={2} />
            <span className="text-sm font-semibold text-white">
              3 days
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 leading-tight">
            How Are You
            <br />
            Feeling Today?
          </h2>

          {/* Emoji Options */}
          <div className="grid grid-cols-4 gap-3 w-full max-w-[290px] mb-10">
            {moodOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedMood(index)}
                className="flex flex-col items-center gap-2.5 group"
              >
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl transition-all ${
                    selectedMood === index 
                      ? 'bg-white scale-110 shadow-lg' 
                      : 'bg-white/80 hover:bg-white hover:scale-105'
                  }`}
                >
                  {option.emoji}
                </div>
                <span className="text-sm font-semibold text-white text-center leading-tight whitespace-nowrap">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Send Answer Button */}
          <button 
            className="w-full max-w-[280px] px-8 py-4 rounded-2xl bg-white/90 hover:bg-white transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <span className="text-lg font-bold text-[#7A60A9]">
              Send Answer
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
