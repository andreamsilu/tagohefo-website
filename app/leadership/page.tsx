import { FadeIn, FadeInStagger } from "../components/FadeIn";

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
                {/* Board Member 1 */}
                <FadeIn className="h-full">
                  <div className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-transparent hover:border-primary/20 h-full">
                    <div
                      role="img"
                      aria-label="Portrait of Chairperson John Doe"
                      className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxNuiC7j5wLV7xeN1hQeuKhqQU76Lt7b-a4yChVjo0HOtjfDV8J3y8M-jJ60pKWAWXKv6sZsfDk49g371wkX0pUrbkIpT0wL_o_Ytu8aS3GoV2B9L2A8yFGSDQnIKiqMSnE_eYSAAxbyZfqBx4vEjKz-z3UBExRLcZCvRtLajwdy4vKY5oyCZCtfGq8KPaPx_gHiM4eGFwgnVSHZHrOly_9V3VAxGp1LpHBI8Ca_nHUkmdf1x-IyUVpforbYPWzGDiMYei7ECulj8")',
                      }}
                    ></div>
                    <div className="p-4 bg-white flex flex-col flex-1">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                        Board Chairperson
                      </p>
                      <p className="text-[#111817] text-lg font-bold">
                        John Doe
                      </p>
                      <p className="text-[#618986] text-sm mt-1">
                        Public Health Expert
                      </p>
                    </div>
                  </div>
                </FadeIn>
                {/* Board Member 2 */}
                <FadeIn className="h-full">
                  <div className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-transparent hover:border-primary/20 h-full">
                    <div
                      role="img"
                      aria-label="Portrait of Secretary Jane Smith"
                      className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLFadPKPee1qwxmUIVsrknpxGDBw6xO8yRKuNkypC_EcCBPu1McV_o9eQoVu3TIfCH_IaO16nfGcNyVfW2EdoqQEwPzDROQtRsqR3ipASFm-0HPQ5RBnjvQ_K9b0YrQ-o05NpVE7qR5rF_CFqCdyzCNf-xOwFGvvusW6f2BlsiwIZzR3Od1FAO-DEsNCj80UCvNHTNecp9QMfDAF-t5DWDv8B-yjDj4vGv_HLf-XA3pTwqC01zC0pE9GxDYytEb0kwWEt-eMtd1OU")',
                      }}
                    ></div>
                    <div className="p-4 bg-white flex flex-col flex-1">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                        Board Secretary
                      </p>
                      <p className="text-[#111817] text-lg font-bold">
                        Jane Smith
                      </p>
                      <p className="text-[#618986] text-sm mt-1">
                        Legal Advocate
                      </p>
                    </div>
                  </div>
                </FadeIn>
                {/* Board Member 3 */}
                <FadeIn className="h-full">
                  <div className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-transparent hover:border-primary/20 h-full">
                    <div
                      role="img"
                      aria-label="Portrait of Dr. Michael Brown"
                      className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD61hBQZsrU1OcQm7BItDpEui022gL3ZOmbyUkYfgna6zsZThCzKC9nuat3PgSaXKhkA3IVmlnTF-59I9CW86tpyOFxyxYDMZ_qv8_pWKXZbQM8JapgElUWDcJokU-KsjkIenxyVuQNjaMrN-VxCaIRV2YZnff8-hVo80G9oMX5ZZbyrBi2JRuuP9A079O6wtrJoieYQqBKuZsVFiBXsAv4-SKiW-XUS4N5e7QOf_VghTcxkuM4j8YezAiaRBpPdnoFqmgWh6EfpZQ")',
                      }}
                    ></div>
                    <div className="p-4 bg-white flex flex-col flex-1">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                        Board Member
                      </p>
                      <p className="text-[#111817] text-lg font-bold">
                        Dr. Michael Brown
                      </p>
                      <p className="text-[#618986] text-sm mt-1">
                        Global Health Advisor
                      </p>
                    </div>
                  </div>
                </FadeIn>
                {/* Board Member 4 */}
                <FadeIn className="h-full">
                  <div className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-transparent hover:border-primary/20 h-full">
                    <div
                      role="img"
                      aria-label="Portrait of Grace Mvungi"
                      className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4VZDVfEsGUfcTB2ocHYRIXJIW-Wyin0M4xd7lK4KfMHYALFVdULyEiqfpM5ww4FzPfLN_JD0bSYJg-5Qy0OJRbEFrb8-r_-9TqaUQ4FPS018VJt-mZF7zYd1vEXjQI-A6mtYwIOETWOnRPQur-Cfg9XkRStWSmZkH96uAMOLHID63Ls6WWagcGcFnKjEZmuI6lOO28ch6zC3SSGSTrjOECmxqwpI5rCiZw4Q4gg4TRqazLlqA2q6vcAJt48vp2tkcQzYqaJ7V4j8")',
                      }}
                    ></div>
                    <div className="p-4 bg-white flex flex-col flex-1">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                        Board Member
                      </p>
                      <p className="text-[#111817] text-lg font-bold">
                        Grace Mvungi
                      </p>
                      <p className="text-[#618986] text-sm mt-1">
                        Social Services Liaison
                      </p>
                    </div>
                  </div>
                </FadeIn>
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
                {/* Manager 1 */}
                <FadeIn className="h-full">
                  <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-[#f0f4f4] h-full">
                    <div
                      role="img"
                      aria-label="Executive Director Portrait"
                      className="size-20 bg-cover bg-center rounded-lg flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv4iOpmGW1UOTfliYjDDcefuCBrSfuP4f9yjd-1QkT07UeHUBDO9CgrFG-bT6Ag7VqnkPJXxO6vqe25Zc2Pig2qUXhlsAkHXxvvDImdjlXu9c69CaOKtE35WlbyKJ3NlSfKgkF0XkJKmnZGrN1LzDhI4qhK9h7cX1UPaxKPWIr-G79Gk3Jf9KoSc2hIYOM2x1sNEe4gM9j8TrB5vPtG5Ty4VGtLTXm8hPwFpXh14oxrbsBJ216MxadiWgnancvDZw6WSLGMtSpVB4")',
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="text-[#111817] font-bold text-lg">
                        Fatuma Salum
                      </p>
                      <p className="text-primary text-sm font-semibold">
                        Executive Director
                      </p>
                      <p className="text-[#618986] text-xs mt-1 italic">
                        15+ years experience
                      </p>
                    </div>
                  </div>
                </FadeIn>
                {/* Manager 2 */}
                <FadeIn className="h-full">
                  <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-[#f0f4f4] h-full">
                    <div
                      role="img"
                      aria-label="Finance Manager Portrait"
                      className="size-20 bg-cover bg-center rounded-lg flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMkzmtOtJ2jxhwWvtH8JAKRmxSUjIH5reJTex9CAMBpmYrT9--TAj_2JQdPMRYpYCLx7CPdJlhWoWldZmg--GeBLwnXUi7M8mDA6ndhGzj_cVmEXy-uOpYrDVRBiwD5jQf5SVZUg7I7UEGk7gd214YZmUwK05gTm1aUSWnhXXtWfYwPwxsS-bXgPTWGDuWFligNF7KKb-BbMOCajCJmxMEt_6MF68fiAbXAdsoKpop47vULz8C2brzh_VPWhxCZXSDel1eP-TYpHY")',
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="text-[#111817] font-bold text-lg">
                        Emmanuel Peter
                      </p>
                      <p className="text-primary text-sm font-semibold">
                        Finance & Operations
                      </p>
                      <p className="text-[#618986] text-xs mt-1 italic">
                        Financial Strategist
                      </p>
                    </div>
                  </div>
                </FadeIn>
                {/* Manager 3 */}
                <FadeIn className="h-full">
                  <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-[#f0f4f4] h-full">
                    <div
                      role="img"
                      aria-label="Program Manager Portrait"
                      className="size-20 bg-cover bg-center rounded-lg flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAy13iifTkr-m8tdPSlsTUU2f15_2dNBjpmH4BdJ5y5zBOFp3phJZB-9mDPELKxphU29bxGBx9B4jrxW4TCfo_n4qdJuV5bE1BR-ktH_E9iu4HQeNjebSyqbDpVBJkuM0qKucVZWowNyR1ZSA5-83xqv8DmiFcEtL3kstvRA-6zIP-FpNQIfhLO9aR0gfk_v50hmHrJOeVW2jLXEbrf0R74Fn9e97LJLfQmuXmTvJY5KUdP3p1ORXA1hgo5pQwG4HX7hqLBW0yOoCs")',
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="text-[#111817] font-bold text-lg">
                        Dr. Amina Juma
                      </p>
                      <p className="text-primary text-sm font-semibold">
                        Program Coordinator
                      </p>
                      <p className="text-[#618986] text-xs mt-1 italic">
                        Community Outreach Lead
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeInStagger>
          </section>
        </div>
      </div>
    </main>
  );
}
