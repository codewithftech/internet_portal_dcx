import React from "react";

export type ServiceType =
  | "service-hub"
  | "book-meeting"
  | "brand-space"
  | "document-hub"
  | "s4-hana"
  | "ariba"
  | "cyber-space"
  | "projects";

interface ServiceIconProps {
  type: ServiceType;
  className?: string;
  color?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  type,
  className = "w-8 h-8",
  color = "currentColor",
}) => {
  const icons = {
    "service-hub": (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9997 2.66669H7.99967C7.29243 2.66669 6.61415 2.94764 6.11406 3.44774C5.61396 3.94783 5.33301 4.62611 5.33301 5.33335V26.6667C5.33301 27.3739 5.61396 28.0522 6.11406 28.5523C6.61415 29.0524 7.29243 29.3334 7.99967 29.3334H23.9997C24.7069 29.3334 25.3852 29.0524 25.8853 28.5523C26.3854 28.0522 26.6663 27.3739 26.6663 26.6667V9.33335L19.9997 2.66669Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.667 2.66669V8.00002C18.667 8.70726 18.9479 9.38554 19.448 9.88564C19.9481 10.3857 20.6264 10.6667 21.3337 10.6667H26.667" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.3337 12H10.667" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3337 17.3333H10.667" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3337 22.6667H10.667" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "book-meeting": (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.667 2.66669V8.00002" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.333 2.66669V8.00002" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.3333 5.33331H6.66667C5.19391 5.33331 4 6.52722 4 7.99998V26.6666C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6666V7.99998C28 6.52722 26.8061 5.33331 25.3333 5.33331Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 13.3333H28" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "brand-space": (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3337 26.6667V5.33335C21.3337 4.62611 21.0527 3.94783 20.5526 3.44774C20.0525 2.94764 19.3742 2.66669 18.667 2.66669H13.3337C12.6264 2.66669 11.9481 2.94764 11.448 3.44774C10.9479 3.94783 10.667 4.62611 10.667 5.33335V26.6667" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.667 8H5.33366C3.8609 8 2.66699 9.19391 2.66699 10.6667V24C2.66699 25.4728 3.8609 26.6667 5.33366 26.6667H26.667C28.1397 26.6667 29.3337 25.4728 29.3337 24V10.6667C29.3337 9.19391 28.1397 8 26.667 8Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "document-hub": (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6667 9.33335H22.6667C21.9594 9.33335 21.2811 9.0524 20.781 8.5523C20.281 8.05221 20 7.37393 20 6.66669V2.66669" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9997 24C11.2924 24 10.6142 23.7191 10.1141 23.219C9.61396 22.7189 9.33301 22.0406 9.33301 21.3334V5.33335C9.33301 4.62611 9.61396 3.94783 10.1141 3.44774C10.6142 2.94764 11.2924 2.66669 11.9997 2.66669H21.333L26.6663 8.00002V21.3334C26.6663 22.0406 26.3854 22.7189 25.8853 23.219C25.3852 23.7191 24.7069 24 23.9997 24H11.9997Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 10.1333V27.2C4 27.7658 4.22476 28.3084 4.62484 28.7085C5.02492 29.1085 5.56754 29.3333 6.13333 29.3333H19.2" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "s4-hana": (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12H28" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20H28" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4V28" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 4V28" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    ariba: (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6663 29.3334C11.4027 29.3334 11.9997 28.7364 11.9997 28C11.9997 27.2636 11.4027 26.6667 10.6663 26.6667C9.92996 26.6667 9.33301 27.2636 9.33301 28C9.33301 28.7364 9.92996 29.3334 10.6663 29.3334Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.3333 29.3334C26.0697 29.3334 26.6667 28.7364 26.6667 28C26.6667 27.2636 26.0697 26.6667 25.3333 26.6667C24.597 26.6667 24 27.2636 24 28C24 28.7364 24.597 29.3334 25.3333 29.3334Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.7334 2.73334H5.40007L8.94673 19.2933C9.07684 19.8998 9.41429 20.442 9.90101 20.8265C10.3877 21.211 10.9933 21.4138 11.6134 21.4H24.6534C25.2603 21.399 25.8487 21.1911 26.3214 20.8105C26.7942 20.4298 27.1229 19.8994 27.2534 19.3067L29.4534 9.4H6.82673" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "cyber-space": (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2.66669L4 8.00002V26.6667C4 27.3739 4.28095 28.0522 4.78105 28.5523C5.28115 29.0524 5.95942 29.3334 6.66667 29.3334H25.3333C26.0406 29.3334 26.7189 29.0524 27.219 28.5523C27.719 28.0522 28 27.3739 28 26.6667V8.00002L24 2.66669H8Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8H28" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3337 13.3333C21.3337 14.7478 20.7718 16.1044 19.7716 17.1045C18.7714 18.1047 17.4148 18.6666 16.0003 18.6666C14.5858 18.6666 13.2293 18.1047 12.2291 17.1045C11.2289 16.1044 10.667 14.7478 10.667 13.3333" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    projects: (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33366 26.6667H26.667C27.3742 26.6667 28.0525 26.3857 28.5526 25.8856C29.0527 25.3855 29.3337 24.7072 29.3337 24V10.6667C29.3337 9.95942 29.0527 9.28115 28.5526 8.78105C28.0525 8.28095 27.3742 8 26.667 8H16.0937C15.6544 7.99773 15.2226 7.887 14.8365 7.67765C14.4503 7.46831 14.1219 7.16683 13.8803 6.8L12.787 5.2C12.5454 4.83317 12.217 4.53169 11.8309 4.32235C11.4447 4.113 11.0129 4.00227 10.5737 4H5.33366C4.62641 4 3.94814 4.28095 3.44804 4.78105C2.94794 5.28115 2.66699 5.95942 2.66699 6.66667V24C2.66699 25.4667 3.86699 26.6667 5.33366 26.6667Z" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.667 13.3333V18.6666" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 13.3333V16" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.333 13.3333V21.3333" stroke={color} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return icons[type];
};

export const serviceData = [
  { id: "service-hub" as ServiceType, label: "Service Hub", color: "#4B7CF3" },
  { id: "book-meeting" as ServiceType, label: "Book Meeting", color: "#8B7AC7" },
  { id: "brand-space" as ServiceType, label: "Brand Space", color: "#E75A8E" },
  { id: "document-hub" as ServiceType, label: "Document Hub", color: "#3EB1C8" },
  { id: "s4-hana" as ServiceType, label: "S4/HANA", color: "#E5B93C" },
  { id: "ariba" as ServiceType, label: "Ariba", color: "#6BBF59" },
  { id: "cyber-space" as ServiceType, label: "Cyber Space", color: "#9B7AC7" },
  { id: "projects" as ServiceType, label: "Projects", color: "#E75A9E" },
];
