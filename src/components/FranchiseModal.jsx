import { useState, useEffect } from "react";
import { X, Briefcase, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

const initialData = {
  name: "",
  phone: "",
  email: "",
  investmentRange: "3 - 3.5 Lakhs",
  message: "",
};

const inputCls = (err) =>
  `w-full px-3 py-1.5 sm:py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#194B9E] ${
    err ? "border-rose-500 bg-rose-50" : "border-stone-300 bg-stone-50/50"
  }`;

function FieldError({ message }) {
  if (!message) return null;
  return <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">{message}</span>;
}

export default function FranchiseModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setErrors({});
      return;
    }
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your name";
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) e.phone = "Please enter mobile number";
    else if (cleanPhone.length < 10) e.phone = "Enter a valid 10-digit number";
    if (!formData.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = `Hello Chocolate Kids,

I am interested in the Chocolate Kids franchise opportunity.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim()}
Investment Range: ${formData.investmentRange}
Message: ${formData.message.trim() || "None"}

Please contact me regarding the franchise opportunity.

Thank you.`;
    window.open(
      `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="franchise-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#194B9E] via-[#1D4ED8] to-[#2563EB] text-white p-3.5 sm:p-4 relative">
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/20 hover:bg-black/30 rounded-full p-1.5 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-amber-200 text-[10px] font-black uppercase tracking-wider mb-1">
            <Briefcase className="w-3 h-3 text-amber-300" />
            <span>Franchise Application</span>
          </div>
          <h3 id="franchise-modal-title" className="font-heading font-black text-lg sm:text-xl text-white flex flex-wrap items-center gap-1.5">
            <span>Partner with</span> <BrandBadge className="text-xs px-2 py-0.5" />
          </h3>
          <p className="text-[11px] sm:text-xs text-white/90 font-medium mt-0.5">
            Share your details and our franchise director will arrange an introductory discussion.
          </p>
        </div>

        <div className="p-4 sm:p-5 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-black text-lg text-[#3D1A0D]">Application Received!</h4>
              <p className="text-xs text-[#5A2E1B]/80 max-w-xs mx-auto leading-relaxed">
                Thank you for your interest in becoming a <BrandBadge isInline className="text-[0.85em]" /> franchise partner. Our team will contact you shortly.
              </p>
              <div className="pt-2 flex items-center justify-center gap-2">
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#5A2E1B] bg-amber-100 hover:bg-amber-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#194B9E] hover:bg-[#143D82] shadow-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#3D1A0D] mb-1">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. S. Venkat Reddy" className={inputCls(errors.name)} />
                  <FieldError message={errors.name} />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#3D1A0D] mb-1">Mobile Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit number" className={inputCls(errors.phone)} />
                  <FieldError message={errors.phone} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#3D1A0D] mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. partner@example.com" className={inputCls(errors.email)} />
                  <FieldError message={errors.email} />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#3D1A0D] mb-1">Investment Range</label>
                  <select
                    name="investmentRange"
                    value={formData.investmentRange}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 sm:py-2 rounded-lg border border-stone-300 bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#194B9E]"
                  >
                    <option value="3 - 3.5 Lakhs">₹3 Lakhs – ₹3.5 Lakhs</option>
                    <option value="8 - 10 Lakhs">₹8 Lakhs – ₹10 Lakhs</option>
                    <option value="Flexible / Need guidance">Flexible / Need guidance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3D1A0D] mb-1">Message (Optional)</label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any requirements, timeline or questions..."
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-stone-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#194B9E]"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#194B9E] hover:bg-[#143D82] shadow-sm transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit and Connect on WhatsApp</span>
                </button>
              </div>

              <div className="pt-1 text-center">
                <p className="text-[10px] text-[#5A2E1B]/70 font-semibold">
                  Prefer a call?{" "}
                  <a href={`tel:${schoolInfo.phone}`} className="text-[#194B9E] font-bold hover:underline">
                    {schoolInfo.phoneFormatted}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
