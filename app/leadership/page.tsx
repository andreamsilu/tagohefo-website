"use client";

import { FadeIn, FadeInStagger } from "../components/FadeIn";

const boardMembers = [
  {
    name: "John Doe",
    role: "Board Chairperson",
    title: "Public Health Expert",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxNuiC7j5wLV7xeN1hQeuKhqQU76Lt7b-a4yChVjo0HOtjfDV8J3y8M-jJ60pKWAWXKv6sZsfDk49g371wkX0pUrbkIpT0wL_o_Ytu8aS3GoV2B9L2A8yFGSDQnIKiqMSnE_eYSAAxbyZfqBx4vEjKz-z3UBExRLcZCvRtLajwdy4vKY5oyCZCtfGq8KPaPx_gHiM4eGFwgnVSHZHrOly_9V3VAxGp1LpHBI8Ca_nHUkmdf1x-IyUVpforbYPWzGDiMYei7ECulj8",
    bio: "John brings over 20 years of experience in public health administration, having served in various capacities across East Africa. His strategic vision guides TAGOHEFO's long-term goals.",
  },
  {
    name: "Jane Smith",
    role: "Board Secretary",
    title: "Legal Advocate",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLFadPKPee1qwxmUIVsrknpxGDBw6xO8yRKuNkypC_EcCBPu1McV_o9eQoVu3TIfCH_IaO16nfGcNyVfW2EdoqQEwPzDROQtRsqR3ipASFm-0HPQ5RBnjvQ_K9b0YrQ-o05NpVE7qR5rF_CFqCdyzCNf-xOwFGvvusW6f2BlsiwIZzR3Od1FAO-DEsNCj80UCvNHTNecp9QMfDAF-t5DWDv8B-yjDj4vGv_HLf-XA3pTwqC01zC0pE9GxDYytEb0kwWEt-eMtd1OU",
    bio: "A dedicated human rights lawyer, Jane ensures our operations comply with all legal frameworks and advocates for policy changes that protect vulnerable populations.",
  },
  {
    name: "Dr. Michael Brown",
    role: "Board Member",
    title: "Global Health Advisor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD61hBQZsrU1OcQm7BItDpEui022gL3ZOmbyUkYfgna6zsZThCzKC9nuat3PgSaXKhkA3IVmlnTF-59I9CW86tpyOFxyxYDMZ_qv8_pWKXZbQM8JapgElUWDcJokU-KsjkIenxyVuQNjaMrN-VxCaIRV2YZnff8-hVo80G9oMX5ZZbyrBi2JRuuP9A079O6wtrJoieYQqBKuZsVFiBXsAv4-SKiW-XUS4N5e7QOf_VghTcxkuM4j8YezAiaRBpPdnoFqmgWh6EfpZQ",
    bio: "Dr. Brown offers expertise in epidemiology and global health funding, helping connect TAGOHEFO with international partners and evidence-based practices.",
  },
  {
    name: "Grace Mvungi",
    role: "Board Member",
    title: "Social Services Liaison",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4VZDVfEsGUfcTB2ocHYRIXJIW-Wyin0M4xd7lK4KfMHYALFVdULyEiqfpM5ww4FzPfLN_JD0bSYJg-5Qy0OJRbEFrb8-r_-9TqaUQ4FPS018VJt-mZF7zYd1vEXjQI-A6mtYwIOETWOnRPQur-Cfg9XkRStWSmZkH96uAMOLHID63Ls6WWagcGcFnKjEZmuI6lOO28ch6zC3SSGSTrjOECmxqwpI5rCiZw4Q4gg4TRqazLlqA2q6vcAJt48vp2tkcQzYqaJ7V4j8",
    bio: "With deep roots in community organizing, Grace ensures our programs remain culturally relevant and accessible to those who need them most.",
  },
];

