import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { ProposalCard } from "@/components/ProposalCard";

const proposals = [
  { id: 1, title: "Soft Rounded Square", description: "Clean white background with colored icons (closest to reference)", style: "soft-rounded" as const },
  { id: 2, title: "Light Tinted Background", description: "Subtle color tint with icon in brand color", style: "light-tinted" as const },
  { id: 3, title: "Solid Color Square", description: "Full color background with white icon", style: "solid-color" as const },
  { id: 4, title: "Icon with Subtle Shadow", description: "White background with soft depth", style: "subtle-shadow" as const },
  { id: 5, title: "Bordered Style", description: "White background with colored border", style: "bordered" as const },
  { id: 6, title: "Soft Gradient Background", description: "Gentle gradient from white to color tint", style: "gradient" as const },
  { id: 7, title: "Icon Circle on Square", description: "Circular colored background within white square", style: "circle-on-square" as const },
  { id: 8, title: "Minimal with Accent", description: "Clean white with subtle colored accent bar", style: "minimal-accent" as const },
  { id: 9, title: "Elevated Card", description: "Floating white card with stronger shadow", style: "elevated" as const },
  { id: 10, title: "Two-Tone Split", description: "Split design with white and light color", style: "two-tone" as const },
];

export default function IconsLib() {
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
          <PageHeader title="Icons Library" />

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 py-6">
            {/* Intro */}
            <div className="mb-8">
              <p className="text-base text-gray-700 text-center leading-6">
                Based on customer reference - 10 professional variations
              </p>
            </div>

            {/* Customer Reference Section */}
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-[768px] bg-white rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_2px_4px_-2px_rgba(0,0,0,0.10)] p-6 pt-6 pb-0 flex flex-col gap-3">
                <div className="text-sm font-bold text-center text-[#314158] leading-5">
                  Customer Reference Image:
                </div>
                <div className="border border-gray-200 rounded-[10px] overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/21ec23b3376424ccc19b3e8a830a51a9f4bc5c25?width=1440"
                    alt="Customer reference icons showing various service icons"
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-xs text-gray-500 text-center leading-4 pb-6">
                  Reference style: Clean white backgrounds with colored icons
                </div>
              </div>
            </div>

            {/* Proposals Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {proposals.map((proposal) => (
                <ProposalCard
                  key={proposal.id}
                  {...proposal}
                  selected={proposal.id === 7}
                />
              ))}
            </div>

            {/* Selected Section */}
            <div className="mb-8 rounded-2xl border-2 border-[#BEDBFF] bg-[#EFF6FF] px-8 py-8 pb-0.5">
              <h3 className="text-2xl font-bold text-[#1E40AF] text-center leading-8 mb-2">
                Selected: Icon Circle on Square
              </h3>
              <p className="text-base text-[#1447E6] text-center leading-6 pb-2">
                This style is highlighted. Click another to compare or click again to deselect.
              </p>
            </div>

            {/* Design Notes Footer */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-[672px] bg-white rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] p-6 pt-6 pb-0 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#1a202c] text-center leading-[27px]">
                  Design Notes:
                </h3>
                <p className="text-sm text-[#314158] text-center leading-[22.75px] pb-2">
                  Proposal #1 &quot;Soft Rounded Square&quot; most closely matches the customer reference with clean
                  white backgrounds and colored icons. All proposals maintain a professional, corporate
                  aesthetic suitable for enterprise applications.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
