import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import QuickAccessCarousel from "@/components/QuickAccessCarousel";
import RecentNews from "@/components/widgets/RecentNews";
import EmployeeRoaster from "@/components/widgets/EmployeeRoaster";
import PersonalData from "@/components/widgets/PersonalData";
import Documents from "@/components/widgets/Documents";
import UpcomingEvents from "@/components/widgets/UpcomingEvents";
import PendingApprovals from "@/components/widgets/PendingApprovals";
import Announcements from "@/components/widgets/Announcements";
import HeaderIntranet from "@/components/Navigation/HeaderIntranet";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F4F3F5]">
      {/* Background layers with purple gradient and blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7A60A9]/70 via-[#7A60A9]/50 to-[#F4F3F5]">
          <div className="absolute inset-0 top-1/3">
            <div className="absolute inset-0 bg-gray-300/40 blur-[32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F7F9]/48 to-[#F5F7F9] blur-sm backdrop-blur-xl" />
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-x-hidden">
        {/* <Header /> */}
        <HeaderIntranet />

        <main className=" ">
          <PageHeader title="Ahmed Radwan" />
          <QuickAccessCarousel />
          {/* Content Container */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5">
            {/* Quick Access Carousel */}

            {/* Widgets Grid - Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[692px_338px_338px] gap-4 mb-4 justify-center">
              <RecentNews />
              <EmployeeRoaster />
              <PersonalData />
            </div>

            {/* Widgets Grid - Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-8">
              <Documents />
              <UpcomingEvents />
              <PendingApprovals />
              <Announcements />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
