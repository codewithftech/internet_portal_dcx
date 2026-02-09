import { Link, useLocation } from "react-router-dom";
import { Star, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };
  const Whoweare = ["Our Story", "Our Team", "Our Values", "Careers"];
  const navItems = [
    { label: "Home", path: "/", hasDropdown: false },
    { label: "Who we are", hasDropdown: true, items: Whoweare },
    { label: "How we work", hasDropdown: true, items: Whoweare },
    { label: "Resourses", hasDropdown: true, items: Whoweare },
  ];

  return (
    <header className="bg-white">
      <div className="relative z-40 w-full px-8">
        <div className="h-[78px] flex items-center justify-between">
          <div className="flex flex-row items-center gap-6 xl:gap-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-[23px]"
              onClick={closeDropdown}
            >
              <div className="size-[46px] flex-shrink-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e34a11552642a0f234b5d1963b8e9465e86e5471?width=92"
                  alt="Dammam Airports Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-black text-[20px] font-medium leading-5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Dammam Airports
              </span>
            </Link>

            {/* Navigation */}

            <nav
              className=" flex items-center gap-6 xl:gap-8"
              ref={dropdownRef}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <div key={item.label} className="relative">
                    {/* Main Nav Item */}
                    <button
                      onClick={() =>
                        item.hasDropdown && toggleDropdown(item.label)
                      }
                      onMouseDown={(e) => e.preventDefault()}
                      className={`
                text-sm font-medium transition-colors relative pb-1 whitespace-nowrap flex items-end gap-1.5
                ${isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}
              `}
                    >
                      {/* If no dropdown → Link */}
                      {!item.hasDropdown ? (
                        <Link to={item.path} onClick={closeDropdown}>
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}

                      {/* Chevron */}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}

                      {/* Active underline ONLY for active route */}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4f6bec]" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                        {item.items?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={`${item.path}/${dropdownItem
                              .toLowerCase()
                              .replace(/\s/g, "-")}`}
                            onClick={closeDropdown}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                          >
                            {dropdownItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* No subscription badge */}
          <div className="hidden lg:flex items-center gap-2">
            <Star className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-normal text-gray-600">
              No subscription
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpenDropdown(null)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
