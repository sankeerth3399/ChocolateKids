import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

/**
 * Connect Us button only. It has no background or wrapper of its own, so it
 * sits directly on whatever section renders it (see AdmissionsCTA).
 */
export default function ConnectCTA() {
  return (
    <Link
      to="/contact"
      className="animate-wiggle-subtle inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold tracking-wide text-white bg-[#C51F45] hover:bg-[#A31838] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer select-none"
    >
      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
      <span>CONNECT US</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 shrink-0" />
    </Link>
  );
}
