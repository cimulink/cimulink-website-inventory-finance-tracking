'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { GradientText } from './gradient-text';
import { RetroGrid } from './retro-grid';
import { Meteors } from './meteors';

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/5 bg-[size:50px_50px]" />
      <RetroGrid className="opacity-5" cellSize={40} />
      <Meteors number={12} className="bg-blue-400/60" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-playfair leading-tight">
              Ready to 
              <GradientText 
                text="Transform" 
                className="block"
                gradient="linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"
              />
              Your Operations?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-poppins leading-relaxed max-w-3xl mx-auto">
              Take the next step towards streamlined operations. Let's discuss how BookFlow can revolutionize your business.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            
            {/* LinkedIn Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="https://img.icons8.com/?id=8808&format=png&size=32" 
                    alt="LinkedIn" 
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold font-poppins text-gray-800">Connect on LinkedIn</h3>
                  <p className="text-gray-600 font-poppins">Let's connect professionally</p>
                </div>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-poppins shadow-lg hover:shadow-xl transition-all duration-300 w-full group-hover:scale-105"
                >
                  <a 
                    href="linkedin.com/company/cimulink/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <img 
                      src="https://img.icons8.com/?id=8808&format=png&size=20" 
                      alt="LinkedIn" 
                      className="w-5 h-5 filter brightness-0 invert"
                    />
                    Visit LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="https://img.icons8.com/?id=12623&format=png&size=32" 
                    alt="Email" 
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold font-poppins text-gray-800">Send us an Email</h3>
                  <p className="text-gray-600 font-poppins">Get in touch directly</p>
                </div>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-poppins shadow-lg hover:shadow-xl transition-all duration-300 w-full group-hover:scale-105"
                >
                  <a 
                    href="mailto:build@cimulink.com"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <img 
                      src="https://img.icons8.com/?id=12623&format=png&size=20" 
                      alt="Email" 
                      className="w-5 h-5 filter brightness-0 invert"
                    />
                    build@cimulink.com
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
                Schedule Your 
                <GradientText 
                  text="Discovery Call" 
                  className=""
                  gradient="linear-gradient(90deg, #10b981 0%, #059669 100%)"
                />
              </h3>
              <p className="text-lg text-gray-700 font-poppins max-w-2xl mx-auto leading-relaxed">
                Book a no-obligation consultation to see how BookFlow can transform your publishing operations and drive growth.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-poppins text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a 
                  href="https://calendly.com/ajay_k_gupta/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book Discovery Call
                </a>
              </Button>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-poppins">
                <div className="flex items-center gap-2">
                  <img src="https://img.icons8.com/?id=3609&format=png&size=16" alt="Check" className="w-4 h-4" style={{filter: 'hue-rotate(120deg) saturate(2)'}} />
                  <span>No-obligation consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://img.icons8.com/?id=3609&format=png&size=16" alt="Check" className="w-4 h-4" style={{filter: 'hue-rotate(120deg) saturate(2)'}} />
                  <span>Customized solution demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://img.icons8.com/?id=3609&format=png&size=16" alt="Check" className="w-4 h-4" style={{filter: 'hue-rotate(120deg) saturate(2)'}} />
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}