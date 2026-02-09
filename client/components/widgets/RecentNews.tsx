import { BookOpen } from "lucide-react";

const newsItems = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c04af16eec3c4e70f1727b82f86aac9975f7fed1?width=654",
    title: "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
    featured: true,
  },
  {
    id: 2,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/cea11df436944520f4e89b3db67592b0e879ff5b?width=262",
    title: "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
  },
  {
    id: 3,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f4eebb4ff155714142bee2ae5823a2624f05164b?width=289",
    title: "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
  },
  {
    id: 4,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f4eebb4ff155714142bee2ae5823a2624f05164b?width=289",
    title: "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
    date: "2 days ago",
  },
];

export default function RecentNews() {
  return (
    <div className="w-full max-w-[692px] rounded-[20px] bg-white/90 shadow-[0_24px_32px_0_rgba(18,12,55,0.08)] backdrop-blur-[12px] overflow-hidden p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-6 h-6 text-[#7A60A9]" strokeWidth={1.7} />
          <h3 className="text-lg font-bold text-gray-900">
            Recent News
          </h3>
        </div>
        <button className="px-4 py-2 rounded-full bg-[#7A60A9]/10 text-[#7A60A9] text-sm font-semibold hover:bg-[#7A60A9]/20 transition-colors">
          See All
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
        {/* Featured Article - Left Side */}
        {newsItems[0] && (
          <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[290px] group cursor-pointer">
            <img
              src={newsItems[0].image}
              alt={newsItems[0].title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h4 className="text-base font-semibold text-white mb-2 line-clamp-2 leading-snug">
                {newsItems[0].title}
              </h4>
              <span className="text-sm text-white/80 font-medium">
                {newsItems[0].date}
              </span>
            </div>
          </div>
        )}

        {/* News List - Right Side */}
        <div className="flex flex-col gap-3 lg:w-[310px]">
          {newsItems.slice(1).map((item) => (
            <div 
              key={item.id} 
              className="flex gap-3 items-start group cursor-pointer hover:bg-gray-50/50 rounded-xl p-2 -m-2 transition-colors"
            >
              <div className="w-32 h-[88px] rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
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
