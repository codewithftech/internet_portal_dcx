import { BookOpen } from "lucide-react";

const newsItems = [
  {
    id: 1,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c04af16eec3c4e70f1727b82f86aac9975f7fed1?width=654",
    title:
      "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
    featured: true,
  },
  {
    id: 2,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/cea11df436944520f4e89b3db67592b0e879ff5b?width=262",
    title:
      "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
  },
  {
    id: 3,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f4eebb4ff155714142bee2ae5823a2624f05164b?width=289",
    title:
      "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
  },
  {
    id: 4,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f4eebb4ff155714142bee2ae5823a2624f05164b?width=289",
    title:
      "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
  },
];

export default function RecentNews() {
  return (
    <div className="w-full lg:w-1/2 rounded-[20px] bg-white/90 px-4 pt-2 pb-3 backdrop-blur-[24px] shadow-[0_24px_32px_0_rgba(18,12,55,0.08)]">
      {/* Header */}
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-row items-center gap-1">
          <BookOpen className="size-[22px] text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-[#4F4F4F] tracking-[-2%]">
            Recent News
          </h3>
        </div>
        <button className="px-3 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm leading-6 font-bold">
          See All
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
        {/* Featured Article - Left Side */}
        {newsItems[0] && (
          <div className="flex flex-col flex-1 gap-2.5 overflow-hidden">
            <img
              src={newsItems[0].image}
              alt={newsItems[0].title}
              className="w-full h-[196px] object-cover rounded-xl"
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-sm leading-[19px] font-medium text-[#4F4F4F]">
                {newsItems[0].title}
              </h4>
              <span className="text-sm text-[#959495] font-medium">
                {newsItems[0].date}
              </span>
            </div>
          </div>
        )}

        {/* News List - Right Side */}
        <div className="flex flex-col gap-3 w-[320px]">
          {newsItems.slice(1).map((item) => (
            <div key={item.id} className="flex gap-3 items-start">
              <div className="w-32 h-[86px] rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">
                  {item.title}
                </h4>
                <span className="text-xs text-gray-500 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
