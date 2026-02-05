"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { FadeIn, FadeInStagger } from "../components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

// Document Types
type DocumentType = "PDF" | "DOCX" | "XLSX";

interface ResourceDocument {
  id: string;
  title: string;
  category: string;
  size: string;
  date: string;
  type: DocumentType;
  description: string;
  icon: string;
}

// Mock Data
const documents: ResourceDocument[] = [
  {
    id: "1",
    title: "TAGOHEFO Constitution",
    category: "Governance",
    size: "2.4 MB",
    date: "Jan 2024",
    type: "PDF",
    description: "The founding constitution and bylaws governing our organization's operations and mandate.",
    icon: "gavel",
  },
  {
    id: "2",
    title: "Code of Conduct",
    category: "Governance",
    size: "1.1 MB",
    date: "Feb 2024",
    type: "PDF",
    description: "Ethical guidelines and expected standards of behavior for all staff, volunteers, and partners.",
    icon: "verified_user",
  },
  {
    id: "3",
    title: "Annual Impact Report 2023",
    category: "Reports",
    size: "5.8 MB",
    date: "Jan 2024",
    type: "PDF",
    description: "Comprehensive overview of our activities, achievements, and impact across all programs in 2023.",
    icon: "analytics",
  },
  {
    id: "4",
    title: "Financial Audit 2023",
    category: "Reports",
    size: "3.2 MB",
    date: "Mar 2024",
    type: "PDF",
    description: "Independent financial audit report ensuring transparency and accountability in our fund usage.",
    icon: "account_balance",
  },
  {
    id: "5",
    title: "Strategic Plan 2024-2029",
    category: "Strategy",
    size: "4.5 MB",
    date: "Dec 2023",
    type: "PDF",
    description: "Our 5-year roadmap outlining strategic goals, expansion plans, and key performance indicators.",
    icon: "flag",
  },
  {
    id: "6",
    title: "GBV Prevention Framework",
    category: "Policies",
    size: "1.8 MB",
    date: "Apr 2024",
    type: "PDF",
    description: "Standard operating procedures and guidelines for our Gender-Based Violence prevention programs.",
    icon: "shield",
  },
  {
    id: "7",
    title: "Child Protection Policy",
    category: "Policies",
    size: "1.5 MB",
    date: "May 2024",
    type: "PDF",
    description: "Strict protocols to ensure the safety and well-being of all children involved in our programs.",
    icon: "child_care",
  },
  {
    id: "8",
    title: "Community Health Guidelines",
    category: "Resources",
    size: "2.1 MB",
    date: "Jun 2024",
    type: "PDF",
    description: "Educational materials and best practices for community health workers and volunteers.",
    icon: "medical_services",
  },
];

