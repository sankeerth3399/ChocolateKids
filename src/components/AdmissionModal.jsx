import { useState, useEffect } from "react";
import { X, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { schoolInfo } from "../data";
import { openWhatsApp } from "../utils/whatsapp";
import { cleanPhone, isValidPhone } from "../utils/validation";
import { BrandBadge } from "../utils/brandHelper";
import useScrollLock from "../hooks/useScrollLock";

const initialData = {
  parentName: "",
  phone: "",
  childName: "",
  childAge: "",
  program: "Playgroup (1.5 – 2.5 Yrs)",
  branch: "Dammaiguda Campus",
  message: "",
};

/** Enrol-your-child pop-up. Typed answers survive closing and reopening; errors reset each time. */
export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialData);
  if (!isOpen) return null;
  return <AdmissionModalContent formData={formData} setFormData={setFormData} onClose={onClose} />;
}

function AdmissionModalContent({ formData, setFormData, onClose }) {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useScrollLock(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = "Please enter parent's name";
    
    if (!cleanPhone(formData.phone)) {
      newErrors.phone = "Please enter contact mobile number";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }

    if (!formData.childName.trim()) newErrors.childName = "Please enter child's name";
    if (!formData.childAge.trim()) newErrors.childAge = "Please enter child's age";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const messageText = `*Preschool Admission Enquiry*\n\n` +
      `👤 *Parent Name:* ${formData.parentName.trim()}\n` +
      `📞 *Phone:* ${formData.phone.trim()}\n` +
      `👶 *Child Name:* ${formData.childName.trim()}\n` +
      `🎂 *Child Age:* ${formData.childAge.trim()}\n` +
      `🎓 *Program:* ${formData.program}\n` +
      `📍 *Preferred Campus:* ${formData.branch}\n` +
      (formData.message.trim() ? `💬 *Note:* ${formData.message.trim()}\n\n` : `\n`) +
      `Please share admission fee details and campus tour slots. Thank you!`;

    openWhatsApp(messageText);
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Modal Header */}
        <div className="bg-gradient-to-r from-[#C51F45] via-[#B91C1C] to-[#C51F45] text-white p-3.5 sm:p-4 relative">
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/20 hover:bg-black/30 rounded-full p-1.5 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <h3 id="modal-title" className="font-heading font-black text-lg sm:text-xl text-white flex flex-wrap items-center gap-1.5">
            <span>Enrol Your Child at</span> <BrandBadge className="text-xs px-2 py-0.5" />
          </h3>
          <p className="text-[11px] sm:text-xs text-white/90 font-medium mt-0.5">
            Fill this quick form to book a free campus tour & secure your child's seat.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-black text-lg text-[#111827]">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-xs text-[#142B4A]/80 max-w-xs mx-auto leading-relaxed">
                Thank you for contacting <BrandBadge isInline className="text-[0.85em]" /> Preschool. Our admissions counselor will connect with you on WhatsApp shortly.
              </p>
              <div className="pt-2 flex items-center justify-center gap-2">
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#142B4A] bg-amber-100 hover:bg-amber-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#C51F45] hover:bg-[#9E1836] shadow-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              {/* Parent & Child Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="admm-parentName" className="block text-[11px] font-bold text-[#111827] mb-1">
                    Parent's Name *
                  </label>
                  <input id="admm-parentName"
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full px-3 py-1.5 sm:py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#C51F45] ${
                      errors.parentName ? "border-rose-500 bg-rose-50" : "border-stone-300 bg-stone-50/50"
                    }`}
                  />
                  {errors.parentName && (
                    <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">
                      {errors.parentName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="admm-phone" className="block text-[11px] font-bold text-[#111827] mb-1">
                    Mobile Number *
                  </label>
                  <input id="admm-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className={`w-full px-3 py-1.5 sm:py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#C51F45] ${
                      errors.phone ? "border-rose-500 bg-rose-50" : "border-stone-300 bg-stone-50/50"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Child Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="admm-childName" className="block text-[11px] font-bold text-[#111827] mb-1">
                    Child's Name *
                  </label>
                  <input id="admm-childName"
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="e.g. Aarav"
                    className={`w-full px-3 py-1.5 sm:py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#C51F45] ${
                      errors.childName ? "border-rose-500 bg-rose-50" : "border-stone-300 bg-stone-50/50"
                    }`}
                  />
                  {errors.childName && (
                    <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">
                      {errors.childName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="admm-childAge" className="block text-[11px] font-bold text-[#111827] mb-1">
                    Child's Age *
                  </label>
                  <input id="admm-childAge"
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 2.5 Years"
                    className={`w-full px-3 py-1.5 sm:py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#C51F45] ${
                      errors.childAge ? "border-rose-500 bg-rose-50" : "border-stone-300 bg-stone-50/50"
                    }`}
                  />
                  {errors.childAge && (
                    <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">
                      {errors.childAge}
                    </span>
                  )}
                </div>
              </div>

              {/* Program & Campus Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="admm-program" className="block text-[11px] font-bold text-[#111827] mb-1">
                    Program
                  </label>
                  <select id="admm-program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 sm:py-2 rounded-lg border border-stone-300 bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#C51F45]"
                  >
                    <option value="Playgroup (1.5 – 2.5 Yrs)">Play Group (1.5 – 2.5 Yrs)</option>
                    <option value="Nursery (2.5 – 3.5 Yrs)">Nursery (2.5 – 3.5 Yrs)</option>
                    <option value="Junior KG / LKG (3.5 – 4.5 Yrs)">LKG (3.5 – 4.5 Yrs)</option>
                    <option value="Senior KG / UKG (4.5 – 5.5 Yrs)">UKG (4.5 – 5.5 Yrs)</option>
                    <option value="Day Care & Activity Club (1.5 – 8 Yrs)">Day Care (1.5 – 8 Yrs)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="admm-branch" className="block text-[11px] font-bold text-[#111827] mb-1">
                    Preferred Campus
                  </label>
                  <select id="admm-branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 sm:py-2 rounded-lg border border-stone-300 bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#C51F45]"
                  >
                    <option value="Dammaiguda Campus">Dammaiguda Campus</option>
                    <option value="Kapra / Yellareddyguda Campus">Kapra / Yellareddyguda Campus</option>
                    <option value="Yapral Campus">Yapral Campus</option>
                  </select>
                </div>
              </div>

              {/* Optional message */}
              <div>
                <label htmlFor="admm-message" className="block text-[11px] font-bold text-[#111827] mb-1">
                  Message / Visit Date (Optional)
                </label>
                <textarea id="admm-message"
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Planning to visit this weekend..."
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-stone-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#C51F45]"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#C51F45] hover:bg-[#9E1836] shadow-sm transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>
              </div>

              {/* Direct helpline note */}
              <div className="pt-1 text-center">
                <p className="text-[10px] text-[#142B4A]/70 font-semibold">
                  Prefer a call?{" "}
                  <a href={`tel:${schoolInfo.phone}`} className="text-[#C51F45] font-bold hover:underline">
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