const managementTeam = [
  {
    name: "Fatuma Salum",
    role: "Executive Director",
    title: "15+ years experience",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv4iOpmGW1UOTfliYjDDcefuCBrSfuP4f9yjd-1QkT07UeHUBDO9CgrFG-bT6Ag7VqnkPJXxO6vqe25Zc2Pig2qUXhlsAkHXxvvDImdjlXu9c69CaOKtE35WlbyKJ3NlSfKgkF0XkJKmnZGrN1LzDhI4qhK9h7cX1UPaxKPWIr-G79Gk3Jf9KoSc2hIYOM2x1sNEe4gM9j8TrB5vPtG5Ty4VGtLTXm8hPwFpXh14oxrbsBJ216MxadiWgnancvDZw6WSLGMtSpVB4",
  },
  {
    name: "Emmanuel Peter",
    role: "Finance & Operations",
    title: "Financial Strategist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMkzmtOtJ2jxhwWvtH8JAKRmxSUjIH5reJTex9CAMBpmYrT9--TAj_2JQdPMRYpYCLx7CPdJlhWoWldZmg--GeBLwnXUi7M8mDA6ndhGzj_cVmEXy-uOpYrDVRBiwD5jQf5SVZUg7I7UEGk7gd214YZmUwK05gTm1aUSWnhXXtWfYwPwxsS-bXgPTWGDuWFligNF7KKb-BbMOCajCJmxMEt_6MF68fiAbXAdsoKpop47vULz8C2brzh_VPWhxCZXSDel1eP-TYpHY",
  },
  {
    name: "Dr. Amina Juma",
    role: "Program Coordinator",
    title: "Community Outreach Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy13iifTkr-m8tdPSlsTUU2f15_2dNBjpmH4BdJ5y5zBOFp3phJZB-9mDPELKxphU29bxGBx9B4jrxW4TCfo_n4qdJuV5bE1BR-ktH_E9iu4HQeNjebSyqbDpVBJkuM0qKucVZWowNyR1ZSA5-83xqv8DmiFcEtL3kstvRA-6zIP-FpNQIfhLO9aR0gfk_v50hmHrJOeVW2jLXEbrf0R74Fn9e97LJLfQmuXmTvJY5KUdP3p1ORXA1hgo5pQwG4HX7hqLBW0yOoCs",
  },
];