const categories = ["All", "Governance", "Reports", "Strategy", "Policies", "Resources"];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesCategory = activeCategory === "All" || doc.category === activeCategory;
      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="flex-1 flex flex-col items-center min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative w-full bg-[#111817] text-white pt-20 pb-28 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <div 
             className="absolute inset-0 bg-cover bg-center opacity-30"
             style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPEP5ES5AhrbefwVK_vZckmqicoTp3XkjO4K0L-_Qslp8tcWy3gMakwuuxOD2gsbFPD9x7bgJ2U2LNLM5hcpgBlkXRvNked84E3AHhgzd8H6RMS6az1qDXPx5IC8xJEdThqQrET8NOyKVaWMGZAblgWJlIX3mO6vFzng1LC49JZnNmCOm3okH7JxVNpBcJY_ME4o6T9mkD76VovlIcFvn2zeZPv_70Hyn4L2DrL7aBKD4DOigbir_5UQBH8knvbd1qBTLVymryi6g")' }}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#111817]/80 via-[#111817]/60 to-[#f8fafc]"></div>
        </div>

        <div className="relative w-full max-w-[960px] mx-auto z-10">
          <FadeInStagger>
            <FadeIn>
              <div className="flex flex-wrap gap-2 mb-8 text-white/80">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white font-medium">Resource Center</span>
              </div>
            </FadeIn>
            
            <div className="max-w-2xl">
              <FadeIn>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                  Publication & <br/><span className="text-primary">Resources</span>
                </h1>
              </FadeIn>
              <FadeIn>
                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium">
                  Access our official documents, annual reports, strategic plans, and educational resources. 
                  Transparency and knowledge sharing are at the core of our mission.
                </p>
              </FadeIn>

              {/* Search Bar */}
              <FadeIn>
                <div className="relative max-w-lg shadow-2xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-white/50">search</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/20 transition-all backdrop-blur-md"
                  />
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-[960px] px-4 -mt-8 mb-20 z-10">
        <FadeIn>
          {/* Category Filter Pills */}
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-[#dbe6e5] mb-8 overflow-x-auto">
            <div className="flex md:justify-center gap-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-primary text-[#111817] shadow-md"
                      : "bg-transparent text-[#618986] hover:bg-[#f0f4f4] hover:text-[#111817]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Results Info */}
        <FadeIn>
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-[#111817] font-bold text-xl">
              {activeCategory === "All" ? "All Documents" : `${activeCategory} Documents`}
            </h2>
            <span className="text-[#618986] text-sm font-medium bg-[#f0f4f4] px-3 py-1 rounded-full">
              {filteredDocuments.length} result{filteredDocuments.length !== 1 && "s"}
            </span>
          </div>
        </FadeIn>

        {/* Documents Grid */}
        <AnimatePresence mode="wait">
          {filteredDocuments.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-4"
            >
              <FadeInStagger>
                {filteredDocuments.map((doc) => (
                  <FadeIn key={doc.id}>
                    <div className="group flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-white border border-[#dbe6e5] hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="size-16 rounded-xl bg-[#f0f4f4] text-[#111817] group-hover:bg-primary group-hover:text-[#111817] flex items-center justify-center transition-colors duration-300">
                          <span className="material-symbols-outlined text-3xl">
                            {doc.icon}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#f0f4f4] text-[#618986]">
                            {doc.category}
                          </span>
                          <span className="text-xs text-[#618986] font-medium flex items-center gap-1">
                            <span className="size-1 rounded-full bg-[#618986]"></span>
                            {doc.date}
                          </span>
                        </div>
                        <h3 className="text-[#111817] text-lg font-bold truncate group-hover:text-primary transition-colors mb-1">
                          {doc.title}
                        </h3>
                        <p className="text-[#618986] text-sm line-clamp-2">
                          {doc.description}
                        </p>
                      </div>

                      {/* Action */}
                      <div className="flex-shrink-0 flex items-center gap-4 border-t md:border-t-0 md:border-l border-[#f0f4f4] pt-4 md:pt-0 md:pl-6 mt-2 md:mt-0">
                        <div className="flex flex-col items-end gap-1 min-w-[80px]">
                          <span className="text-xs font-bold text-[#111817] uppercase bg-gray-100 px-2 py-1 rounded">
                            {doc.type}
                          </span>
                          <span className="text-xs text-[#618986]">{doc.size}</span>
                        </div>
                        <button 
                          className="size-10 rounded-full border border-[#dbe6e5] text-[#111817] hover:bg-primary hover:border-primary hover:text-[#111817] flex items-center justify-center transition-all duration-300"
                          aria-label={`Download ${doc.title}`}
                        >
                          <span className="material-symbols-outlined">download</span>
                        </button>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="size-20 bg-[#f0f4f4] rounded-full flex items-center justify-center mb-4 text-[#618986]">
                <span className="material-symbols-outlined text-4xl">search_off</span>
              </div>
              <h3 className="text-[#111817] text-xl font-bold mb-2">
                No documents found
              </h3>
              <p className="text-[#618986] max-w-md">
                We couldn't find any documents matching "{searchQuery}" in the {activeCategory} category. 
                Try adjusting your search or filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
