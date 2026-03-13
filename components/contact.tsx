'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xpqydgnw");

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Connect
          </h2>
          <p className="text-lg text-zinc-400">
            Currently available for freelance projects and full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Contact Details</h3>
              <div className="space-y-6">
                <a href="mailto:ranzeet60@gmail.com" className="group block">
                  <p className="text-zinc-500 text-xs mb-1">Email</p>
                  <p className="text-zinc-100 group-hover:text-zinc-400 transition-colors">ranzeet60@gmail.com</p>
                </a>
                <a href="tel:+9779809517297" className="group block">
                  <p className="text-zinc-500 text-xs mb-1">Phone</p>
                  <p className="text-zinc-100 group-hover:text-zinc-400 transition-colors">+977 9809517297</p>
                </a>
                <div className="block">
                  <p className="text-zinc-500 text-xs mb-1">Location</p>
                  <p className="text-zinc-100">Saddobato, Lalitpur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 border border-zinc-900 bg-zinc-900/50 rounded-3xl text-center space-y-4"
              >
                <CheckCircle className="w-12 h-12 text-zinc-100 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-zinc-400 max-w-sm mx-auto">
                  Thank you for reaching out. I will review your message and get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-500 uppercase tracking-tight ml-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-900/80 text-xs mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium text-zinc-500 uppercase tracking-tight ml-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-900/80 text-xs mt-1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-500 uppercase tracking-tight ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-900/80 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 disabled:opacity-50 transition-all"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

