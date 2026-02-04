import Link from "next/link";
import { FadeIn, FadeInStagger } from "../components/FadeIn";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Gender Based Violence Prevention",
      description:
        "Breaking the silence through community education, safe houses, and legal support for survivors of physical, emotional, and economic abuse.",
      icon: "shield_with_heart",
      colorClass: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
      borderClass: "hover:border-rose-200",
    },
    {
      title: "Women & Children Protection",
      description:
        "Ensuring a safe environment through legal advocacy, educational sponsorship, and empowerment programs for vulnerable women and youth.",
      icon: "family_restroom",
      colorClass: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      borderClass: "hover:border-purple-200",
    },
    {
      title: "Health Awareness",
      description:
        "Promoting wellness through HIV/AIDS counseling, TB screening awareness, and nutritional guidance for families in rural regions.",
      icon: "vital_signs",
      colorClass: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
      borderClass: "hover:border-teal-200",
    },
    {
      title: "Good Governance",
      description:
        "Encouraging transparency and accountability in local leadership to ensure resources are used effectively for the benefit of the community.",
      icon: "gavel",
      colorClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      borderClass: "hover:border-blue-200",
    },
    {
      title: "Environmental Health",
      description:
        "Advocating for clean water access and sustainable practices to prevent water-borne diseases and promote a healthy living environment.",
      icon: "eco",
      colorClass: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      borderClass: "hover:border-green-200",
    },
    {
      title: "Economic Empowerment",
      description:
        "Providing vocational training and micro-finance guidance to help women achieve financial independence and stability.",
      icon: "payments",
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
      borderClass: "hover:border-amber-200",
    },
  ];

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section - Full Width */}
      <FadeIn>
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#111817] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWv2MvV0X9xQkdBodnq71TvGRK29LCU_kJjYORqQgaFI4PjRF4es-hA0E7TyB0UuglCY_pHZQYI0KGI9C-6efJ2rQzqx4TUiQ2jbI47JAoV7DX9Fdg7i7mx3oH3ctZ-DpTQh1dIuKTybnY51wEbGi5H_rGJmu4O2GvuR--S89gJYxg2YMcC4ZxukzkagxtjWQg84QE_PcXjCetRbrXJXX7-uVlUUv_uG5NH6r8nUEV3W2OKRu5PXY93XDDff81hY_iEupfuQVO3RU")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111817] via-transparent to-[#111817]/50"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-coral animate-pulse"></span>
              Transforming Communities
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
              Our Programs & Initiatives
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              We work at the heart of communities in Tanzania, providing essential
              health awareness and advocating for fundamental human rights.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Main Content */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24">
        
        {/* Intro / Impact Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-1 w-12 bg-primary rounded-full"></span>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">
                  Holistic Approach
                </span>
              </div>
              <h2 className="text-[#111817] text-3xl md:text-4xl font-bold leading-tight">
                Driving Sustainable Change
              </h2>
              <p className="text-[#4a6865] text-lg leading-relaxed">
                Our programs are designed not just to address immediate needs, but to build
                long-term resilience. By integrating health, legal support, and economic
                empowerment, we create a comprehensive safety net for the most vulnerable.
              </p>
              <ul className="space-y-4 mt-4">
                {[
                  "Community-led interventions",
                  "Evidence-based health practices",
                  "Advocacy for policy change"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#111817] font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          
          <FadeInStagger>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Regions Served", value: "5+", icon: "map" },
                { label: "Lives Impacted", value: "10k+", icon: "diversity_3" },
                { label: "Active Programs", value: "6", icon: "category" },
                { label: "Years of Service", value: "20+", icon: "history" }
              ].map((stat, i) => (
                <FadeIn key={i}>
                  <div className="bg-[#f0f4f4] p-6 rounded-2xl text-center hover:bg-primary/5 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl mb-2">{stat.icon}</span>
                    <div className="text-3xl font-black text-[#111817] mb-1">{stat.value}</div>
                    <div className="text-[#618986] text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </section>

        {/* Programs Grid */}
        <section>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-[#111817] text-3xl md:text-4xl font-bold mb-4">Key Areas of Focus</h2>
              <p className="text-[#618986] max-w-2xl mx-auto text-lg">
                Explore the specific initiatives we implement to achieve our vision of a healthy and equitable society.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, idx) => (
                <FadeIn key={idx} className="h-full">
                  <div className={`group flex flex-col h-full bg-white rounded-2xl p-8 border border-[#dbe6e5] shadow-sm hover:shadow-xl transition-all duration-300 ${program.borderClass} relative overflow-hidden`}>
                    {/* Top decoration */}
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                       <span className="material-symbols-outlined text-[120px] leading-none text-current">
                          {program.icon}
                       </span>
                    </div>

                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${program.colorClass}`}>
                      <span className="material-symbols-outlined text-3xl">
                        {program.icon}
                      </span>
                    </div>
                    
                    <h3 className="text-[#111817] text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    
                    <p className="text-[#618986] leading-relaxed mb-6 flex-grow">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                      Learn more <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </section>

        {/* CTA Section */}
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden bg-primary">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-[#111817] text-3xl md:text-4xl font-black mb-4">
                  Ready to Support Our Mission?
                </h2>
                <p className="text-[#111817]/80 text-lg font-medium">
                  Your contribution helps us reach more communities in Tanzania, providing medical care, legal aid, and safety to those who need it most.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-[#111817] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-black hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>Donate Now</span>
                  <span className="material-symbols-outlined text-xl">volunteer_activism</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white/20 backdrop-blur-md border border-[#111817]/10 text-[#111817] rounded-xl font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}
