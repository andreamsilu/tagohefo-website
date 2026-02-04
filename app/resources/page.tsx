import Link from "next/link";
import { FadeIn, FadeInStagger } from "../components/FadeIn";

export default function ResourcesPage() {
  return (
    <main className="flex-1 flex flex-col items-center">
      <div className="w-full max-w-[960px] px-4">
        <FadeIn>
          <div className="flex flex-wrap gap-2 py-6">
            <Link
              className="text-[#4a6865] text-sm font-medium hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <span className="text-[#618986] text-sm font-medium">
              /
            </span>
            <span className="text-[#111817] text-sm font-medium">
              Resource Center
            </span>
          </div>
          <div className="flex flex-wrap justify-between gap-3 pb-8">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-[#111817] text-4xl font-black leading-tight tracking-[-0.033em]">
                Resource & Document Center
              </h1>
              <p className="text-[#618986] text-lg font-normal max-w-2xl">
                Access our official documents, reports, and strategic plans
                supporting GBV prevention and health in Tanzania.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="pb-6">
            <div className="flex border-b border-[#dbe6e5] gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-[#111817] pb-3 pt-4"
                href="#"
              >
                <p className="text-sm font-bold tracking-[0.015em]">
                  All Documents
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#618986] pb-3 pt-4 hover:text-primary transition-colors"
                href="#"
              >
                <p className="text-sm font-bold tracking-[0.015em]">Governance</p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#618986] pb-3 pt-4 hover:text-primary transition-colors"
                href="#"
              >
                <p className="text-sm font-bold tracking-[0.015em]">
                  Annual Reports
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#618986] pb-3 pt-4 hover:text-primary transition-colors"
                href="#"
              >
                <p className="text-sm font-bold tracking-[0.015em]">
                  Strategic Plans
                </p>
              </a>
            </div>
          </div>
        </FadeIn>
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-[#111817] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">
              Governance & legal
            </h2>
          </FadeIn>
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeIn className="h-full">
                <div className="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] bg-white hover:shadow-sm transition-shadow h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-[#0f766e]">
                      <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                        description
                      </span>
                    </div>
                    <div>
                      <p className="text-[#111817] font-bold">
                        TAGOHEFO Constitution
                      </p>
                      <p className="text-[#618986] text-xs">
                        PDF • 2.4 MB • Updated Jan 2024
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">
                      download
                    </span>
                    Download
                  </button>
                </div>
              </FadeIn>
              <FadeIn className="h-full">
                <div className="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] bg-white hover:shadow-sm transition-shadow h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-[#0f766e]">
                      <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <p className="text-[#111817] font-bold">
                        Code of Conduct
                      </p>
                      <p className="text-[#618986] text-xs">
                        PDF • 1.1 MB • Updated Feb 2024
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">
                      download
                    </span>
                    Download
                  </button>
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </section>
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-[#111817] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">
              Annual Reports
            </h2>
          </FadeIn>
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeIn className="h-full">
                <div className="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] bg-white hover:shadow-sm transition-shadow h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-[#0f766e]">
                      <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                        analytics
                      </span>
                    </div>
                    <div>
                      <p className="text-[#111817] font-bold">
                        Annual Impact Report 2023
                      </p>
                      <p className="text-[#618986] text-xs">
                        PDF • 5.8 MB • Jan 2024
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">
                      download
                    </span>
                    Download
                  </button>
                </div>
              </FadeIn>
              <FadeIn className="h-full">
                <div className="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] bg-white hover:shadow-sm transition-shadow h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-[#0f766e]">
                      <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                        analytics
                      </span>
                    </div>
                    <div>
                      <p className="text-[#111817] font-bold">
                        Financial Audit 2023
                      </p>
                      <p className="text-[#618986] text-xs">
                        PDF • 3.2 MB • Mar 2024
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">
                      download
                    </span>
                    Download
                  </button>
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </section>
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-[#111817] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">
              Strategic Plans
            </h2>
          </FadeIn>
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeIn className="h-full">
                <div className="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] bg-white hover:shadow-sm transition-shadow h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-[#0f766e]">
                      <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                        trending_up
                      </span>
                    </div>
                    <div>
                      <p className="text-[#111817] font-bold">
                        Five Year Strategic Plan (2024-2029)
                      </p>
                      <p className="text-[#618986] text-xs">
                        PDF • 4.5 MB • Updated Dec 2023
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">
                      download
                    </span>
                    Download
                  </button>
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </section>
      </div>
    </main>
  );
}
