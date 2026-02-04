import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111817] text-white pt-20 pb-10 border-t border-[#f0f4f4]/10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="text-primary size-8">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-white">
                TAGOHEFO
              </h2>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">
              Tanzania Gender and Good Health Foundation is a registered NGO
              committed to social justice, gender equity, and public health
              standards across Tanzania.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "public", href: "#" }, // Placeholder for generic social/web
                { icon: "share", href: "#" }, // Placeholder for sharing
                { icon: "mail", href: "mailto:info@tagohefo.org" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-[#111817] transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-xl">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Programs", href: "/programs" },
                { label: "Leadership", href: "/leadership" },
                { label: "Resources", href: "/resources" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] opacity-50">
                      chevron_right
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-primary text-xl mt-0.5"
                >
                  location_on
                </span>
                <span>
                  Makole Street,
                  <br />
                  Dodoma, Tanzania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-primary text-xl"
                >
                  call
                </span>
                <span>+255 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-primary text-xl"
                >
                  mail
                </span>
                <span>info@tagohefo.org</span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-primary text-xl"
                >
                  schedule
                </span>
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white">Newsletter</h3>
            <p className="text-sm text-white/70">
              Subscribe to our newsletter to get the latest news and updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
              />
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-primary text-[#111817] font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <span className="material-symbols-outlined text-lg">
                  send
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {currentYear} TAGOHEFO. All rights reserved. Registered NGO.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
