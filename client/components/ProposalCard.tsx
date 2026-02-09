import React from "react";
import { ServiceIcon, serviceData, ServiceType } from "@/components/ServiceIcons";
import { cn } from "@/lib/utils";

export type ProposalStyle =
  | "soft-rounded"
  | "light-tinted"
  | "solid-color"
  | "subtle-shadow"
  | "bordered"
  | "gradient"
  | "circle-on-square"
  | "minimal-accent"
  | "elevated"
  | "two-tone";

interface ProposalCardProps {
  id: number;
  title: string;
  description: string;
  style: ProposalStyle;
  selected?: boolean;
}

export const ProposalCard: React.FC<ProposalCardProps> = ({
  id,
  title,
  description,
  style,
  selected = false,
}) => {
  const renderServiceIcon = (service: (typeof serviceData)[0], index: number) => {
    const baseIconClasses = "w-8 h-8";

    switch (style) {
      case "soft-rounded":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]">
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "light-tinted":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]"
              style={{ backgroundColor: `${service.color}14` }}
            >
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "solid-color":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-[0_2px_4px_0_rgba(0,0,0,0.10)]"
              style={{ backgroundColor: service.color }}
            >
              <ServiceIcon type={service.id} className={baseIconClasses} color="white" />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "subtle-shadow":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.10)]">
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "bordered":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border-2"
              style={{ borderColor: service.color }}
            >
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "gradient":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-white shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]">
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "circle-on-square":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full"
                style={{ backgroundColor: service.color }}
              >
                <ServiceIcon type={service.id} className="w-6 h-6" color="white" />
              </div>
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "minimal-accent":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div className="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] overflow-hidden">
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
              <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: service.color }} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "elevated":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_8px_16px_0_rgba(0,0,0,0.12)]">
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      case "two-tone":
        return (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-b from-white from-60% to-white to-60% shadow-[0_2px_4px_0_rgba(0,0,0,0.08)] overflow-hidden">
              <ServiceIcon type={service.id} className={baseIconClasses} color={service.color} />
            </div>
            <div className="text-center text-xs leading-[15px] text-[#314158]">{service.label}</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-5 p-6 pb-0.5 rounded-2xl bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] border-2 border-transparent",
        selected && "border-[#3B82F6]"
      )}
    >
      <div className="flex items-center justify-between h-12">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-bold leading-7 text-[#1a202c]">
            {id}. {title}
          </h2>
          <p className="text-sm leading-5 text-[#314158]">{description}</p>
        </div>
        {selected && (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3B82F6]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33301 8.66663L5.99967 11.3333L12.6663 4.66663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-x-3 gap-y-7 md:grid-cols-7">
        {serviceData.map((service, index) => renderServiceIcon(service, index))}
      </div>
    </div>
  );
};
