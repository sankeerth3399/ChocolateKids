import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { branches, schoolInfo } from "../data";

export default function Branches() {
  return (
    <section id="branches" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Preschool Locations</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Find Your Nearest Chocolate Kids
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Discover our welcoming, safe, and engaging preschool campuses in Hyderabad. Visit either location to see our happy classrooms in action.
          </p>
        </div>

        {/* 2 Premium Branch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Branch Image */}
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-md">
                      {branch.branchNo}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white/95 text-stone-800 shadow-sm">
                      {branch.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading font-bold text-2xl text-stone-900 mb-2">
                    {branch.name}
                  </h3>

                  <div className="flex items-start gap-2.5 text-stone-600 text-sm mb-4 leading-relaxed">
                    <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    {branch.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-stone-100 mb-6">
                    {branch.highlights.slice(0, 4).map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-xs text-stone-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-7 pb-7 pt-0 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Call Button */}
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-700" />
                    <span>Call Now</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={schoolInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Directions Button */}
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-700" />
                    <span>Directions</span>
                  </a>
                </div>

                {/* View Campus Details Link */}
                <Link
                  to={`/branches/${branch.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
                >
                  <span>Explore Full Campus Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Branches Link */}
        <div className="mt-12 text-center">
          <Link
            to="/branches"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 shadow-2xs hover:shadow-xs transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-amber-800" />
            <span>Explore All Branches</span>
            <ArrowRight className="w-4 h-4 text-amber-800" />
          </Link>
        </div>

      </div>
    </section>
  );
}
