"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Zap, 
  Database,
  Maximize2,
  Minimize2,
  Keyboard
} from 'lucide-react';

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function VaxEvidencePitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    // Slide 1: Title
    {
      title: "VaxEvidence",
      content: (
        <motion.div 
          className="flex flex-col items-center justify-center h-full space-y-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="w-28 h-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FileText className="w-14 h-14 text-white" />
          </motion.div>
          <motion.div className="text-center space-y-4" variants={fadeInUp}>
            <h1 className="text-6xl font-extrabold gradient-text tracking-tight">
              VaxEvidence
            </h1>
            <p className="text-3xl text-gray-700 font-light leading-tight">
              Real-World Evidence Platform for Vaccine Scientists
            </p>
            <p className="text-xl text-gray-500 italic font-light">
              From Data to Regulatory Decision in Days, Not Months
            </p>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-6 text-gray-400 text-base font-medium"
            variants={fadeInUp}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Station F • Paris
            </span>
            <span className="text-gray-300">•</span>
            <span>January 2026</span>
          </motion.div>
        </motion.div>
      )
    },

    // Slide 2: The Problem
    {
      title: "The Problem",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-500 rounded-r-2xl p-5"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-red-700 mb-2">The Manual RWE Crisis</h3>
            <p className="text-xl text-gray-800 leading-relaxed">
              Vaccine effectiveness studies take <span className="font-bold text-red-600">6+ months</span> and cost <span className="font-bold text-red-600">$50K+</span> due to manual processes
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-3 gap-4 flex-1" variants={staggerContainer}>
            {[
              { value: "6+ mo", label: "Per Study", desc: "From protocol to publication", color: "red" },
              { value: "15+ hrs", label: "Per Review", desc: "Manual paper screening", color: "orange" },
              { value: "$50K+", label: "Per Study", desc: "Personnel + database costs", color: "amber" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`bg-white rounded-2xl p-4 border-2 border-${item.color}-200 shadow-lg text-center card-hover flex flex-col justify-center`}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <div className={`text-4xl font-bold text-${item.color}-600 mb-2`}>{item.value}</div>
                <div className="text-base text-gray-700 font-semibold">{item.label}</div>
                <div className="text-gray-500 mt-1 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gray-900 text-white rounded-2xl p-5 relative overflow-hidden"
            variants={fadeInUp}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <p className="text-xl italic leading-relaxed relative z-10">
              &ldquo;I spent 4 years at Pfizer doing this manually. Every vaccine effectiveness study was a 6-month marathon.&rdquo;
            </p>
            <p className="text-right mt-2 text-gray-400 text-base">— Dr. Myint Tin Tin Htar, Co-Founder</p>
          </motion.div>
        </motion.div>
      )
    },

    // Slide 3: Market Opportunity
    {
      title: "Market Opportunity",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">$48B RWE Market by 2032</h3>
            <p className="text-xl text-gray-600">Growing at 13.3% CAGR • Post-COVID Tailwinds</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-6 flex-1" variants={staggerContainer}>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <TrendingUp className="w-12 h-12 mb-3" />
              <div className="text-5xl font-bold mb-2">$48B</div>
              <div className="text-lg text-blue-100">Market Size (2032)</div>
              <div className="text-base text-blue-200/80">13.3% Annual Growth</div>
            </motion.div>

            <motion.div className="space-y-3 flex flex-col justify-center" variants={staggerContainer}>
              <motion.div 
                className="bg-green-50 rounded-2xl p-4 border-2 border-green-200 card-hover"
                variants={fadeInUp}
              >
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <div className="font-bold text-lg mb-1">FDA Mandate</div>
                <div className="text-gray-700 text-sm">21st Century Cures Act requires RWE integration</div>
              </motion.div>
              <motion.div 
                className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200 card-hover"
                variants={fadeInUp}
              >
                <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
                <div className="font-bold text-lg mb-1">Post-COVID Surge</div>
                <div className="text-gray-700 text-sm">Vaccine surveillance now permanent infrastructure</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4"
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-800">
              <span className="font-bold text-amber-700">The Gap:</span> Only 35 products included RWE in FDA submissions since 2016. No specialized tools exist for vaccine-specific RWE.
            </p>
          </motion.div>
        </motion.div>
      )
    },

    // Slide 4: Solution
    {
      title: "Solution",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-6 text-center relative overflow-hidden"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            <h3 className="text-3xl font-bold mb-2 relative z-10">AI-Powered Vaccine RWE Platform</h3>
            <p className="text-xl text-blue-100 relative z-10">92% time savings • 100% regulatory compliance</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4 flex-1" variants={staggerContainer}>
            {[
              { icon: FileText, title: "Protocol Generation", desc: "AI creates study protocols following vaccine-specific PICO frameworks in minutes", color: "blue" },
              { icon: Database, title: "Database Integration", desc: "Connect European EHRs, US claims data, and vaccine registries seamlessly", color: "purple" },
              { icon: CheckCircle, title: "Regulatory Export", desc: "One-click FDA/EMA compliant documents with automated PRISMA flowcharts", color: "green" },
              { icon: Target, title: "Vaccine-Specific", desc: "Pre-built templates for effectiveness, safety, and breakthrough studies", color: "orange" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`bg-white rounded-2xl p-5 border-2 border-${item.color}-200 shadow-lg card-hover`}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-3`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
                <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )
    },

    // Slide 5: Competitive Advantage
    {
      title: "Why We Win",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-3xl p-5 text-center"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-1">Domain-Specific vs Generic Tools</h3>
            <p className="text-lg text-emerald-100">Built BY vaccine scientists FOR vaccine scientists</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-6 flex-1" variants={staggerContainer}>
            <motion.div 
              className="bg-red-50 rounded-2xl p-5 border-2 border-red-200"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">❌</span> Covidence / Rayyan
              </h4>
              <ul className="space-y-2 text-base">
                {["Generic for all medical research", "No vaccine-specific workflows", "Manual database querying", "Limited regulatory exports", "AI accuracy: 39.5%"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 text-xl mr-2">•</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="bg-green-50 rounded-2xl p-5 border-2 border-green-300"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> VaxEvidence
              </h4>
              <ul className="space-y-2 text-base">
                {[
                  { text: "Purpose-built for vaccines", bold: true },
                  { text: "Pre-configured VE metrics", bold: false },
                  { text: "Integrated database connectors", bold: false },
                  { text: "FDA/EMA exports built-in", bold: false },
                  { text: "Domain AI + expert validation", bold: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 text-xl mr-2">•</span>
                    <span className={`text-gray-800 ${item.bold ? 'font-semibold' : ''}`}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-blue-900 text-white rounded-2xl p-5 text-center"
            variants={fadeInUp}
          >
            <p className="text-2xl font-bold">
              92% Time Savings • Zero Learning Curve for Vaccine Researchers
            </p>
          </motion.div>
        </motion.div>
      )
    },

    // Slide 6: Business Model
    {
      title: "Business Model",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">B2B SaaS Pricing</h3>
            <p className="text-lg text-gray-600">Tiered by organization size</p>
          </motion.div>

          <motion.div className="grid grid-cols-3 gap-4" variants={staggerContainer}>
            {[
              { tier: "Academic / Startup", price: "$3K", color: "from-blue-500 to-blue-600", scale: false },
              { tier: "Mid-size Biotech", price: "$15K", color: "from-purple-500 to-purple-600", scale: true },
              { tier: "Big Pharma", price: "$50K", color: "from-emerald-500 to-emerald-600", scale: false },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-5 shadow-xl text-center ${item.scale ? 'transform scale-105 z-10' : ''}`}
                variants={fadeInUp}
                whileHover={{ scale: item.scale ? 1.08 : 1.03 }}
              >
                <div className="text-sm mb-2 text-white/80">{item.tier}</div>
                <div className="text-4xl font-bold mb-1">{item.price}</div>
                <div className="text-sm text-white/80">per seat/year</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-lg flex-1"
            variants={fadeInUp}
          >
            <h4 className="text-xl font-bold mb-4 text-center">3-Year Revenue Projections</h4>
            <div className="space-y-3">
              {[
                { year: "Year 1: 10 customers × $15K avg", amount: "$150K", color: "blue" },
                { year: "Year 2: 40 customers × $20K avg", amount: "$800K", color: "purple" },
                { year: "Year 3: 100 customers × $25K avg", amount: "$2.5M", color: "emerald" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className={`flex items-center justify-between p-3 bg-${item.color}-50 rounded-xl border border-${item.color}-200`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="font-medium text-base">{item.year}</span>
                  <span className={`text-3xl font-bold text-${item.color}-600`}>{item.amount}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )
    },

    // Slide 7: Go-to-Market
    {
      title: "Go-to-Market",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl p-5 text-center"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-1">Network-First Strategy</h3>
            <p className="text-xl text-blue-100">500+ warm leads from Day 1</p>
          </motion.div>

          <motion.div className="grid grid-cols-3 gap-4 flex-1" variants={staggerContainer}>
            {[
              { emoji: "🎯", phase: "Phase 1", title: "Warm Network (Mo 1-6)", items: ["5 pilot customers", "Pfizer, Sanofi contacts", "ECDC/PROMISE network", "Academic institutions"], color: "blue" },
              { emoji: "📢", phase: "Phase 2", title: "Industry (Mo 7-12)", items: ["Conference presentations", "Case study publications", "LinkedIn thought leadership", "CRO partnerships"], color: "purple" },
              { emoji: "🚀", phase: "Phase 3", title: "Scale (Year 2+)", items: ["Sales team", "Top 50 pharma/biotech", "ECDC/WHO partnerships", "Expand to infectious diseases"], color: "emerald" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`bg-white rounded-2xl p-5 border-2 border-${item.color}-200 shadow-lg card-hover`}
                variants={fadeInUp}
              >
                <div className="text-4xl mb-2">{item.emoji}</div>
                <h4 className={`font-bold text-xl mb-1 text-${item.color}-600`}>{item.phase}</h4>
                <div className="text-base font-medium mb-2 text-gray-700">{item.title}</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {item.items.map((listItem, j) => (
                    <li key={j}>• {listItem}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4"
            variants={fadeInUp}
          >
            <p className="text-base text-gray-800">
              <span className="font-bold text-amber-700">Key Advantage:</span> Dr. Myint&apos;s 15-year network provides direct access to decision-makers at Pfizer, Sanofi, ECDC, and academic institutions.
            </p>
          </motion.div>
        </motion.div>
      )
    },

    // Slide 8: Team
    {
      title: "Team",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-3"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">Perfect Founder-Market Fit</h3>
            <p className="text-lg text-gray-600">15 years domain expertise meets full-stack AI capabilities</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-6 flex-1" variants={staggerContainer}>
            {/* Dr. Myint */}
            <motion.div 
              className="bg-white rounded-2xl p-5 border-2 border-blue-200 shadow-xl flex flex-col"
              variants={fadeInUp}
              whileHover={{ y: -3 }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-blue-500 ring-offset-2">
                <Image 
                  src="/images/dr-myint.jpeg" 
                  alt="Dr. Myint Tin Tin Htar"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-center">Dr. Tin Tin Htar Myint</h3>
              <div className="text-blue-600 font-semibold mb-3 text-base text-center">Co-Founder & CMO</div>
              <ul className="space-y-1.5 text-sm text-gray-700 flex-1">
                {[
                  { text: "13 years at Pfizer (Global Epi Lead)", bold: true },
                  { text: "15+ years vaccine RWE experience", bold: false },
                  { text: "Led EU PROMISE & ADVANCE consortia", bold: false },
                  { text: "33+ peer-reviewed publications", bold: false },
                  { text: "Oxford Strategic Leadership (2025)", bold: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className={item.bold ? 'font-semibold' : ''}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTO */}
            <motion.div 
              className="bg-white rounded-2xl p-5 border-2 border-purple-200 shadow-xl flex flex-col"
              variants={fadeInUp}
              whileHover={{ y: -3 }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-purple-500 ring-offset-2">
                <Image 
                  src="/images/cofounder-cto.jpg" 
                  alt="Co-Founder & CTO"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-center">Pyae Sone Kyaw</h3>
              <div className="text-purple-600 font-semibold mb-3 text-base text-center">Co-Founder & CTO</div>
              <ul className="space-y-1.5 text-sm text-gray-700 flex-1">
                {[
                  { text: "Data Science & AI expertise", bold: true },
                  { text: "Cloud & Software Engineering", bold: false },
                  { text: "Station F startup ecosystem", bold: false },
                  { text: "Full-stack development (React, Python)", bold: false },
                  { text: "Rapid MVP builder & architect", bold: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Zap className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className={item.bold ? 'font-semibold' : ''}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-4 border-2 border-emerald-200"
            variants={fadeInUp}
          >
            <h4 className="text-lg font-bold mb-3 text-center">Why This Team Wins</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { emoji: "🎯", title: "Domain Expertise", desc: "Dr. Myint lived the problem for 15 years at Pfizer", color: "emerald" },
                { emoji: "⚡", title: "Technical Execution", desc: "Full-stack AI to build and iterate fast", color: "blue" },
                { emoji: "🤝", title: "Network Access", desc: "500+ warm leads to pharma decision-makers", color: "purple" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <div className={`font-bold text-base mb-1 text-${item.color}-600`}>{item.title}</div>
                  <p className="text-xs text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )
    },

    // Slide 9: Roadmap
    {
      title: "Roadmap",
      content: (
        <motion.div 
          className="flex flex-col h-full space-y-3"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl p-5 text-center"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-1">Next 12 Months</h3>
            <p className="text-xl text-blue-100">From MVP to $150K ARR</p>
          </motion.div>

          <motion.div className="space-y-3 flex-1 flex flex-col justify-between" variants={staggerContainer}>
            {[
              { quarter: "Q1 2026: Beta Launch", period: "Months 1-2", items: ["Complete MVP (protocol generator + AI extraction)", "Onboard 3 pilot customers from network", "Collect testimonials and refine product"], color: "blue", icon: "✅" },
              { quarter: "Q2 2026: First Revenue", period: "Months 3-6", items: ["Convert pilots to paid: $30K ARR target", "Present at ESPID conference (May 2026)", "Add database integration features"], color: "purple", icon: "🎯" },
              { quarter: "Q3-Q4 2026: Scale", period: "Months 7-12", items: ["Reach $150K ARR (10 customers)", "Publish case study in Vaccine journal", "Raise Seed round ($1-2M)"], color: "emerald", icon: "🚀" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`bg-white rounded-xl p-4 border-l-8 border-${item.color}-500 shadow-lg flex-1`}
                variants={fadeInUp}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-xl text-gray-900">{item.quarter}</h4>
                  <span className={`text-${item.color}-600 font-semibold text-base`}>{item.period}</span>
                </div>
                <ul className="space-y-1 text-base text-gray-700">
                  {item.items.map((listItem, j) => (
                    <li key={j}>{item.icon} {listItem}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )
    },

    // Slide 10: The Ask
    {
      title: "The Ask",
      content: (
        <motion.div 
          className="flex flex-col items-center justify-center h-full space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden w-full max-w-3xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            <h3 className="text-5xl font-bold mb-2 relative z-10">$1.5M Seed Round</h3>
            <p className="text-2xl text-blue-100 relative z-10">18-month runway to $500K ARR</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-6 w-full max-w-4xl" variants={staggerContainer}>
            <motion.div 
              className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-xl"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-bold mb-4 text-center">Use of Funds</h4>
              <div className="space-y-2">
                {[
                  { label: "Product Development", value: "40%", color: "blue" },
                  { label: "Sales & Marketing", value: "30%", color: "purple" },
                  { label: "Team Expansion", value: "20%", color: "emerald" },
                  { label: "Operations", value: "10%", color: "orange" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium text-base">{item.label}</span>
                    <span className={`text-2xl font-bold text-${item.color}-600`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-xl"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-bold mb-4 text-center">18-Month Milestones</h4>
              <ul className="space-y-2 text-base text-gray-700">
                {[
                  { text: "50+ paying customers", color: "emerald" },
                  { text: "$500K ARR with 70%+ margins", color: "blue" },
                  { text: "5 published case studies", color: "purple" },
                  { text: "Series A ready", color: "orange" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className={`w-5 h-5 text-${item.color}-600 mr-2 mt-0.5 flex-shrink-0`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl p-5 text-center max-w-3xl"
            variants={fadeInUp}
          >
            <p className="text-xl font-bold">
              Let&apos;s transform vaccine research together. Join us in building the future of Real-World Evidence.
            </p>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <p className="text-base text-gray-800 font-semibold">hello@vaxevidence.com</p>
            <p className="text-sm text-gray-600">Station F, Paris • www.vaxevidence.com</p>
          </motion.div>
        </motion.div>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 pattern-grid flex flex-col p-4">
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-600 font-medium text-sm">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
              <Keyboard className="w-3 h-3" />
              <span>← → to navigate • F for fullscreen</span>
            </div>
            <button
              onClick={toggleFullscreen}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition"
              title="Toggle fullscreen (F)"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4 text-gray-600" /> : <Maximize2 className="w-4 h-4 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-2 overflow-hidden flex-shrink-0">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Main Slide */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 mb-2 overflow-hidden flex-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="p-6 h-full"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between flex-shrink-0">
          <motion.button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-1.5 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700 transition-all font-medium shadow-sm text-sm"
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </motion.button>

          {/* Slide Indicators */}
          <div className="flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                title={slides[index].title}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-purple-600 transition-all font-medium shadow-lg shadow-blue-500/25 text-sm"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
