import { Calendar, CheckCircle, Clock } from "lucide-react";

const currentEvents = [
  {
    date: "24",
    month: "JAN",
    title: "Supply Chain Global '22",
    dateTime: "13 Apr 2026  |  10:30 AM",
    status: "attending",
  },
];

const upcomingEvents = [
  {
    date: "24",
    month: "JAN",
    title: "Supply Chain Global '22",
    dateTime: "13 Apr 2026  |  10:30 AM",
    status: "pending",
  },
  {
    date: "27",
    month: "JAN",
    title: "Supply Chain Global '22",
    dateTime: "13 Apr 2026  |  10:30 AM",
    status: "pending",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="w-full  rounded-[20px] bg-white/90 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)] backdrop-blur-[12px] overflow-hidden p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-[2.5px]">
          <Calendar className="w-[22.49px] h-[22.49px] text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold leading-[100%] text-gray-900">
            Upcoming Events
          </h3>
        </div>
        <button className="px-3 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-bold leading-6">
          See All
        </button>
      </div>

      {/* Current Events Section */}
      <div className="mb-[10px]">
        <p className="text-[12px] font-medium text-gray-500 mb-3">
          Current Events
        </p>
        <div className="space-y-3">
          {currentEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div>
        <p className="text-[12px] font-medium text-gray-500 mb-3">
          Upcoming Events
        </p>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: typeof currentEvents[0] }) {
  return (
    <div className="flex gap-3">
      {/* Date Card */}
      <div
        className="w-[66px] h-[66 px] rounded-2xl flex-shrink-0 relative overflow-hidden shadow-lg"
        style={{
          background: "linear-gradient(135deg, #8A78B1 0%, #7A60A9 50%, #A79AC5 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <span className="text-[26px] font-normal text-white ">
            {event.date}
          </span>
          <span className="text-xs font-normal text-white uppercase tracking-wider ">
            {event.month}
          </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="flex-1 flex flex-col gap-2">
        <div>
          <h4 className="text-base font-medium text-[#4F4F4F] leading-snug">
            {event.title}
          </h4>
          <p className="text-sm text-[#4F4F4F] font-medium leading-snug">
            {event.dateTime}
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-1.5">
          {event.status === "attending" ? (
            <>
              <CheckCircle className="w-4 h-4 text-[#009639]" strokeWidth={2} />
              <span className="text-xs font-medium text-[#009639]">
                Attending
              </span>
            </>
          ) : (
            <>
              <Clock className="w-4 h-4 text-gray-400" strokeWidth={2} />
              <span className="text-xs font-medium text-gray-400">
                Pending
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
