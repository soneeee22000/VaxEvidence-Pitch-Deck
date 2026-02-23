import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  CheckCircle,
  Zap,
  Database,
} from "lucide-react";

export default function VaxEvidencePitch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "VaxEvidence",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <FileText className="w-16 h-16 text-white" />
          </div>
          <div className="text-center space-y-6">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VaxEvidence
            </h1>
            <p className="text-4xl text-gray-700 font-light">
              Real-World Evidence Platform for Vaccine Scientists
            </p>
            <p className="text-2xl text-gray-500 italic">
              From Data to Regulatory Decision in Days, Not Months
            </p>
          </div>
          <div className="flex items-center space-x-6 text-gray-500 text-lg">
            <span>Station F • Paris</span>
            <span>•</span>
            <span>January 2026</span>
          </div>
        </div>
      ),
    },

    // Slide 2: The Problem
    {
      title: "The Problem",
      content: (
        <div className="space-y-10">
          <div className="bg-red-50 border-l-8 border-red-500 rounded-r-2xl p-10">
            <h3 className="text-4xl font-bold text-red-700 mb-6">
              The Manual RWE Crisis
            </h3>
            <p className="text-2xl text-gray-800 leading-relaxed">
              Vaccine effectiveness studies take{" "}
              <span className="font-bold text-red-600">6+ months</span> and cost{" "}
              <span className="font-bold text-red-600">$50K+</span> due to
              manual processes
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-4 border-red-200 shadow-xl text-center">
              <div className="text-6xl font-bold text-red-600 mb-4">6+ mo</div>
              <div className="text-xl text-gray-700 font-semibold">
                Per Study
              </div>
              <div className="text-gray-500 mt-2">
                From protocol to publication
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-4 border-orange-200 shadow-xl text-center">
              <div className="text-6xl font-bold text-orange-600 mb-4">
                15+ hrs
              </div>
              <div className="text-xl text-gray-700 font-semibold">
                Per Review
              </div>
              <div className="text-gray-500 mt-2">Manual paper screening</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-4 border-yellow-200 shadow-xl text-center">
              <div className="text-6xl font-bold text-yellow-600 mb-4">
                $50K+
              </div>
              <div className="text-xl text-gray-700 font-semibold">
                Per Study
              </div>
              <div className="text-gray-500 mt-2">
                Personnel + database costs
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-10">
            <p className="text-3xl italic leading-relaxed">
              After 13 years leading vaccine RWE at Pfizer, I can tell you —
              every effectiveness study is still a 6-month marathon of manual
              work.
            </p>
            <p className="text-right mt-6 text-gray-400 text-xl">
              — Dr. Myint Tin Tin Htar, Co-Founder
            </p>
          </div>
        </div>
      ),
    },

    // Slide 3: Market Opportunity
    {
      title: "Market Opportunity",
      content: (
        <div className="space-y-10">
          <div className="text-center mb-8">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              $48B RWE Market by 2032
            </h3>
            <p className="text-2xl text-gray-600">
              Growing at 13.3% CAGR • Post-COVID Tailwinds
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
              <TrendingUp className="w-16 h-16 mb-6" />
              <div className="text-7xl font-bold mb-4">$48B</div>
              <div className="text-2xl text-blue-100 mb-2">
                Market Size (2032)
              </div>
              <div className="text-xl text-blue-200">13.3% Annual Growth</div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-2xl p-8 border-4 border-green-200">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <div className="font-bold text-2xl mb-3">FDA Mandate</div>
                <div className="text-gray-700 text-lg">
                  21st Century Cures Act requires RWE integration
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 border-4 border-blue-200">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <div className="font-bold text-2xl mb-3">Post-COVID Surge</div>
                <div className="text-gray-700 text-lg">
                  Vaccine surveillance now permanent infrastructure
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-4 border-yellow-300 rounded-2xl p-8">
            <p className="text-2xl text-gray-800">
              <span className="font-bold text-yellow-700">The Gap:</span> Only
              35 products included RWE in FDA submissions since 2016. No
              specialized tools exist for vaccine-specific RWE.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 4: Solution
    {
      title: "Solution",
      content: (
        <div className="space-y-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center">
            <h3 className="text-5xl font-bold mb-6">
              AI-Powered Vaccine RWE Platform
            </h3>
            <p className="text-3xl text-blue-100">
              End-to-end vaccine RWE workflow with regulatory export templates
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border-4 border-blue-200 shadow-xl hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="font-bold text-3xl mb-4 text-gray-900">
                Protocol Generation
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI creates study protocols following vaccine-specific PICO
                frameworks in minutes
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border-4 border-purple-200 shadow-xl hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="font-bold text-3xl mb-4 text-gray-900">
                Database Integration
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect European EHRs, US claims data, and vaccine registries
                seamlessly
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border-4 border-green-200 shadow-xl hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="font-bold text-3xl mb-4 text-gray-900">
                Regulatory Export
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                FDA IND, eCTD, and SDTM export templates with automated PRISMA
                flowcharts
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border-4 border-orange-200 shadow-xl hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="font-bold text-3xl mb-4 text-gray-900">
                Vaccine-Specific
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                Pre-built templates for effectiveness, safety, and breakthrough
                studies
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Competitive Advantage
    {
      title: "Why We Win",
      content: (
        <div className="space-y-10">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl p-10 text-center">
            <h3 className="text-5xl font-bold mb-4">
              Domain-Specific vs Generic Tools
            </h3>
            <p className="text-2xl text-green-100">
              Built BY vaccine scientists FOR vaccine scientists
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="bg-red-50 rounded-2xl p-10 border-4 border-red-200">
              <h4 className="text-3xl font-bold text-red-700 mb-8">
                ❌ Covidence / Rayyan
              </h4>
              <ul className="space-y-5 text-xl">
                <li className="flex items-start">
                  <span className="text-red-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    Generic for all medical research
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    No vaccine-specific workflows
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    Manual database querying
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    Limited regulatory exports
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    No real-time collaboration
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-10 border-4 border-green-300">
              <h4 className="text-3xl font-bold text-green-700 mb-8">
                ✅ VaxEvidence
              </h4>
              <ul className="space-y-5 text-xl">
                <li className="flex items-start">
                  <span className="text-green-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    <strong>Purpose-built for vaccines</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    Pre-configured VE metrics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    Integrated database connectors
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    FDA/EMA exports built-in
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-3xl mr-4">•</span>
                  <span className="text-gray-800">
                    Domain AI + expert validation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-2xl p-10 text-center">
            <p className="text-4xl font-bold">
              Complete End-to-End Platform — No Competitor Offers This
            </p>
          </div>
        </div>
      ),
    },

    // Slide 6: Business Model
    {
      title: "Business Model",
      content: (
        <div className="space-y-10">
          <div className="text-center mb-8">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              B2B SaaS Pricing
            </h3>
            <p className="text-2xl text-gray-600">
              Tiered by organization size
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl p-10 shadow-2xl text-center">
              <div className="text-2xl mb-6 text-blue-100">
                Academic / Startup
              </div>
              <div className="text-7xl font-bold mb-4">$3K</div>
              <div className="text-2xl text-blue-100">per seat/year</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl p-10 shadow-2xl text-center transform scale-110">
              <div className="text-2xl mb-6 text-purple-100">
                Mid-size Biotech
              </div>
              <div className="text-7xl font-bold mb-4">$15K</div>
              <div className="text-2xl text-purple-100">per seat/year</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-10 shadow-2xl text-center">
              <div className="text-2xl mb-6 text-green-100">Big Pharma</div>
              <div className="text-7xl font-bold mb-4">$50K</div>
              <div className="text-2xl text-green-100">per seat/year</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 border-4 border-gray-200 shadow-xl">
            <h4 className="text-3xl font-bold mb-8 text-center">
              3-Year Revenue Projections
            </h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
                <span className="font-semibold text-2xl">
                  Year 1: 10 customers × $15K avg
                </span>
                <span className="text-5xl font-bold text-blue-600">$150K</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-purple-50 rounded-2xl border-2 border-purple-200">
                <span className="font-semibold text-2xl">
                  Year 2: 40 customers × $20K avg
                </span>
                <span className="text-5xl font-bold text-purple-600">
                  $800K
                </span>
              </div>
              <div className="flex items-center justify-between p-6 bg-green-50 rounded-2xl border-2 border-green-200">
                <span className="font-semibold text-2xl">
                  Year 3: 100 customers × $25K avg
                </span>
                <span className="text-5xl font-bold text-green-600">$2.5M</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 7: Go-to-Market
    {
      title: "Go-to-Market",
      content: (
        <div className="space-y-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center">
            <h3 className="text-5xl font-bold mb-4">Network-First Strategy</h3>
            <p className="text-3xl text-blue-100">500+ warm leads from Day 1</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 border-4 border-blue-200 shadow-xl">
              <div className="text-6xl mb-6">🎯</div>
              <h4 className="font-bold text-3xl mb-6 text-blue-600">Phase 1</h4>
              <div className="text-xl font-semibold mb-4">
                Warm Network (Mo 1-6)
              </div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• 5 pilot customers</li>
                <li>• Pfizer, Sanofi contacts</li>
                <li>• ECDC/PROMISE network</li>
                <li>• Academic institutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border-4 border-purple-200 shadow-xl">
              <div className="text-6xl mb-6">📢</div>
              <h4 className="font-bold text-3xl mb-6 text-purple-600">
                Phase 2
              </h4>
              <div className="text-xl font-semibold mb-4">
                Industry (Mo 7-12)
              </div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Conference presentations</li>
                <li>• Case study publications</li>
                <li>• LinkedIn thought leadership</li>
                <li>• CRO partnerships</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border-4 border-green-200 shadow-xl">
              <div className="text-6xl mb-6">🚀</div>
              <h4 className="font-bold text-3xl mb-6 text-green-600">
                Phase 3
              </h4>
              <div className="text-xl font-semibold mb-4">Scale (Year 2+)</div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Sales team</li>
                <li>• Top 50 pharma/biotech</li>
                <li>• ECDC/WHO partnerships</li>
                <li>• Expand to infectious diseases</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-4 border-yellow-300 rounded-2xl p-8">
            <p className="text-2xl text-gray-800">
              <span className="font-bold text-yellow-700">Key Advantage:</span>{" "}
              Dr. Myint's 15-year network provides direct access to
              decision-makers at Pfizer, Sanofi, ECDC, and academic
              institutions.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 8: Team
    {
      title: "Team",
      content: (
        <div className="space-y-10">
          <div className="text-center mb-8">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              Strong Founder-Market Fit
            </h3>
            <p className="text-2xl text-gray-600">
              15 years domain expertise meets full-stack AI capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-12 border-4 border-blue-200 shadow-2xl">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-8 mx-auto">
                MT
              </div>
              <h3 className="text-4xl font-bold mb-3 text-center">
                Dr. Myint Tin Tin Htar
              </h3>
              <div className="text-blue-600 font-semibold mb-8 text-2xl text-center">
                Co-Founder & CMO
              </div>
              <ul className="space-y-4 text-xl text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>13 years at Pfizer</strong> (Global Epi Lead)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>15+ years vaccine RWE experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Led EU PROMISE & ADVANCE consortia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>33+ peer-reviewed publications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Oxford Strategic Leadership (2025)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-12 border-4 border-purple-200 shadow-2xl">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-8 mx-auto">
                YO
              </div>
              <h3 className="text-4xl font-bold mb-3 text-center">
                Your Name Here
              </h3>
              <div className="text-purple-600 font-semibold mb-8 text-2xl text-center">
                Co-Founder & CTO
              </div>
              <ul className="space-y-4 text-xl text-gray-700">
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Data Science & AI</strong> expertise
                  </span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Cloud & Software Engineering</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Station F startup ecosystem</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Full-stack development (React, Python)</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Rapid MVP builder & architect</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-10 border-4 border-green-200">
            <h4 className="text-3xl font-bold mb-8 text-center">
              Why This Team Wins
            </h4>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-4">🎯</div>
                <div className="font-bold text-2xl mb-3 text-green-600">
                  Domain Expertise
                </div>
                <p className="text-lg text-gray-700">
                  Dr. Myint lived the problem for 15 years in vaccine RWE
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <div className="font-bold text-2xl mb-3 text-blue-600">
                  Technical Execution
                </div>
                <p className="text-lg text-gray-700">
                  Full-stack AI to build and iterate fast
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🤝</div>
                <div className="font-bold text-2xl mb-3 text-purple-600">
                  Network Access
                </div>
                <p className="text-lg text-gray-700">
                  500+ warm leads to pharma decision-makers
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 9: Traction & Roadmap
    {
      title: "Roadmap",
      content: (
        <div className="space-y-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center">
            <h3 className="text-5xl font-bold mb-4">Next 12 Months</h3>
            <p className="text-3xl text-blue-100">From MVP to $150K ARR</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-10 border-l-8 border-blue-500 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-3xl text-gray-900">
                  Q1 2026: Beta Launch
                </h4>
                <span className="text-blue-600 font-semibold text-2xl">
                  Months 1-2
                </span>
              </div>
              <ul className="space-y-3 text-xl text-gray-700">
                <li>✅ Complete MVP (protocol generator + AI extraction)</li>
                <li>✅ Onboard 3 pilot customers from network</li>
                <li>✅ Collect testimonials and refine product</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border-l-8 border-purple-500 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-3xl text-gray-900">
                  Q2 2026: First Revenue
                </h4>
                <span className="text-purple-600 font-semibold text-2xl">
                  Months 3-6
                </span>
              </div>
              <ul className="space-y-3 text-xl text-gray-700">
                <li>🎯 Convert pilots to paid: $30K ARR target</li>
                <li>🎯 Present at ESPID conference (May 2026)</li>
                <li>🎯 Add database integration features</li>
                <li>🎯 Hire first sales/support person</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border-l-8 border-green-500 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-3xl text-gray-900">
                  Q3-Q4 2026: Scale
                </h4>
                <span className="text-green-600 font-semibold text-2xl">
                  Months 7-12
                </span>
              </div>
              <ul className="space-y-3 text-xl text-gray-700">
                <li>🚀 Reach $150K ARR (10 customers)</li>
                <li>🚀 Publish case study in Vaccine journal</li>
                <li>🚀 Partner with 2 CROs for distribution</li>
                <li>🚀 Raise Seed round ($1-2M)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 10: The Ask
    {
      title: "The Ask",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-16 text-center shadow-2xl">
            <h3 className="text-7xl font-bold mb-6">$1.5M Seed Round</h3>
            <p className="text-4xl text-blue-100">
              18-month runway to $500K ARR
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 w-full max-w-5xl">
            <div className="bg-white rounded-3xl p-10 border-4 border-gray-200 shadow-xl">
              <h4 className="text-3xl font-bold mb-8 text-center">
                Use of Funds
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b-2">
                  <span className="font-semibold text-xl">
                    Product Development
                  </span>
                  <span className="text-4xl font-bold text-blue-600">40%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-2">
                  <span className="font-semibold text-xl">
                    Sales & Marketing
                  </span>
                  <span className="text-4xl font-bold text-purple-600">
                    30%
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-2">
                  <span className="font-semibold text-xl">Team Expansion</span>
                  <span className="text-4xl font-bold text-green-600">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xl">Operations</span>
                  <span className="text-4xl font-bold text-orange-600">
                    10%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border-4 border-gray-200 shadow-xl">
              <h4 className="text-3xl font-bold mb-8 text-center">
                18-Month Milestones
              </h4>
              <ul className="space-y-6 text-xl text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>50+ paying customers</strong> across pharma,
                    biotech, academic
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>$500K ARR</strong> with 70%+ gross margins
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>5 case studies</strong> published in peer-reviewed
                    journals
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Series A ready</strong> with proven product-market
                    fit
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-10 text-center max-w-4xl">
            <p className="text-3xl font-bold">
              Let's transform vaccine research together. Join us in building the
              future of Real-World Evidence.
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl text-gray-600 mb-4">Contact</p>
            <p className="text-xl text-gray-800 font-semibold">
              hello@vaxevidence.com
            </p>
            <p className="text-lg text-gray-600">
              Station F, Paris • www.vaxevidence.com
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Slide Counter */}
        <div className="text-center mb-6">
          <span className="text-gray-600 text-lg">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>

        {/* Main Slide */}
        <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[700px] mb-8">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition text-lg font-semibold"
          >
            <ChevronLeft className="w-6 h-6" />
            <span>Previous</span>
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide
                    ? "bg-blue-600 w-12"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition text-lg font-semibold"
          >
            <span>Next</span>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
