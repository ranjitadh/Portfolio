"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useForm, ValidationError } from "@formspree/react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [state, handleSubmit] = useForm("xpqydgnw")
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ranzeet60@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Big statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <p
            className="text-xs uppercase tracking-[0.2em] font-medium mb-8"
            style={{ color: "hsl(0 0% 60%)" }}
          >
            Get in touch
          </p>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.05]"
            style={{ color: "hsl(0 0% 10%)" }}
          >
            Have something
            <br />
            interesting in mind?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg"
            style={{ color: "hsl(0 0% 50%)" }}
          >
            Let&apos;s build it.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-10"
          >
            {/* Email */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.15em] font-medium mb-3"
                style={{ color: "hsl(0 0% 55%)" }}
              >
                Email
              </p>
              <button
                onClick={handleCopyEmail}

                className="group relative text-lg md:text-xl font-medium transition-colors duration-300"
                style={{ color: "hsl(0 0% 15%)" }}
              >
                <span className="group-hover:tracking-wide transition-all duration-300">
                  ranzeet60@gmail.com
                </span>
                <span
                  className="absolute -top-1 -right-8 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "hsl(0 0% 60%)" }}
                >
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </div>

            {/* Phone */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.15em] font-medium mb-3"
                style={{ color: "hsl(0 0% 55%)" }}
              >
                Phone
              </p>
              <a
                href="tel:+9779809517297"

                className="text-lg md:text-xl font-medium transition-colors duration-300 hover:opacity-60"
                style={{ color: "hsl(0 0% 15%)" }}
              >
                +977 9809517297
              </a>
            </div>

            {/* Location */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.15em] font-medium mb-3"
                style={{ color: "hsl(0 0% 55%)" }}
              >
                Location
              </p>
              <p
                className="text-lg md:text-xl font-medium"
                style={{ color: "hsl(0 0% 15%)" }}
              >
                Lalitpur, Nepal
              </p>
            </div>

            {/* Upwork */}
            <div className="pt-6">
              <a
                href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d"
                target="_blank"
                rel="noopener noreferrer"

                className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: "hsl(0 0% 10%)",
                  color: "hsl(40 20% 95%)",
                }}
              >
                Hire me on Upwork
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            {state.succeeded ? (
              <div
                className="py-20 text-center"
                style={{ borderTop: "1px solid hsl(30 15% 85%)" }}
              >
                <p
                  className="text-2xl font-heading font-bold mb-2"
                  style={{ color: "hsl(0 0% 10%)" }}
                >
                  Message sent.
                </p>
                <p style={{ color: "hsl(0 0% 50%)" }}>
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[10px] uppercase tracking-[0.15em] font-medium block mb-2"
                      style={{ color: "hsl(0 0% 55%)" }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"

                      className="w-full py-3 bg-transparent text-sm outline-none transition-colors placeholder:opacity-40"
                      style={{
                        borderBottom: "1px solid hsl(30 15% 85%)",
                        color: "hsl(0 0% 10%)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "hsl(0 0% 10%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "hsl(30 15% 85%)")
                      }
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-xs mt-1"
                      style={{ color: "hsl(0 0% 60%)" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[10px] uppercase tracking-[0.15em] font-medium block mb-2"
                      style={{ color: "hsl(0 0% 55%)" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"

                      className="w-full py-3 bg-transparent text-sm outline-none transition-colors placeholder:opacity-40"
                      style={{
                        borderBottom: "1px solid hsl(30 15% 85%)",
                        color: "hsl(0 0% 10%)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "hsl(0 0% 10%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "hsl(30 15% 85%)")
                      }
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-xs mt-1"
                      style={{ color: "hsl(0 0% 60%)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-[0.15em] font-medium block mb-2"
                    style={{ color: "hsl(0 0% 55%)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."

                    className="w-full py-3 bg-transparent text-sm outline-none transition-colors resize-none placeholder:opacity-40"
                    style={{
                      borderBottom: "1px solid hsl(30 15% 85%)",
                      color: "hsl(0 0% 10%)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "hsl(0 0% 10%)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "hsl(30 15% 85%)")
                    }
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs mt-1"
                    style={{ color: "hsl(0 0% 60%)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}

                  className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 disabled:opacity-40"
                  style={{
                    backgroundColor: "hsl(0 0% 10%)",
                    color: "hsl(40 20% 95%)",
                  }}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
