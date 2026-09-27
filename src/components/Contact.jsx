import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Clock, Navigation } from "lucide-react";
import { schoolInfo, branches } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            We'd Love to Hear From You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Have questions about admissions, daily routines, or visiting our campuses? Get in touch with our friendly admissions desk.
          </p>
        </div>

        {/* 3 Quick Action Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Direct Phone */}
          <div className="p-7 rounded-3xl bg-amber-50/70 border border-amber-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-200/70 text-amber-900 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-1">
                Call Us Directly
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Direct phone line for quick admission inquiries & campus visit slots.
              </p>
              <div className="text-lg font-extrabold text-amber-950 font-mono">
                {schoolInfo.phone}
              </div>
            </div>
            <div className="mt-6">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-7 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-200/70 text-emerald-900 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-1">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Instant chat assistance with pre-filled enquiry and quick responses.
              </p>
              <div className="text-lg font-extrabold text-emerald-950 font-mono">
                +91 {schoolInfo.phone}
              </div>
            </div>
            <div className="mt-6">
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className="p-7 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-200/80 text-stone-800 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-1">
                Send an Email
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                For formal enquiries, records, and detailed partnership correspondence.
              </p>
              <div className="text-sm font-bold text-stone-900 break-all">
                {schoolInfo.email}
              </div>
            </div>
            <div className="mt-6">
              <a
                href={`mailto:${schoolInfo.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-stone-800 bg-stone-200 hover:bg-stone-300 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>SEND EMAIL</span>
              </a>
            </div>
          </div>

        </div>

        {/* Branch Addresses & Direct Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Campus Addresses Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EE] border border-amber-200/70">
              <h3 className="font-heading font-bold text-2xl text-stone-900 mb-2">
                Official Campus Addresses
              </h3>
              <p className="text-xs text-stone-600 font-medium mb-6">
                Timings: Monday – Saturday: 8:30 AM – 1:00 PM. Parents are warmly invited to tour classrooms and meet teachers.
              </p>

              <div className="space-y-4">
                {branches.map((b) => (
                  <div
                    key={b.id}
                    className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                          {b.branchNo}
                        </span>
                        <span className="text-xs font-semibold text-stone-500">{b.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-stone-900 mb-1.5">
                        {b.name}
                      </h4>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                        <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{b.address}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <a
                        href={b.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open in Google Maps</span>
                      </a>
                      <a
                        href={`tel:${b.phone}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Campus</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Direct Message / Send Enquiry Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md">
            <h3 className="font-heading font-bold text-2xl text-stone-900 mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Fill out this quick form and our admissions desk will respond within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.elements.name.value;
                const phone = form.elements.phone.value;
                const email = form.elements.email.value;
                const message = form.elements.message.value;
                const text = `Hello Chocolate Kids! I would like to send an enquiry:%0A• Name: ${encodeURIComponent(name)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Email: ${encodeURIComponent(email)}%0A• Message: ${encodeURIComponent(message)}`;
                window.open(`https://wa.me/919515869889?text=${text}`, "_blank");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us what you'd like to know about Chocolate Kids..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
