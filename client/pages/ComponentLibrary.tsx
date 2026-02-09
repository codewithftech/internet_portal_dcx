import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import QuickAccessCarousel from "@/components/QuickAccessCarousel";
import RecentNews from "@/components/widgets/RecentNews";
import EmployeeRoaster from "@/components/widgets/EmployeeRoaster";
import EmployeePoll from "@/components/widgets/EmployeePoll";
import PersonalData from "@/components/widgets/PersonalData";
import Documents from "@/components/widgets/Documents";
import UpcomingEvents from "@/components/widgets/UpcomingEvents";
import PendingApprovals from "@/components/widgets/PendingApprovals";
import Announcements from "@/components/widgets/Announcements";

export default function ComponentLibrary() {
  const components = [
    { name: "Header", description: "Top navigation header with logo and menu" },
    { name: "SearchBar", description: "Search input component" },
    {
      name: "QuickAccessCarousel",
      description: "Horizontal scrollable carousel for quick access services",
    },
    {
      name: "RecentNews Widget",
      description: "Display recent news and articles",
    },
    {
      name: "EmployeeRoaster Widget",
      description: "Display department and employee information",
    },
    {
      name: "PersonalData Widget",
      description: "User profile and activity stats (used on Index/Home)",
    },
    {
      name: "EmployeePoll Widget",
      description: "Employee mood/satisfaction poll with emoji reactions",
    },
    {
      name: "Documents Widget",
      description: "Company documents categories display",
    },
    {
      name: "UpcomingEvents Widget",
      description: "Calendar events and upcoming meetings",
    },
    {
      name: "PendingApprovals Widget",
      description: "Approval requests display",
    },
    {
      name: "Announcements Widget",
      description: "Important announcements and notifications",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F4F3F5]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7A60A9]/70 via-[#7A60A9]/50 to-[#F4F3F5]">
          <div className="absolute inset-0 top-1/3">
            <div className="absolute inset-0 bg-gray-300/40 blur-[32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F7F9]/48 to-[#F5F7F9] blur-sm backdrop-blur-xl" />
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-x-hidden">
        <Header />

        <main className="pt-16 lg:pt-[72px] min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-72px)]">
          <PageHeader title="Component Library" />

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 py-8">
            <div className="mb-12">
              <p className="text-lg text-gray-600">
                A comprehensive showcase of all components used in the
                application
              </p>
            </div>

            {/* Component List Overview */}
            <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Available Components
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {components.map((component, index) => (
                  <div
                    key={index}
                    className="p-4 bg-purple-50 rounded-lg border border-purple-200"
                  >
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {component.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Component Showcase Section */}
            <div className="space-y-12">
              {/* Header Component */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Header Component
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Top navigation header with logo, menu items, and
                    subscription status. The Header is already visible at the
                    top of all pages.
                  </p>
                </div>
                <div className="bg-gray-50 rounded p-4 text-center text-gray-500 text-sm">
                  Header Component is rendered at the top of this page (see
                  above)
                </div>
              </section>

              {/* SearchBar Component */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. SearchBar Component
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Search input field with icon. Used in headers and page
                    sections.
                  </p>
                </div>
                <div className="max-w-md">
                  <SearchBar />
                </div>
              </section>

              {/* QuickAccessCarousel Component */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. QuickAccessCarousel Component
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Horizontal scrollable carousel with service buttons (Service
                    Hub, Book Meeting Room, Brand Space, Document Hub, SAI/HANA,
                    Ariba, Cyber Space, Projects)
                  </p>
                </div>
                <div className="bg-gradient-to-b from-purple-400 to-purple-500 rounded-lg p-6">
                  <QuickAccessCarousel />
                </div>
              </section>

              {/* RecentNews Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. RecentNews Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Displays featured airport news with thumbnails, headlines,
                    and timestamps
                  </p>
                </div>
                <div className="max-w-2xl">
                  <RecentNews />
                </div>
              </section>

              {/* EmployeeRoaster Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    5. EmployeeRoaster Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Shows department list with employee counts (Corporate
                    Affairs, Technical Affairs, Support Services, Commercial,
                    Strategy)
                  </p>
                </div>
                <div className="max-w-sm">
                  <EmployeeRoaster />
                </div>
              </section>

              {/* PersonalData Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    6. PersonalData Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    User profile card with name, job title, and activity
                    statistics (Leave balance, Events attending, Pending
                    approvals). Used on Index/Home page.
                  </p>
                </div>
                <div className="max-w-sm">
                  <PersonalData />
                </div>
              </section>

              {/* EmployeePoll Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    7. EmployeePoll Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Interactive employee mood/satisfaction poll with emoji
                    reactions (Great, Okay, Not Great, Stressed) and timer
                  </p>
                </div>
                <div className="max-w-sm">
                  <EmployeePoll />
                </div>
              </section>

              {/* Documents Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    8. Documents Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Company document categories with counts (Company Policy,
                    Internal Committees, Agreement, Corporate Brandbook,
                    Templates & Forms)
                  </p>
                </div>
                <div className="max-w-sm">
                  <Documents />
                </div>
              </section>

              {/* UpcomingEvents Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    9. UpcomingEvents Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Calendar events display with current and upcoming sections
                    showing date, time, and attendance status
                  </p>
                </div>
                <div className="max-w-sm">
                  <UpcomingEvents />
                </div>
              </section>

              {/* PendingApprovals Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    10. PendingApprovals Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Displays pending approval requests (Annual Leave, Training
                    Request, Overtime Approval) with status indicators
                  </p>
                </div>
                <div className="max-w-sm">
                  <PendingApprovals />
                </div>
              </section>

              {/* Announcements Widget */}
              <section className="bg-white rounded-lg p-8 shadow-sm mb-12">
                <div className="mb-6 pb-4 border-b-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    11. Announcements Widget
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Important announcements and notifications with color-coded
                    icons and timestamps
                  </p>
                </div>
                <div className="max-w-sm">
                  <Announcements />
                </div>
              </section>

              {/* Main Pages Section */}
              <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 shadow-sm">
                <div className="mb-6 pb-4 border-b-2 border-purple-300">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Main Pages & Complete Examples
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Full page implementations using all components
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Index/Home Page */}
                  <Link
                    to="/"
                    className="group p-6 bg-white rounded-lg border-2 border-transparent hover:border-purple-400 transition-all hover:shadow-lg"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                        H
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                      Index / Home
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Original homepage with PersonalData widget
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Components used:</p>
                      <p className="text-xs text-purple-600 font-medium mt-1">
                        Header, SearchBar, QuickAccessCarousel, RecentNews,
                        EmployeeRoaster, PersonalData, Documents,
                        UpcomingEvents, PendingApprovals, Announcements
                      </p>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        View Page →
                      </span>
                    </div>
                  </Link>

                  {/* Homepage V2 */}
                  <Link
                    to="/h_v2"
                    className="group p-6 bg-white rounded-lg border-2 border-transparent hover:border-purple-400 transition-all hover:shadow-lg"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                        V2
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                      Homepage V2
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Variant with Employee Poll widget instead of PersonalData
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Components used:</p>
                      <p className="text-xs text-purple-600 font-medium mt-1">
                        Header, SearchBar, QuickAccessCarousel, RecentNews,
                        EmployeeRoaster, EmployeePoll, Documents,
                        UpcomingEvents, PendingApprovals, Announcements
                      </p>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        View Page →
                      </span>
                    </div>
                  </Link>

                  {/* Homepage V3 */}
                  <Link
                    to="/h_v3"
                    className="group p-6 bg-white rounded-lg border-2 border-transparent hover:border-purple-400 transition-all hover:shadow-lg"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                        V3
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                      Homepage V3
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Latest variant with complete component integration
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Components used:</p>
                      <p className="text-xs text-purple-600 font-medium mt-1">
                        Header, SearchBar, QuickAccessCarousel, RecentNews,
                        EmployeeRoaster, EmployeePoll, Documents,
                        UpcomingEvents, PendingApprovals, Announcements
                      </p>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        View Page →
                      </span>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Component Library Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Individual Components (11)
                  </h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>
                      ✓ <strong>Header</strong> - Navigation and branding
                    </li>
                    <li>
                      ✓ <strong>SearchBar</strong> - Search functionality
                    </li>
                    <li>
                      ✓ <strong>QuickAccessCarousel</strong> - Quick access
                      services
                    </li>
                    <li>
                      ✓ <strong>RecentNews Widget</strong> - News display
                    </li>
                    <li>
                      ✓ <strong>EmployeeRoaster Widget</strong> - Department
                      info
                    </li>
                    <li>
                      ✓ <strong>PersonalData Widget</strong> - User profile &
                      stats (Index)
                    </li>
                    <li>
                      ✓ <strong>EmployeePoll Widget</strong> - Employee mood
                      poll (V2/V3)
                    </li>
                    <li>
                      ✓ <strong>Documents Widget</strong> - Document categories
                    </li>
                    <li>
                      ✓ <strong>UpcomingEvents Widget</strong> - Calendar events
                    </li>
                    <li>
                      ✓ <strong>PendingApprovals Widget</strong> - Approvals
                      list
                    </li>
                    <li>
                      ✓ <strong>Announcements Widget</strong> - Notifications
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Main Pages (3)
                  </h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>
                      ✓ <strong>Index / Home</strong> - Original homepage with
                      PersonalData widget
                    </li>
                    <li>
                      ✓ <strong>Homepage V2</strong> - Variant with EmployeePoll
                      widget
                    </li>
                    <li>
                      ✓ <strong>Homepage V3</strong> - Latest variant with
                      complete integration
                    </li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-4 italic">
                    Each page uses all 10 components in an integrated layout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
