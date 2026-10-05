import { useState } from "react";
import { MessageCircle, Phone, Copy, Check, AlertCircle, Sparkles, Send } from "lucide-react";
import { schoolInfo, branches } from "../data";
import BrandWatermark from "./BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    preferredBranch: "Branch 1: Dammaiguda",
    admissionFor: "Playgroup / Nursery",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'opening' | 'opened'
  const [copied, setCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Please enter parent or guardian name.";
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter a contact phone number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.childName.trim()) {
      newErrors.childName = "Please enter child's name.";
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = "Please enter child's age (e.g. 2.5 years, 3 years).";
    }

    if (!formData.preferredBranch) {
      newErrors.preferredBranch = "Please choose a preferred branch.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructMessage = () => {
    return `Hello Chocolate Kids,\n\nI am interested in admission for my child.\n\nParent Name: ${formData.parentName.trim()}\nPhone: ${formData.phone.trim()}\nEmail: ${formData.email.trim() || "Not provided"}\nChild Name: ${formData.childName.trim()}\nChild Age: ${formData.childAge.trim()}\nPreferred Branch: ${formData.preferredBranch}\nAdmission For: ${formData.admissionFor}\nMessage: ${formData.message.trim() || "None"}\n\nPlease contact me regarding the admission process.\n\nThank you.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const msg = constructMessage();
    setGeneratedMessage(msg);
    setStatus("opening");

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encoded}`;

    // Show friendly opening status, then trigger window.open
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setStatus("opened");
    }, 600);
  };

  const handleCopy = () => {
    const msg = generatedMessage || constructMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="admissions" className="py-20 sm:py-24 bg-[#FFF9F0] relative overflow-hidden">
      {/* Brand Logo Watermark */}
      <BrandWatermark position="center" size="xl" opacity={0.08} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0DD] text-[#5A2E1B] text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Admission Enquiry 2026-27</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#5A2E1B] tracking-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
            <span>Begin Your Child's Journey at</span> <BrandBadge className="text-[0.72em]" />
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A2E1B]/80 font-medium">
            Fill in the details below. We will pre-fill your admission enquiry directly on WhatsApp so our team can immediately guide you.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200/90 relative">
          
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Row 1: Parent Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Parent / Guardian Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.parentName
                      ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                      : "border-stone-300 bg-stone-50/40 focus:ring-amber-500 focus:border-amber-500"
                  }`}
                />
                {errors.parentName && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.parentName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9515869889"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                      : "border-stone-300 bg-stone-50/40 focus:ring-amber-500 focus:border-amber-500"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email & Child Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. parent@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                      : "border-stone-300 bg-stone-50/40 focus:ring-amber-500 focus:border-amber-500"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Child's Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="e.g. Aarav"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.childName
                      ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                      : "border-stone-300 bg-stone-50/40 focus:ring-amber-500 focus:border-amber-500"
                  }`}
                />
                {errors.childName && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.childName}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Child Age & Preferred Branch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Child's Age <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="e.g. 2.5 Years, 3 Years"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.childAge
                      ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                      : "border-stone-300 bg-stone-50/40 focus:ring-amber-500 focus:border-amber-500"
                  }`}
                />
                {errors.childAge && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.childAge}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Preferred Branch <span className="text-rose-500">*</span>
                </label>
                <select
                  name="preferredBranch"
                  value={formData.preferredBranch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="Branch 1: Dammaiguda">Branch 1: Dammaiguda (Sai Priya Colony)</option>
                  <option value="Branch 2: Kapra / Yellareddyguda">Branch 2: Kapra / Yellareddyguda (Shalivahana Colony)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Admission For */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Admission For
              </label>
              <select
                name="admissionFor"
                value={formData.admissionFor}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="Playgroup (1.5 - 2.5 yrs)">Playgroup (1.5 - 2.5 years)</option>
                <option value="Nursery (2.5 - 3.5 yrs)">Nursery (2.5 - 3.5 years)</option>
                <option value="LKG (3.5 - 4.5 yrs)">LKG (3.5 - 4.5 years)</option>
                <option value="UKG (4.5 - 5.5 yrs)">UKG (4.5 - 5.5 years)</option>
                <option value="Daycare / After-School Play">Daycare / After-School Play</option>
              </select>
            </div>

            {/* Row 5: Message */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Additional Questions or Message <span className="text-stone-400 font-normal">(Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Share any questions about timings, campus visit, or specific child needs..."
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            {/* Status Notifications */}
            {status === "opening" && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold flex items-center gap-2.5 animate-pulse">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Opening WhatsApp with your pre-filled admission details...</span>
              </div>
            )}

            {status === "opened" && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-800">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp opened with your details. Please press Send in WhatsApp.</span>
                </div>
                <p className="text-stone-600">
                  Did WhatsApp not open? Click the direct button below or call our admissions team.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(
                      generatedMessage || constructMessage()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Open WhatsApp Again
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold text-xs hover:bg-stone-50"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy Details"}</span>
                  </button>
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call: {schoolInfo.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-[30px] font-extrabold text-base text-white bg-[#F59E0B] hover:bg-[#D97706] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#F59E0B]" />
              <span>SEND ADMISSION ENQUIRY VIA WHATSAPP</span>
            </button>

            {/* Note on data privacy and direct school contact */}
            <p className="text-[11px] text-stone-500 text-center leading-relaxed">
              We respect your privacy. Submitting this form opens WhatsApp directly to chat with <BrandBadge isInline className="text-[0.85em]" /> Preschool (Ph: {schoolInfo.phone}). No data is saved to any third-party server.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}
