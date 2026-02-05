import { FadeIn, FadeInStagger } from "../components/FadeIn";

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Header */}
      <FadeIn>
        <div className="w-full max-w-[1200px] mx-auto pt-8 px-4">
          <div
            role="img"
            aria-label="Aerial view of a vibrant Tanzanian community landscape"
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[280px] relative"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBBiOWab0BBIBlteKKh2Yl_Ag2KFk-Zt8hbhRy2XhscjMqIhgPJGZs0_QRiyT3SWJsAxEDy9scqvzGF1CVp74mRCurwmhgOD2e5CQOkMsC10buQ6ahkS6GkQY99QQKIMQQDlh9qkRrPI8CioSeP40GVTEP62BhYPB-FCuUwX8WFXSdXrN0BdU4t5RYZM7O71ZOTOampaQ8TG3PobEp2O00dLAhUV0y5lGX3fubxSG2UjdlimPdM5I5tqJ9a3srBhOJwPj4LgE95xU")',
            }}
          >
            <div className="flex p-8">
              <FadeIn>
                <h1 className="text-white text-5xl font-black leading-tight tracking-tight font-display">
                  Contact Us
                </h1>
              </FadeIn>
            </div>
          </div>
        </div>
      </FadeIn>
      {/* Page Intro */}
      <FadeInStagger>
        <div className="max-w-[1200px] mx-auto py-10 px-4">
          <div className="flex flex-col gap-3">
            <FadeIn>
              <p className="text-[#111817] text-4xl font-black leading-tight tracking-[-0.033em] font-display">
                Get in Touch
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-[#4a6865] text-lg font-normal leading-normal max-w-2xl">
                We are here to support GBV prevention and good health in Tanzania.
                Reach out to our team for partnerships, support, or inquiries.
              </p>
            </FadeIn>
          </div>
        </div>
      </FadeInStagger>
      {/* Contact Grid */}
      <FadeInStagger>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 pb-20">
          {/* Left: Contact Form */}
          <FadeIn className="h-full">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#dbe6e5] h-full">
              <h3 className="text-2xl font-bold mb-6 font-display">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#111817] text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    className="form-input w-full rounded-lg border-[#dbe6e5] bg-background-light h-14 p-4 text-base focus:ring-primary focus:border-primary"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#111817] text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    className="form-input w-full rounded-lg border-[#dbe6e5] bg-background-light h-14 p-4 text-base focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#111817] text-sm font-semibold">
                    Subject
                  </label>
                  <select className="form-select w-full rounded-lg border-[#dbe6e5] bg-background-light h-14 p-4 text-base focus:ring-primary focus:border-primary">
                    <option>General Inquiry</option>
                    <option>Program Support</option>
                    <option>Partnership</option>
                    <option>Donation Information</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#111817] text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-textarea w-full rounded-lg border-[#dbe6e5] bg-background-light p-4 text-base focus:ring-primary focus:border-primary"
                    placeholder="How can we help you?"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-accent hover:bg-opacity-90 text-white font-bold py-4 rounded-lg transition-all shadow-md"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
          {/* Right: Info & Map */}
          <FadeIn className="h-full">
            <div className="flex flex-col gap-8 h-full">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-[#0f766e] shrink-0">
                    <span aria-hidden="true" className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display">
                      Physical Address
                    </h4>
                    <p className="text-[#618986]">
                      Makole Street,
                      <br />
                      Dodoma, Tanzania
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-[#0f766e] shrink-0">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display">
                      Phone Numbers
                    </h4>
                    <p className="text-[#618986]">
                      +255 000 000 000
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-[#0f766e] shrink-0">
                    <span aria-hidden="true" className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display">Email Us</h4>
                    <p className="text-[#618986]">
                      info@tagohefo.org
                    </p>
                    <p className="text-[#618986]">
                      support@tagohefo.org
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="text-lg font-bold font-display mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    <a
                      aria-label="Share on social media"
                      className="flex items-center justify-center size-10 rounded-full bg-primary text-[#111817] hover:scale-110 transition-transform"
                      href="#"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                        share
                      </span>
                    </a>
                    <a
                      aria-label="Visit our website"
                      className="flex items-center justify-center size-10 rounded-full bg-[#3b5998] text-white hover:scale-110 transition-transform"
                      href="#"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                        public
                      </span>
                    </a>
                    <a
                      aria-label="View our photos"
                      className="flex items-center justify-center size-10 rounded-full bg-[#E1306C] text-white hover:scale-110 transition-transform"
                      href="#"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                        photo_camera
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Map Embed */}
              <div className="w-full h-[300px] rounded-xl overflow-hidden border border-[#dbe6e5] shadow-inner relative mt-auto">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Makole+Street,+Dodoma,+Tanzania&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  title="TAGOHEFO Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </FadeInStagger>
    </main>
  );
}
