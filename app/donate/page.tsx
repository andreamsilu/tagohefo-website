"use client";

import Link from "next/link";
import { FadeIn, FadeInStagger } from "../components/FadeIn";

export default function DonatePage() {
  return (
    <main className="flex-1 flex flex-col items-center bg-white">
      {/* Hero Section */}
      <section className="w-full">
        <FadeIn>
          <div className="relative overflow-hidden">
            <div
              role="img"
              aria-label="Happy children benefiting from community support"
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 py-20 text-center"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(17, 24, 23, 0.7), rgba(17, 24, 23, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgrY-CNOyUUFogDiW1tIwj34QGVwr4QM-F43F9cVGk40uWZPcGgOMAyP0D35Rehiu8v7giWSQnmV8K9F7CDhdpsEVAAWbE7b6-h-3Njk8uYRJpBw7nroGYouIwpAkG3wl7TQhnhcgFjLogM29IvRwcAbeOZzLlGP1CpEFW6qkuoQ_pMxjof3s2MYKqLQ72Uae3y3rYsnGgMvLdKW0sC04pYR5gbjM9I6YoLC0DUaC2SsNw3gpZzo5kVwlOFqROq14-DrIj7-wMzXk")',
              }}
            >
              <FadeInStagger>
                <FadeIn>
                  <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
                    Support Our Mission
                  </h1>
                </FadeIn>
                <FadeIn>
                  <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    Your contribution helps us build a society free from gender-based violence and ensures better health for all.
                  </p>
                </FadeIn>
              </FadeInStagger>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Donation Options Section */}
      <section className="w-full px-4 md:px-8 py-20 max-w-[1200px]">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Ways to Give
            </span>
            <h2 className="text-[#111817] text-3xl md:text-4xl font-black tracking-tight mb-6">
              Make a Difference Today
            </h2>
            <p className="text-[#4a6865] text-lg">
              Choose the donation method that works best for you. Every shilling counts towards empowering communities.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bank Transfer */}
            <FadeIn>
              <div className="bg-[#f0f4f4] rounded-2xl p-8 border border-[#dbe6e5] h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111817]">Bank Transfer</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-100">
                    <p className="text-sm text-[#618986] font-bold uppercase tracking-wider mb-1">Bank Name</p>
                    <p className="text-[#111817] font-semibold text-lg">CRDB Bank</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100">
                    <p className="text-sm text-[#618986] font-bold uppercase tracking-wider mb-1">Account Name</p>
                    <p className="text-[#111817] font-semibold text-lg">TAGOHEFO</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100">
                    <p className="text-sm text-[#618986] font-bold uppercase tracking-wider mb-1">Account Number</p>
                    <p className="text-[#111817] font-mono text-xl font-bold">0150XXXXXXX</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100">
                    <p className="text-sm text-[#618986] font-bold uppercase tracking-wider mb-1">Swift Code</p>
                    <p className="text-[#111817] font-mono text-lg">CORUTZ</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Mobile Money */}
            <FadeIn>
              <div className="bg-[#f0f4f4] rounded-2xl p-8 border border-[#dbe6e5] h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">phone_iphone</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111817]">Mobile Money</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#618986] font-bold uppercase tracking-wider mb-1">M-Pesa</p>
                      <p className="text-[#111817] font-mono text-xl font-bold">+255 743 330 373</p>
                    </div>
                    <div className="h-10 w-16 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">Vodacom</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#618986] font-bold uppercase tracking-wider mb-1">Tigo Pesa</p>
                      <p className="text-[#111817] font-mono text-xl font-bold">+255 713 XXX XXX</p>
                    </div>
                    <div className="h-10 w-16 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">Tigo</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#618986] font-bold uppercase tracking-wider mb-1">Airtel Money</p>
                      <p className="text-[#111817] font-mono text-xl font-bold">+255 784 XXX XXX</p>
                    </div>
                    <div className="h-10 w-16 bg-red-500 rounded flex items-center justify-center text-white font-bold text-xs">Airtel</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </section>

      {/* Impact Statement */}
      <section className="w-full bg-[#111817] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Where Your Money Goes
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/20 text-primary flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Education & Training</h3>
                      <p className="text-white/70">Funding workshops, educational materials, and vocational training for women and youth.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/20 text-primary flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined">medical_services</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Health Services</h3>
                      <p className="text-white/70">Supporting medical camps, reproductive health resources, and hygiene kits.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/20 text-primary flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined">volunteer_activism</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Direct Support</h3>
                      <p className="text-white/70">Providing emergency assistance, legal aid, and counseling for GBV survivors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                <p className="text-white/70 mb-6">
                  If you'd like to discuss a large donation, partnership, or specific program sponsorship, please contact our finance team.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-[#102220] font-bold hover:brightness-110 transition-all w-full md:w-auto">
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
