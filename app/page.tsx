"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  TrendingUp,
  Target,
  CheckCircle,
  Zap,
  Maximize2,
  Minimize2,
  Keyboard,
  Linkedin,
  Facebook,
  Globe,
  Users,
  Shield,
} from "lucide-react";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
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
          className="flex flex-col items-center justify-center h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="w-24 h-24 mb-8 rounded-2xl overflow-hidden shadow-md"
            variants={fadeIn}
          >
            <Image
              src="/logo-final.svg"
              alt="VaxEvidence Logo"
              width={96}
              height={96}
              className="w-full h-full"
            />
          </motion.div>
          <motion.h1
            className="text-6xl font-extrabold text-slate-900 tracking-tight mb-4"
            variants={fadeIn}
          >
            VaxEvidence
          </motion.h1>
          <motion.p
            className="text-2xl text-slate-500 font-light mb-2 text-center max-w-2xl"
            variants={fadeIn}
          >
            Real-World Evidence Platform for Vaccine Scientists
          </motion.p>
          <motion.p
            className="text-lg text-slate-400 font-light mb-14"
            variants={fadeIn}
          >
            From Data to Regulatory Decision in Days, Not Months
          </motion.p>
          <motion.div
            className="flex items-center gap-3 text-sm text-slate-400"
            variants={fadeIn}
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span>Station F, Paris</span>
            <span className="text-slate-300">|</span>
            <span>February 2026</span>
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 2: The Problem
    {
      title: "The Problem",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div className="mb-4" variants={fadeIn}>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">
              The Manual RWE Crisis
            </h3>
            <p className="text-lg text-slate-500">
              Vaccine effectiveness studies take{" "}
              <span className="font-semibold text-slate-900">6+ months</span>{" "}
              and cost{" "}
              <span className="font-semibold text-slate-900">$50K+</span> due to
              manual processes
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 mb-4 flex-1"
            variants={stagger}
          >
            {[
              {
                value: "6+ mo",
                label: "Per Study",
                desc: "Protocol to publication",
              },
              {
                value: "15+ hrs",
                label: "Per Review",
                desc: "Manual paper screening",
              },
              {
                value: "$50K+",
                label: "Per Study",
                desc: "Personnel + database costs",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-slate-50 rounded-2xl p-5 text-center flex flex-col justify-center"
                variants={fadeIn}
              >
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-slate-600">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-slate-900 text-white rounded-2xl p-5"
            variants={fadeIn}
          >
            <p className="text-lg italic leading-relaxed">
              &ldquo;I spent 4 years at Pfizer doing this manually. Every
              vaccine effectiveness study was a 6-month marathon.&rdquo;
            </p>
            <p className="text-right mt-2 text-slate-400 text-sm">
              — Dr. Tin Tin Htar Myint, Co-Founder &amp; CEO
            </p>
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 3: Market Opportunity
    {
      title: "Market Opportunity",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div className="text-center mb-4" variants={fadeIn}>
            <h3 className="text-3xl font-bold text-slate-900">
              $48B RWE Market by 2032
            </h3>
            <p className="text-lg text-slate-500 mt-1">
              Growing at 13.3% CAGR with post-COVID tailwinds
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5 flex-1 mb-4"
            variants={stagger}
          >
            <motion.div
              className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-center"
              variants={fadeIn}
            >
              <TrendingUp className="w-10 h-10 text-blue-400 mb-3" />
              <div className="text-5xl font-bold mb-2">$48B</div>
              <div className="text-slate-300 text-base">
                Total Market by 2032
              </div>
              <div className="text-slate-400 text-sm">13.3% Annual Growth</div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 justify-center"
              variants={stagger}
            >
              <motion.div
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm"
                variants={fadeIn}
              >
                <CheckCircle className="w-7 h-7 text-blue-600 mb-2" />
                <div className="font-bold text-base text-slate-900 mb-1">
                  FDA Mandate
                </div>
                <div className="text-slate-500 text-sm">
                  21st Century Cures Act requires RWE integration
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm"
                variants={fadeIn}
              >
                <CheckCircle className="w-7 h-7 text-blue-600 mb-2" />
                <div className="font-bold text-base text-slate-900 mb-1">
                  Post-COVID Surge
                </div>
                <div className="text-slate-500 text-sm">
                  Vaccine surveillance now permanent infrastructure
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="bg-slate-50 rounded-2xl p-4" variants={fadeIn}>
            <p className="text-base text-slate-600">
              <span className="font-semibold text-slate-900">The Gap:</span>{" "}
              Only 35 products included RWE in FDA submissions since 2016. No
              specialized tools exist for vaccine-specific RWE.
            </p>
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 4: Solution
    {
      title: "Solution",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-2xl p-5 text-center mb-4"
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold mb-1">
              AI-Powered Vaccine RWE Platform
            </h3>
            <p className="text-base text-slate-400">
              End-to-end vaccine RWE workflow with regulatory-ready exports
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 flex-1"
            variants={stagger}
          >
            {[
              {
                icon: FileText,
                title: "Protocol Builder",
                desc: "PICO-based protocol design with versioning, diff viewer, digital signatures, and 21 CFR Part 11 audit trail",
              },
              {
                icon: Target,
                title: "PRISMA Screening",
                desc: "4-stage systematic review pipeline with duplicate detection, risk-of-bias assessment (RoB 2/ROBINS-I), and meta-analysis forest plots",
              },
              {
                icon: Shield,
                title: "Regulatory Export",
                desc: "One-click FDA IND (21 CFR 312.23), eCTD Module 5 (ICH M4E(R2)), CDISC/SDTM templates, CONSORT/STROBE/GCP checklists",
              },
              {
                icon: Users,
                title: "Real-Time Collaboration",
                desc: "Live co-editing via CRDT, presence indicators, field cursors, threaded comments with @mentions, review workflows",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm"
                variants={fadeIn}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-900">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 5: What's Built
    {
      title: "What's Built",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-2xl p-5 text-center mb-4"
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold mb-1">
              Production-Ready Platform
            </h3>
            <p className="text-base text-slate-400">
              Not a prototype — a fully engineered, tested, and deployed system
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-4 gap-3 mb-4"
            variants={stagger}
          >
            {[
              {
                value: "12",
                label: "Dev Phases",
                desc: "Completed",
              },
              {
                value: "30",
                label: "DB Tables",
                desc: "With RLS Security",
              },
              {
                value: "1,574",
                label: "Tests",
                desc: "Unit + Integration + E2E",
              },
              {
                value: "20",
                label: "Migrations",
                desc: "SQL Applied",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm text-center"
                variants={fadeIn}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-slate-700">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 flex-1"
            variants={stagger}
          >
            {[
              {
                icon: FileText,
                title: "Core Platform",
                desc: "Protocol builder, evidence library (PubMed/ClinicalTrials.gov import), dataset management, multi-format export (PDF/Word/CSV/ZIP)",
              },
              {
                icon: Target,
                title: "Systematic Review",
                desc: "PRISMA screening pipeline, duplicate detection, RoB 2 + ROBINS-I assessment, forest plots for meta-analysis",
              },
              {
                icon: Shield,
                title: "Regulatory Compliance",
                desc: "FDA IND packages, eCTD Module 5, CDISC/SDTM templates, CONSORT/STROBE/GCP checklists",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "Real-time Yjs CRDT editing, presence & cursors, @mention notifications, review workflows, workspaces with RBAC",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-slate-50 rounded-xl p-4"
                variants={fadeIn}
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <h4 className="font-bold text-sm text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 6: Competitive Advantage
    {
      title: "Why We Win",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-2xl p-5 text-center mb-4"
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold mb-1">
              Domain-Specific vs Generic Tools
            </h3>
            <p className="text-base text-slate-400">
              Built BY vaccine scientists FOR vaccine scientists
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5 flex-1 mb-4"
            variants={stagger}
          >
            <motion.div
              className="bg-white rounded-2xl p-5 border border-red-200"
              variants={fadeIn}
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                Covidence / Rayyan
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Generic for all medical research",
                  "No vaccine-specific workflows",
                  "No protocol design tools",
                  "Limited regulatory exports",
                  "No real-time collaboration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-5 border border-blue-200"
              variants={fadeIn}
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                VaxEvidence
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Purpose-built for vaccines",
                  "Full PICO protocol builder",
                  "FDA IND + eCTD + SDTM export",
                  "PRISMA screening + meta-analysis",
                  "Real-time team collaboration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-blue-600 text-white rounded-2xl p-4 text-center"
            variants={fadeIn}
          >
            <p className="text-lg font-semibold">
              Complete End-to-End Platform — No Competitor Offers This
            </p>
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 7: Business Model
    {
      title: "Business Model",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div className="text-center mb-4" variants={fadeIn}>
            <h3 className="text-3xl font-bold text-slate-900">
              B2B SaaS Pricing
            </h3>
            <p className="text-base text-slate-500 mt-1">
              Tiered by organization size
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 mb-4"
            variants={stagger}
          >
            {[
              {
                tier: "Academic / Startup",
                price: "$3K",
                featured: false,
              },
              {
                tier: "Mid-size Biotech",
                price: "$15K",
                featured: true,
              },
              {
                tier: "Big Pharma",
                price: "$50K",
                featured: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl p-5 text-center ${
                  item.featured
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105"
                    : "bg-slate-900 text-white"
                }`}
                variants={fadeIn}
              >
                <div
                  className={`text-sm mb-2 ${item.featured ? "text-blue-100" : "text-slate-400"}`}
                >
                  {item.tier}
                </div>
                <div className="text-4xl font-bold mb-1">{item.price}</div>
                <div
                  className={`text-sm ${item.featured ? "text-blue-100" : "text-slate-400"}`}
                >
                  per seat/year
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex-1"
            variants={fadeIn}
          >
            <h4 className="text-base font-bold text-slate-900 mb-4">
              3-Year Revenue Projections
            </h4>
            <div className="space-y-3">
              {[
                {
                  year: "Year 1: 10 customers x $15K avg",
                  amount: "$150K",
                },
                {
                  year: "Year 2: 40 customers x $20K avg",
                  amount: "$800K",
                },
                {
                  year: "Year 3: 100 customers x $25K avg",
                  amount: "$2.5M",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-xl"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <span className="text-sm text-slate-600">{item.year}</span>
                  <span className="text-2xl font-bold text-slate-900">
                    {item.amount}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 8: Go-to-Market
    {
      title: "Go-to-Market",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-2xl p-5 text-center mb-4"
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold mb-1">Network-First Strategy</h3>
            <p className="text-base text-slate-400">
              500+ warm leads from Day 1
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 flex-1 mb-4"
            variants={stagger}
          >
            {[
              {
                phase: "01",
                title: "Warm Network",
                period: "Months 1–6",
                items: [
                  "5 pilot customers",
                  "Pfizer, Sanofi contacts",
                  "ECDC/PROMISE network",
                  "Academic institutions",
                ],
              },
              {
                phase: "02",
                title: "Industry",
                period: "Months 7–12",
                items: [
                  "Conference presentations",
                  "Case study publications",
                  "LinkedIn thought leadership",
                  "CRO partnerships",
                ],
              },
              {
                phase: "03",
                title: "Scale",
                period: "Year 2+",
                items: [
                  "Sales team",
                  "Top 50 pharma/biotech",
                  "ECDC/WHO partnerships",
                  "Expand to infectious diseases",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm"
                variants={fadeIn}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {item.phase}
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-0.5">
                  {item.title}
                </h4>
                <div className="text-xs text-slate-400 mb-3">{item.period}</div>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {item.items.map((listItem, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="bg-slate-50 rounded-2xl p-4" variants={fadeIn}>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                Key Advantage:
              </span>{" "}
              Dr. Tin Tin&apos;s 15-year network provides direct access to
              decision-makers at Pfizer, Sanofi, ECDC, and academic
              institutions.
            </p>
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 9: Team
    {
      title: "Team",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div className="text-center mb-3" variants={fadeIn}>
            <h3 className="text-3xl font-bold text-slate-900">
              Perfect Founder-Market Fit
            </h3>
            <p className="text-base text-slate-500 mt-1">
              15 years domain expertise meets full-stack AI capabilities
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5 flex-1 mb-3"
            variants={stagger}
          >
            {/* Dr. Tin Tin */}
            <motion.div
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col"
              variants={fadeIn}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-slate-200 ring-offset-2">
                <Image
                  src="/images/dr-myint.jpeg"
                  alt="Dr. Tin Tin Htar Myint"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900">
                Dr. Tin Tin Htar Myint
              </h3>
              <div className="text-blue-600 font-semibold text-sm text-center mb-2">
                Co-Founder &amp; CEO
              </div>
              <div className="flex justify-center gap-2 mb-3">
                <a
                  href="https://www.linkedin.com/in/myint-tin-tin-htar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-600" />
                </a>
                <a
                  href="https://www.facebook.com/tin.h.myint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-slate-600" />
                </a>
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600 flex-1">
                {[
                  { text: "13 years at Pfizer (Global Epi Lead)", bold: true },
                  { text: "15+ years vaccine RWE experience", bold: false },
                  {
                    text: "Led EU PROMISE & ADVANCE consortia",
                    bold: false,
                  },
                  { text: "33+ peer-reviewed publications", bold: false },
                  { text: "Oxford Strategic Leadership (2025)", bold: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span
                      className={
                        item.bold ? "font-semibold text-slate-900" : ""
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTO */}
            <motion.div
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col"
              variants={fadeIn}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-slate-200 ring-offset-2">
                <Image
                  src="/images/cofounder-cto.jpg"
                  alt="Co-Founder & CTO"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900">
                Pyae Sone Kyaw
              </h3>
              <div className="text-blue-600 font-semibold text-sm text-center mb-2">
                Co-Founder &amp; CTO
              </div>
              <div className="flex justify-center gap-2 mb-3">
                <a
                  href="https://www.linkedin.com/in/pyae-sone-kyaw-80386721b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-600" />
                </a>
                <a
                  href="https://www.facebook.com/pyae.s.kyaw.9279807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-slate-600" />
                </a>
                <a
                  href="https://soneeee22000.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-600" />
                </a>
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600 flex-1">
                {[
                  {
                    text: "Dual Master's: Telecom SudParis + AIT",
                    bold: true,
                  },
                  {
                    text: "Built entire VaxEvidence platform (12 phases)",
                    bold: false,
                  },
                  {
                    text: "Next.js 16, TypeScript, Supabase, AI/ML",
                    bold: false,
                  },
                  {
                    text: "1,574 tests, 30 DB tables, 20 migrations",
                    bold: false,
                  },
                  {
                    text: "Station F, Paris — Founding AI Engineer",
                    bold: false,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span
                      className={
                        item.bold ? "font-semibold text-slate-900" : ""
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div className="bg-slate-50 rounded-2xl p-4" variants={fadeIn}>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                {
                  title: "Domain Expertise",
                  desc: "Dr. Tin Tin lived the problem for 15 years at Pfizer",
                },
                {
                  title: "Technical Execution",
                  desc: "Full-stack AI to build and iterate fast",
                },
                {
                  title: "Network Access",
                  desc: "500+ warm leads to pharma decision-makers",
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-bold text-sm text-slate-900 mb-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 10: Roadmap
    {
      title: "Roadmap",
      content: (
        <motion.div
          className="flex flex-col h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-2xl p-5 text-center mb-4"
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold mb-1">Next 12 Months</h3>
            <p className="text-base text-slate-400">
              Platform Built — Now Commercialize
            </p>
          </motion.div>

          <motion.div
            className="space-y-3 flex-1 flex flex-col justify-between"
            variants={stagger}
          >
            {[
              {
                quarter: "Q1 2026: Platform Complete",
                period: "DONE",
                items: [
                  "12 development phases shipped",
                  "Protocol builder, PRISMA screening, regulatory exports",
                  "Real-time collaboration, enterprise features",
                ],
                done: true,
              },
              {
                quarter: "Q2 2026: Beta Launch & First Users",
                period: "Months 3–6",
                items: [
                  "Onboard 5 pilot customers from Dr. Tin Tin's network",
                  "Present at ESPID conference (May 2026)",
                  "Collect feedback and iterate",
                ],
                done: false,
              },
              {
                quarter: "Q3–Q4 2026: First Revenue & Scale",
                period: "Months 7–12",
                items: [
                  "Convert pilots to paid ($30K–$150K ARR target)",
                  "Publish case studies, build social proof",
                  "Prepare for seed round",
                ],
                done: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-4 border-l-4 border-slate-900 shadow-sm flex-1"
                variants={fadeIn}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-lg text-slate-900">
                    {item.quarter}
                  </h4>
                  {item.done ? (
                    <span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      DONE
                    </span>
                  ) : (
                    <span className="text-slate-400 text-sm">
                      {item.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-1 text-sm text-slate-600">
                  {item.items.map((listItem, j) => (
                    <li key={j} className="flex items-start gap-2">
                      {item.done ? (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                      )}
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },

    // Slide 11: The Ask
    {
      title: "The Ask",
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-2xl p-8 text-center w-full max-w-3xl mb-5"
            variants={fadeIn}
          >
            <h3 className="text-5xl font-bold mb-2">$1.5M Seed Round</h3>
            <p className="text-xl text-slate-400">
              18-month runway to $500K ARR
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5 w-full max-w-4xl mb-5"
            variants={stagger}
          >
            <motion.div
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm"
              variants={fadeIn}
            >
              <h4 className="text-base font-bold text-slate-900 mb-4">
                Use of Funds
              </h4>
              <div className="space-y-2.5">
                {[
                  { label: "Product Development", value: "40%" },
                  { label: "Sales & Marketing", value: "30%" },
                  { label: "Team Expansion", value: "20%" },
                  { label: "Operations", value: "10%" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center pb-2 border-b border-slate-100 last:border-0"
                  >
                    <span className="text-sm text-slate-600">{item.label}</span>
                    <span className="text-xl font-bold text-slate-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm"
              variants={fadeIn}
            >
              <h4 className="text-base font-bold text-slate-900 mb-4">
                18-Month Milestones
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {[
                  "50+ paying customers",
                  "$500K ARR with 70%+ margins",
                  "5 published case studies",
                  "Series A ready",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-blue-600 text-white rounded-xl p-4 text-center max-w-3xl w-full mb-4"
            variants={fadeIn}
          >
            <p className="text-lg font-semibold">
              Let&apos;s transform vaccine research together.
            </p>
          </motion.div>

          <motion.div className="text-center" variants={fadeIn}>
            <p className="text-sm font-semibold text-slate-900">
              hello@vaxevidence.com
            </p>
            <p className="text-xs text-slate-400">
              Station F, Paris &bull; www.vaxevidence.com
            </p>
          </motion.div>
        </motion.div>
      ),
    },
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-slate-50 flex flex-col p-4">
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <Image
                src="/logo-final.svg"
                alt="VaxEvidence"
                width={28}
                height={28}
                className="w-full h-full"
              />
            </div>
            <span className="text-slate-400 text-xs tracking-wide">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
              <Keyboard className="w-3 h-3" />
              <span>Arrow keys to navigate</span>
            </div>
            <button
              onClick={toggleFullscreen}
              className="p-1.5 hover:bg-slate-100 rounded-lg transition"
              title="Toggle fullscreen (F)"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 text-slate-400" />
              ) : (
                <Maximize2 className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-0.5 bg-slate-200 rounded-full mb-3 overflow-hidden flex-shrink-0">
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Main Slide */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 mb-3 overflow-hidden flex-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 35 },
                opacity: { duration: 0.15 },
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
            className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg hover:border-slate-300 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
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
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-slate-900 w-6"
                    : "bg-slate-200 hover:bg-slate-300 w-1.5"
                }`}
                title={slides[index].title}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
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
