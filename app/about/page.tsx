import { FadeIn, FadeInStagger } from "../components/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section - Full Width */}
      <FadeIn>
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#111817] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPEP5ES5AhrbefwVK_vZckmqicoTp3XkjO4K0L-_Qslp8tcWy3gMakwuuxOD2gsbFPD9x7bgJ2U2LNLM5hcpgBlkXRvNked84E3AHhgzd8H6RMS6az1qDXPx5IC8xJEdThqQrET8NOyKVaWMGZAblgWJlIX3mO6vFzng1LC49JZnNmCOm3okH7JxVNpBcJY_ME4o6T9mkD76VovlIcFvn2zeZPv_70Hyn4L2DrL7aBKD4DOigbir_5UQBH8knvbd1qBTLVymryi6g")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111817]/90 via-transparent to-[#111817]/30"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <FadeInStagger>
              <FadeIn>
                <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
                  About TAGOHEFO
                </h1>
              </FadeIn>
              <FadeIn>
                <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                  Empowering communities for a better future through gender equity and
                  sustainable health.
                </p>
              </FadeIn>
            </FadeInStagger>
          </div>
        </div>
      </FadeIn>

      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-1 w-12 bg-primary rounded-full"></span>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">
                  Who We Are
                </span>
              </div>
              <h2 className="text-[#111817] text-3xl md:text-4xl font-bold leading-tight">
                Dedicated to Justice & Health
              </h2>
              <p className="text-[#4a6865] text-lg leading-relaxed">
                Tanzania Gender and Good Health Foundation (TAGOHEFO) is a
                non-governmental organization committed to addressing gender-based
                violence and improving public health standards across Tanzania.
              </p>
              <p className="text-[#4a6865] text-lg leading-relaxed">
                We believe in a society where equity is the norm and quality
                healthcare is accessible to every individual, regardless of their
                background or circumstances.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square bg-gray-100">
              {/* Abstract decorative graphic if image is repetitive, or use a solid color block with stats */}
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center p-8">
                 <div className="text-center space-y-2">
                    <span className="material-symbols-outlined text-primary text-6xl opacity-50">groups</span>
                    <p className="text-primary font-bold text-xl">Community Focused</p>
                 </div>
              </div>
              {/* We could reuse an image here if we had another distinct one, but for now a styled block looks professional */}
              <div 
                 className="absolute inset-0 bg-cover bg-center"
                 style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPEP5ES5AhrbefwVK_vZckmqicoTp3XkjO4K0L-_Qslp8tcWy3gMakwuuxOD2gsbFPD9x7bgJ2U2LNLM5hcpgBlkXRvNked84E3AHhgzd8H6RMS6az1qDXPx5IC8xJEdThqQrET8NOyKVaWMGZAblgWJlIX3mO6vFzng1LC49JZnNmCOm3okH7JxVNpBcJY_ME4o6T9mkD76VovlIcFvn2zeZPv_70Hyn4L2DrL7aBKD4DOigbir_5UQBH8knvbd1qBTLVymryi6g")',
                    opacity: 0.2 // Faded to not compete with Hero
                 }}
              />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-primary/90 to-[#0f766e]/90 text-white">
                  <span className="text-6xl font-black mb-2">2002</span>
                  <span className="text-lg font-medium opacity-90">Registered under NGO Act</span>
                  <div className="w-16 h-1 bg-white/30 rounded-full my-6"></div>
                  <p className="text-white/90 italic">
                    "Building a future where everyone thrives."
                  </p>
               </div>
            </div>
          </FadeIn>
        </section>

        {/* Vision & Mission */}
        <section>
          <FadeIn>
             <div className="text-center mb-12">
               <h2 className="text-[#111817] text-3xl font-bold mb-4">Our Guiding Principles</h2>
               <p className="text-[#618986] max-w-2xl mx-auto">The core foundations that drive our strategies and daily operations.</p>
             </div>
          </FadeIn>
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <FadeIn className="h-full">
                <div className="bg-[#f0f4f4] p-8 md:p-10 rounded-2xl h-full border border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="bg-white size-16 rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary">
                    <span className="material-symbols-outlined text-3xl">visibility</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111817] mb-4">Our Vision</h3>
                  <p className="text-[#4a6865] text-lg leading-relaxed">
                    To see a Tanzanian society that is free from gender-based
                    violence and where every person enjoys the highest attainable
                    standard of health.
                  </p>
                </div>
              </FadeIn>
              <FadeIn className="h-full">
                <div className="bg-[#f0f4f4] p-8 md:p-10 rounded-2xl h-full border border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="bg-white size-16 rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary">
                    <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111817] mb-4">Our Mission</h3>
                  <p className="text-[#4a6865] text-lg leading-relaxed">
                    To implement sustainable programs that promote gender equality,
                    advocate for human rights, and improve healthcare delivery
                    through community engagement.
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </section>

        {/* Core Values */}
        <section>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-[#111817] text-3xl font-bold mb-4">Core Values</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeIn>
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "verified_user",
                  title: "Integrity",
                  desc: "Operating with honesty and transparency in all our actions and partnerships.",
                },
                {
                  icon: "favorite",
                  title: "Compassion",
                  desc: "Showing empathy and care for the vulnerable communities we serve every day.",
                },
                {
                  icon: "balance",
                  title: "Equality",
                  desc: "Ensuring fair treatment and equal opportunities for everyone, regardless of gender.",
                },
              ].map((value, idx) => (
                <FadeIn key={idx} className="h-full">
                  <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-[#dbe6e5] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
                    <div className="size-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-primary text-4xl">
                        {value.icon}
                      </span>
                    </div>
                    <h4 className="font-bold text-xl text-[#111817] mb-3">
                      {value.title}
                    </h4>
                    <p className="text-[#618986] leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </section>

        {/* Registration Info Footer */}
        <FadeIn>
          <div className="bg-[#f0f4f4] rounded-2xl p-8 md:p-12 text-center text-[#111817] relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-primary">verified</span>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                TAGOHEFO is a registered Non-Governmental Organization in
                Tanzania under the NGO Act of 2002.
              </p>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