export default function LeadershipPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="w-full flex justify-center bg-white py-10 px-4 md:px-8">
        <div className="max-w-[1200px] w-full flex flex-col gap-10">
          {/* Hero Section */}
          <FadeIn>
            <div className="@container">
              <div className="relative rounded-xl overflow-hidden min-h-[300px] flex flex-col justify-end bg-[#f0f4f4]">
                <div
                  role="img"
                  aria-label="Tanzanian community leaders standing together"
                  className="absolute inset-0 opacity-40 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgrY-CNOyUUFogDiW1tIwj34QGVwr4QM-F43F9cVGk40uWZPcGgOMAyP0D35Rehiu8v7giWSQnmV8K9F7CDhdpsEVAAWbE7b6-h-3Njk8uYRJpBw7nroGYouIwpAkG3wl7TQhnhcgFjLogM29IvRwcAbeOZzLlGP1CpEFW6qkuoQ_pMxjof3s2MYKqLQ72Uae3y3rYsnGgMvLdKW0sC04pYR5gbjM9I6YoLC0DUaC2SsNw3gpZzo5kVwlOFqROq14-DrIj7-wMzXk')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
                <div className="relative p-8 md:p-12 z-10 max-w-2xl">
                  <h1 className="text-[#111817] text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                    Leadership & Governance
                  </h1>
                  <p className="text-[#0f766e] text-lg font-medium">
                    Committed to integrity, gender equality, and sustainable
                    health impact in Tanzania.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Intro Text */}
          <FadeIn>
            <div className="px-4">
              <p className="text-[#4a6865] text-lg leading-relaxed max-w-3xl">
                Our leadership team brings decades of experience in public health,
                human rights, and social justice. We operate with a commitment to
                transparency and community-driven impact, ensuring every initiative
                supports GBV prevention and holistic healthcare.
              </p>
            </div>
          </FadeIn>

          {/* Organizational Structure Sketch */}
          <section>
            <FadeIn>
              <div className="flex items-center gap-3 px-4 border-l-4 border-primary mb-8">
                <h2 className="text-[#111817] text-2xl font-bold leading-tight">
                  Organizational Structure
                </h2>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#dbe6e5] flex flex-col items-center">
                {/* Board Level */}
                <div className="flex flex-col items-center gap-2 mb-8 relative z-10">
                  <div className="bg-[#111817] text-white px-8 py-3 rounded-lg font-bold shadow-md">
                    Board of Directors
                  </div>
                  <div className="text-xs text-[#618986]">Governance & Strategy</div>
                </div>

                {/* Connector Line 1 */}
                <div className="h-8 w-0.5 bg-[#dbe6e5] -mt-8 mb-0"></div>

                {/* Executive Level */}
                <div className="flex flex-col items-center gap-2 mb-8 relative z-10">
                  <div className="bg-primary text-[#111817] px-8 py-3 rounded-lg font-bold shadow-md border border-primary/20">
                    Executive Director
                  </div>
                  <div className="text-xs text-[#618986]">Operations & Implementation</div>
                </div>

                {/* Connector Line 2 */}
                <div className="h-8 w-0.5 bg-[#dbe6e5] -mt-8 mb-0"></div>

                {/* Horizontal Bar */}
                <div className="w-full max-w-2xl h-0.5 bg-[#dbe6e5] mb-8 relative">
                   <div className="absolute left-0 top-0 h-4 w-0.5 bg-[#dbe6e5]"></div>
                   <div className="absolute right-0 top-0 h-4 w-0.5 bg-[#dbe6e5]"></div>
                   <div className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-0.5 bg-[#dbe6e5]"></div>
                </div>

                {/* Departments */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-center -mt-4">
                   <div className="flex flex-col items-center">
                      <div className="bg-white border border-[#dbe6e5] text-[#111817] px-6 py-3 rounded-lg font-bold shadow-sm w-full">
                        Programs
                      </div>
                      <p className="text-xs text-[#618986] mt-2">Health, GBV, Education</p>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="bg-white border border-[#dbe6e5] text-[#111817] px-6 py-3 rounded-lg font-bold shadow-sm w-full">
                        Finance & Admin
                      </div>
                      <p className="text-xs text-[#618986] mt-2">HR, Compliance, Grants</p>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="bg-white border border-[#dbe6e5] text-[#111817] px-6 py-3 rounded-lg font-bold shadow-sm w-full">
                        M&E and Learning
                      </div>
                      <p className="text-xs text-[#618986] mt-2">Data, Impact, Reporting</p>
                   </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Board of Directors Section */}
          <section>
            <FadeIn>
              <div className="flex items-center gap-3 px-4 border-l-4 border-primary mb-6">
                <h2 className="text-[#111817] text-2xl font-bold leading-tight">
                  Board of Directors
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {boardMembers.map((member, index) => (
                  <FadeIn key={index} className="h-full">
                    <div className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-transparent hover:border-primary/20 h-full">
                      <div
                        role="img"
                        aria-label={`Portrait of ${member.name}`}
                        className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url("${member.image}")`,
                        }}
                      ></div>
                      <div className="p-4 bg-white flex flex-col flex-1">
                        <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                          {member.role}
                        </p>
                        <p className="text-[#111817] text-lg font-bold">
                          {member.name}
                        </p>
                        <p className="text-[#618986] text-sm mt-1 font-medium">
                          {member.title}
                        </p>
                        <p className="text-[#618986] text-xs mt-3 leading-relaxed opacity-80">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </section>

          {/* Management Team Section */}
          <section className="pb-20">
            <FadeIn>
              <div className="flex items-center gap-3 px-4 border-l-4 border-primary mb-6">
                <h2 className="text-[#111817] text-2xl font-bold leading-tight">
                  Management Team
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {managementTeam.map((member, index) => (
                  <FadeIn key={index} className="h-full">
                    <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-[#f0f4f4] h-full hover:border-primary/30 transition-colors">
                      <div
                        role="img"
                        aria-label={`${member.role} Portrait`}
                        className="size-20 bg-cover bg-center rounded-lg flex-shrink-0"
                        style={{
                          backgroundImage: `url("${member.image}")`,
                        }}
                      ></div>
                      <div className="flex flex-col">
                        <p className="text-[#111817] font-bold text-lg">
                          {member.name}
                        </p>
                        <p className="text-primary text-sm font-semibold">
                          {member.role}
                        </p>
                        <p className="text-[#618986] text-xs mt-1 italic">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </section>
        </div>
      </div>
    </main>
  );
}
