"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Code, Zap, Cpu, Brain, Users, TrendingUp, BarChart3, Settings, Database, Building2, ArrowRight, Map, Target, Wrench, BookOpen } from "lucide-react";
import Image from "next/image";
import { GradientText } from "@/components/ui/enhanced/gradient-text";
import { BrandedText } from "@/components/ui/enhanced/branded-text";
import { RetroGrid } from "@/components/ui/enhanced/retro-grid";
import { Meteors } from "@/components/ui/enhanced/meteors";
import { ContactSection } from "@/components/ui/enhanced/contact-section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <RetroGrid className="absolute inset-0" />
        <Meteors number={20} />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight font-poppins transition-all duration-700 hover:scale-105">
                Your 
                <GradientText 
                  text="Tech Copilot" 
                  className="block"
                  gradient="linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"
                />
                for Business Growth
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-poppins leading-relaxed">
                We audit your operations, define a strategic tech roadmap, and execute with precision to help you scale, optimize, and innovate. We translate your business goals into technical reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild
                  size="lg" 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-poppins"
                >
                  <a 
                    href="https://calendly.com/ajay_k_gupta/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-gradient-to-br from-blue-50/30 via-background to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                Tailored Solutions for Every 
                <GradientText 
                  text="Business Phase" 
                  className=""
                  gradient="linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)"
                />
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                From idea to enterprise, we provide technology services designed for your specific stage of growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* LaunchPad */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors">The LaunchPad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      For businesses just starting. Turn your idea into a market-ready product with an MVP and landing page.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              {/* GrowthEngine */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-green-50/50 border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-green-800 group-hover:text-green-900 transition-colors">The GrowthEngine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      For businesses hitting scaling challenges. Optimize your existing product for performance and growth.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              {/* Enterprise Velocity */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-purple-800 group-hover:text-purple-900 transition-colors">Enterprise Velocity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      For established businesses. Integrate systems and modernize legacy infrastructure for efficiency.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              {/* Automation Advantage */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-orange-50/50 border-orange-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-orange-800 group-hover:text-orange-900 transition-colors">Automation Advantage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      For any business with repetitive tasks. Deploy AI agents to automate workflows and reduce costs.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Blueprint Audit Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50/30 via-background to-slate-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                The 
                <GradientText 
                  text="Tech Blueprint Audit" 
                  className=""
                  gradient="linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)"
                />
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                Our foundational service for businesses unsure of their next steps. We dive deep to understand your challenges and create a strategic roadmap.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Discovery */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-indigo-50/50 border-indigo-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Map className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-800 font-playfair">Deep Dive Discovery</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    We conduct in-depth interviews to understand your business model, revenue streams, operational workflows, and long-term goals.
                  </p>
                </div>
              </Card>

              {/* Analysis */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 font-playfair">Systems & Process Analysis</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    We map out your current processes, identifying bottlenecks, manual tasks, and disconnected software systems.
                  </p>
                </div>
              </Card>

              {/* Opportunity */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-green-50/50 border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 font-playfair">Opportunity Identification</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    We pinpoint specific areas where technology can drive the most impact—cost savings, revenue growth, or customer experience enhancement.
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="mt-16 text-center">
              <Card className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-blue-800 font-playfair mb-4">The Deliverable</h3>
                  <p className="text-gray-600 leading-relaxed font-poppins mb-6">
                    A comprehensive <strong>"Tech Blueprint"</strong> document that outlines your current business phase from a technological perspective, a prioritized list of technology initiatives, a clear roadmap with recommended solutions, and estimated timelines and budget considerations.
                  </p>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <a 
                      href="https://calendly.com/ajay_k_gupta/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Schedule Your Tech Blueprint Audit
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Industry Section - The Hub and Spoke */}
      <section id="solutions" className="relative py-20 bg-gradient-to-br from-green-50/30 via-background to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                Industry Expertise with 
                <GradientText 
                  text="Hub & Spoke" 
                  className=""
                  gradient="linear-gradient(90deg, #10b981 0%, #059669 100%)"
                /> Architecture
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                While our core principles apply to any complex operation, we've developed specialized solutions for industries with unique challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* BookLink Card - First Vertical */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-600 font-poppins">For Book Sellers, Publishers & Institutions</h3>
                      <h4 className="text-2xl font-bold text-blue-800 font-playfair flex items-center gap-2">
                        Introducing <BrandedText brand="BookLink" size="md" />
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    A purpose-built platform to solve publishing-specific challenges like book set management, batch tracking, and sales forecasting.
                  </p>
                  
                  <div className="pt-4">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full group"
                    >
                      <Link href="/booklink" className="inline-flex items-center justify-center gap-2">
                        Explore <BrandedText brand="BookLink" size="sm" className="text-white" />
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Custom Solutions Card - Future Verticals */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-green-50/50 border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-600 font-poppins">For Your Unique Business</h3>
                      <h4 className="text-2xl font-bold text-green-800 font-playfair">Custom Development Solutions</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    Don't see your industry? Our team of solutions architects can work with you to analyze your specific workflows and build a tailored solution.
                  </p>
                  
                  <div className="pt-4">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-poppins shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full group"
                    >
                      <a 
                        href="https://calendly.com/ajay_k_gupta/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        Discuss a Custom Project
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="relative py-20 bg-gradient-to-br from-gray-50/30 via-background to-slate-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                Your Partner from 
                <GradientText 
                  text="Strategy" 
                  className=""
                  gradient="linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)"
                /> to 
                <GradientText 
                  text="Scale" 
                  className=""
                  gradient="linear-gradient(90deg, #10b981 0%, #059669 100%)"
                />
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                We don't just build software. We architect solutions that grow with your business and solve real operational challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-indigo-50/50 border-indigo-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-800 font-playfair">Discovery & Architecture</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    We dive deep into your current processes to map out your challenges and design a robust, scalable system architecture that addresses your specific needs.
                  </p>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 font-playfair">Development & Integration</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    Our team builds your custom solution, integrating with your existing software and sales channels for a seamless data flow across all your systems.
                  </p>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-green-50/50 border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 font-playfair">Implementation & Support</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    We manage the rollout, train your team, and provide ongoing support to ensure your operations run smoothly and your system evolves with your business.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tech Copilot Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50/30 via-background to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                More Than Software. 
                <GradientText 
                  text="A Solution" 
                  className=""
                  gradient="linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)"
                />.
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                Choose Tech Copilot for expertise that goes beyond code. We deliver solutions that understand your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Differentiator 1 */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 font-playfair">Deep Domain Expertise</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    We understand the nuances of business operations—not just the code. Our team has real-world experience with complex business workflows.
                  </p>
                </div>
              </Card>

              {/* Differentiator 2 */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-green-50/50 border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 font-playfair">Productized Services Model</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    Get the speed and reliability of a product with the tailored fit of a custom solution. Proven frameworks accelerate your project timeline.
                  </p>
                </div>
              </Card>

              {/* Differentiator 3 */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 font-playfair">Solutions Architect-Led</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    You work directly with an expert who understands your business goals from day one. No miscommunication, no generic solutions.
                  </p>
                </div>
              </Card>

              {/* Differentiator 4 */}
              <Card className="group relative p-8 bg-gradient-to-br from-white to-orange-50/50 border-orange-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-orange-800 font-playfair">API-First Architecture</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-poppins">
                    Our solutions are built to be flexible and connect with any tool you need, now and in the future. Future-proof your technology stack.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}