import Link from "next/link";
import { FadeIn, FadeInStagger } from "./components/FadeIn";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 pt-6 pb-12 max-w-[1360px]">
        <FadeIn>
          <div className="@container">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                role="img"
                aria-label="Tanzanian community members gathered for health awareness training session"
                className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-16 md:px-16 md:pb-24"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(16, 34, 32, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWv2MvV0X9xQkdBodnq71TvGRK29LCU_kJjYORqQgaFI4PjRF4es-hA0E7TyB0UuglCY_pHZQYI0KGI9C-6efJ2rQzqx4TUiQ2jbI47JAoV7DX9Fdg7i7mx3oH3ctZ-DpTQh1dIuKTybnY51wEbGi5H_rGJmu4O2GvuR--S89gJYxg2YMcC4ZxukzkagxtjWQg84QE_PcXjCetRbrXJXX7-uVlUUv_uG5NH6r8nUEV3W2OKRu5PXY93XDDff81hY_iEupfuQVO3RU")',
                }}
              >
                <div className="flex flex-col gap-4 max-w-[720px]">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl">
                    Building a society free from gender-based violence
                  </h1>
                  <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed">
                    Tanzania Gender and Good Health Foundation (TAGOHEFO) is
                    dedicated to health and the prevention of gender-based violence
                    across our communities. Join us in making a difference today.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link href="/contact" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#102220] text-base font-bold shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
                    Donate Now
                  </Link>
                  <Link href="/contact" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all">
                    Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* Impact Section */}
      <section className="w-full px-4 md:px-8 py-10 max-w-[1360px]">
        <FadeInStagger>
          <div className="flex flex-col gap-2 px-4 mb-8 border-l-4 border-accent-coral">
            <FadeIn>
              <h2 className="text-[#111817] text-3xl font-extrabold tracking-tight">
                Our Impact
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="text-[#4a6865] text-base">
                Measurable changes in the heart of Tanzania.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <FadeIn>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe6e5] bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                    shield_with_heart
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111817] text-xl font-bold">
                    GBV Prevention
                  </h3>
                  <p className="text-[#618986] text-sm leading-relaxed">
                    Legal aid, safe spaces, and psychological support for survivors.
                    We empower victims to become leaders of change.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe6e5] bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-coral/10 text-accent-coral">
                  <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                    medical_services
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111817] text-xl font-bold">
                    Health Awareness
                  </h3>
                  <p className="text-[#618986] text-sm leading-relaxed">
                    Promoting reproductive health, maternal care, and disease
                    prevention education across rural regions.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe6e5] bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <span aria-hidden="true" className="material-symbols-outlined text-3xl">groups_3</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111817] text-xl font-bold">
                    Community Empowerment
                  </h3>
                  <p className="text-[#618986] text-sm leading-relaxed">
                    Providing vocational resources, financial literacy training, and
                    sustainable community development programs.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </section>
      {/* Programs Preview */}
      <section className="w-full px-4 md:px-8 py-12 max-w-[1360px] mb-20">
        <FadeIn>
          <div className="bg-[#f0f4f4] rounded-2xl p-8 md:p-12 text-[#111817] relative overflow-hidden border border-[#dbe6e5]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold tracking-tight mb-8">
                Programs Preview
              </h2>
              <FadeInStagger>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <FadeIn>
                    <div className="flex flex-col gap-3">
                      <span aria-hidden="true" className="material-symbols-outlined text-[#0f766e] text-4xl">
                        diversity_1
                      </span>
                      <h4 className="font-bold text-lg">Women Mentorship</h4>
                      <p className="text-[#4a6865] text-sm">
                        Connecting experienced leaders with young women.
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="flex flex-col gap-3">
                      <span aria-hidden="true" className="material-symbols-outlined text-[#0f766e] text-4xl">
                        school
                      </span>
                      <h4 className="font-bold text-lg">Rural Education</h4>
                      <p className="text-[#4a6865] text-sm">
                        Mobile clinics and educational workshops in villages.
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="flex flex-col gap-3">
                      <span aria-hidden="true" className="material-symbols-outlined text-[#0f766e] text-4xl">
                        gavel
                      </span>
                      <h4 className="font-bold text-lg">Legal Advocacy</h4>
                      <p className="text-[#4a6865] text-sm">
                        Working with policy makers to strengthen protections.
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="flex flex-col gap-3">
                      <span aria-hidden="true" className="material-symbols-outlined text-[#0f766e] text-4xl">
                        volunteer_activism
                      </span>
                      <h4 className="font-bold text-lg">Crisis Support</h4>
                      <p className="text-[#4a6865] text-sm">
                        24/7 hotline and emergency shelter services.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </FadeInStagger>
              <div className="mt-12 flex justify-start">
                <Link href="/programs" className="text-[#0f766e] font-bold border-b-2 border-[#0f766e] pb-1 hover:text-[#111817] hover:border-[#111817] transition-all">
                  Explore All Programs →
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
