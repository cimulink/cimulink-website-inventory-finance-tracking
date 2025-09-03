"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, BookOpen, DollarSign, Package, Users, Zap, Shield, TrendingUp, AlertTriangle, Clock, FileText, BarChart3, Settings, Database, ShoppingCart, Rocket, Wrench, Target } from "lucide-react";
import Image from "next/image";
import { GradientText } from "@/components/ui/enhanced/gradient-text";
import { RetroGrid } from "@/components/ui/enhanced/retro-grid";
import { Meteors } from "@/components/ui/enhanced/meteors";
import { ContactSection } from "@/components/ui/enhanced/contact-section";
import Link from "next/link";
import { BrandedText } from "@/components/ui/enhanced/branded-text";

export default function BookLinkPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-16 md:pt-20">
        <RetroGrid className="absolute inset-0" />
        <Meteors number={20} />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight font-poppins transition-all duration-700 hover:scale-105">
                Stop Drowning in 
                <GradientText 
                  text="Spreadsheets" 
                  className="block"
                  gradient="linear-gradient(90deg, #ef4444 0%, #f97316 50%, #eab308 100%)"
                />.
                Start Selling More 
                <GradientText 
                  text="Books" 
                  className=""
                  gradient="linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"
                />.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-poppins">
                The all-in-one platform that automates your publishing backoffice operations
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
                    Book a Demo
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg" 
                  className="text-lg px-8 py-4 font-poppins border-2 hover:bg-accent transition-all duration-300 hover:scale-105"
                >
                  <Link href="/">
                    ← Back to <BrandedText brand="tech-copilot" size="sm" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* App Screenshot */}
            <div className="mt-16">
              <div className="rounded-2xl w-full shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
                <Image 
                  src="/images/BookLink_dashboard_preview.png" 
                  alt="BookLink Dashboard Preview" 
                  width={1400} 
                  height={900} 
                  quality={95}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section - Enhanced */}
      <section id="pain-points" className="relative py-20 bg-gradient-to-br from-red-50/50 via-background to-orange-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:30px_30px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair">
                Is Your Backoffice 
                <GradientText 
                  text="Struggling" 
                  className=""
                  gradient="linear-gradient(90deg, #ef4444 0%, #f97316 100%)"
                /> to Keep Up?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
                Publishers and educational institutions face unique operational challenges that generic solutions can't solve.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group relative p-8 bg-gradient-to-br from-white to-red-50/50 border-red-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <AlertTriangle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-red-800 group-hover:text-red-900 transition-colors">Inventory Chaos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      Managing stock across multiple warehouses and sales channels with spreadsheets leads to costly stockouts and overstocking errors.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-orange-50/50 border-orange-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-orange-800 group-hover:text-orange-900 transition-colors">Lack of Forecasting & Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      Without predictive insights on when to reorder or which books are selling to specific demographics, you miss opportunities and waste resources.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors">Platform Integration Struggles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      Manually managing orders across Flipkart, Amazon, and other platforms creates delays, errors, and missed sales opportunities.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-purple-800 group-hover:text-purple-900 transition-colors">Book Set Management Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      Managing complex book sets and bundles is challenging - tracking individual books vs. sets, partial fulfillment, and set-specific inventory levels.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section id="why-choose-us" className="relative py-20 bg-gradient-to-br from-green-50/30 via-background to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/70 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                Purpose-Built for 
                <GradientText 
                  text="Publishing" 
                  className=""
                  gradient="linear-gradient(90deg, #10b981 0%, #059669 100%)"
                /> & 
                <GradientText 
                  text="Education" 
                  className=""
                  gradient="linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)"
                />
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                Unlike generic inventory systems, BookLink understands the unique complexities of book distribution and provides specialized solutions.
              </p>
              
              {/* Solution Screenshot */}
              <div className="mt-12">
                <div className="rounded-2xl w-full shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <Image 
                    src="/images/BookLink_solutions_overview.png" 
                    alt="BookLink Solutions Overview" 
                    width={1400} 
                    height={700} 
                    quality={95}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Complete Restoration */}
      <section id="features" className="relative py-20 bg-gradient-to-br from-blue-50/30 via-background to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                Everything You Need to 
                <GradientText 
                  text="Automate" 
                  className=""
                  gradient="linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)"
                /> Your Publishing Operations
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                From inventory tracking to financial reconciliation, BookLink provides all the tools you need in one integrated platform.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <Card className="group relative p-8 bg-gradient-to-br from-white to-slate-50/50 border-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-slate-800 transition-colors">Inventory Management</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span>Centralized inventory view across warehouses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span>Multi-channel integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span>Real-time stock levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span>Automated low stock alerts</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-800 transition-colors">Warehouse Operations</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>Multi-warehouse management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>Purchase order management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>Stock auditing & cycle counts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>Stock transfers between locations</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-green-50/50 border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-green-800 transition-colors">Batch Management</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span>Student batch creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span>Book set definition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span>Batch-book assignment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span>Batch allocation tracking</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-purple-800 transition-colors">Order Management</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span>Order processing & lifecycle tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span>Packaging verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span>Shipment tracking integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span>Dispatch management</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-orange-50/50 border-orange-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-orange-800 transition-colors">Analytics & Reporting</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span>Real-time dashboards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span>Sales & inventory reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span>Forecasting tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span>Custom report builder</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-pink-50/50 border-pink-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-pink-800 transition-colors">Returns & Support</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                      <span>RMA creation & processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                      <span>Customer support portal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                      <span>Order lookup by ID</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                      <span>Refund processing</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Complete Dashboard Overview */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                Complete Dashboard 
                <GradientText 
                  text="Overview" 
                  className=""
                  gradient="linear-gradient(90deg, #10b981 0%, #059669 100%)"
                />
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
                Everything you need to manage your publishing operations from one intuitive, powerful dashboard.
              </p>
            </div>
            <div className="rounded-2xl w-full shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
              <Image 
                src="/images/BookLink_solutions_overview.png" 
                alt="BookLink Complete Solutions Overview" 
                width={1400} 
                height={900} 
                quality={95}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-20">
          {/* Value Prop 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6">Achieve Perfect Inventory Control, From Warehouse to Customer</h3>
              <p className="text-lg text-gray-600 mb-6">
                Stop guessing your stock levels. BookLink provides a real-time, centralized view of your entire inventory across multiple warehouses and sales channels. Prevent costly stockouts, reduce overstocking, and know exactly what you have and where it is, at all times.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Real-time inventory tracking across all locations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Automatic low-stock alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Sales channel synchronization</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-xl w-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <Image 
                  src="/images/inventory_management_module.png" 
                  alt="Inventory Management Module" 
                  width={700} 
                  height={500} 
                  quality={95}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Value Prop 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-xl w-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <Image 
                  src="/images/financial_tracking_integration.png" 
                  alt="Financial Tracking Integration" 
                  width={700} 
                  height={500} 
                  quality={95}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Automate Financial Tracking and Ditch the Spreadsheets</h3>
              <p className="text-lg text-gray-600 mb-6">
                Reclaim weeks of manual work each month. Our platform automatically syncs sales orders with inventory and payment data, making financial tracking fast, simple, and accurate. Process returns, manage refunds, and get a clear financial picture in minutes, not days.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Automatic sales order synchronization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Real-time financial reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>One-click reconciliation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Value Prop 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6">Smart Forecasting & Advanced Reporting</h3>
              <p className="text-lg text-gray-600 mb-6">
                Make data-driven decisions with powerful forecasting tools and comprehensive reporting. Predict demand, optimize inventory levels, and gain insights into sales patterns and customer behavior to stay ahead of market trends.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Predictive demand forecasting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Demographic sales analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Custom reporting dashboards</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-xl w-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <Image 
                  src="/images/BookLink_dashboard_preview.png" 
                  alt="Forecasting & Analytics Dashboard" 
                  width={700} 
                  height={500} 
                  quality={95}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Value Prop 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-xl w-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <Image 
                  src="/images/integration_hub_interface.png" 
                  alt="Integration Hub Interface" 
                  width={700} 
                  height={500} 
                  quality={95}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Seamless Integration with Flipkart, Amazon & Your Internal Systems</h3>
              <p className="text-lg text-gray-600 mb-6">
                Connect all your sales channels and internal systems effortlessly. BookLink integrates with major marketplaces like Flipkart and Amazon, plus your existing accounting, CRM, and warehouse management systems for complete operational harmony.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Flipkart & Amazon marketplace sync</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>ERP & accounting system integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>API-first architecture for custom connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50/30 via-background to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/70 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                Your Streamlined 
                <GradientText 
                  text="Backoffice" 
                  className=""
                  gradient="linear-gradient(90deg, #10b981 0%, #059669 100%)"
                /> is 3 Steps Away
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
                Transform your publishing operations with our proven implementation process designed for rapid deployment and immediate impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group relative p-8 bg-gradient-to-br from-white to-green-50/50 border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      1
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-green-800 group-hover:text-green-900 transition-colors">Discovery & Strategy Call</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed text-center">
                      We map out your current backoffice workflows to understand your unique challenges and goals.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      2
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors">Platform Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed text-center">
                      We tailor BookLink to your exact needs, integrating your sales channels and migrating your data.
                    </p>
                  </CardContent>
                </div>
              </Card>
              
              <Card className="group relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      3
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-purple-800 group-hover:text-purple-900 transition-colors">Go Live & Grow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed text-center">
                      We launch your new, automated system and provide ongoing support to ensure your continued success.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50/50 via-background to-slate-100/50">
        <div className="absolute inset-0 bg-grid-black/5 bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-in fade-in duration-700">Frequently Asked Questions</h2>
            <div className="animate-in slide-in-from-bottom duration-700 delay-200">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white/70 backdrop-blur-sm rounded-lg px-6 border hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">We are an institute, not a publisher. Is this for us?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes. BookLink is perfect for institutes. The Batch Management feature is designed specifically for managing book distribution for courses, departments, and student groups.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white/70 backdrop-blur-sm rounded-lg px-6 border hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">Can BookLink integrate with our existing accounting/e-commerce software?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely. We specialize in creating a connected ecosystem. BookLink is built to integrate with leading platforms like QuickBooks, Shopify, and major shipping carriers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-white/70 backdrop-blur-sm rounded-lg px-6 border hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">How long does implementation take?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    While it varies, our focused process allows most clients to go live within 4-6 weeks. Our goal is to get you operating more efficiently as quickly as possible.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-white/70 backdrop-blur-sm rounded-lg px-6 border hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">What if we need functionality that isn't in BookLink?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    That's the benefit of working with Tech Copilot. For unique requirements, we offer custom development services to build features or integrations tailored to your specific workflow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="bg-white/70 backdrop-blur-sm rounded-lg px-6 border hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">Is this only for large publishers?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Not at all. BookLink is designed to scale. It's powerful enough for large university presses but accessible for growing independent publishers who are ready to move beyond spreadsheets.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}