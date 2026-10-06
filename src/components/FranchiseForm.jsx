import { useState } from "react";
import { MessageCircle, Phone, Copy, Check, AlertCircle, Briefcase, Send, CheckCircle2 } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function FranchiseForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "Telangana",
    preferredLocation: "",
    occupation: "",
    currentBusiness: "",
    hasProperty: "Searching / Shortlisting",
    propertyDetails: "",
    investmentRange: "15 - 25 Lakhs",
    relevantExperience: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Mobile Number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }

    if (!formData.preferredLocation.trim()) {
      newErrors.preferredLocation = "Preferred Location is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructMessage = () => {
    return `Hello Chocolate Kids,

I am interested in the Chocolate Kids franchise opportunity.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim()}
City: ${formData.city.trim()}
Preferred Location: ${formData.preferredLocation.trim()}
Investment Range: ${formData.investmentRange}
Experience: ${formData.relevantExperience.trim() || "Not specified"}
Message: ${formData.message.trim() || "None"}

Please contact me regarding the franchise opportunity.

Thank you.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);
    const msg = constructMessage();
    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopy = () => {
    const msg = constructMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const franchiseWaMsg = "Hello Chocolate Kids Team, I am interested in the franchise opportunity. Please share the franchise details.";

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-10 shadow-xl border border-stone-200/90 relative">
      
      {/* Form Header */}
      <div className="mb-8 border-b border-stone-100 pb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
          <Briefcase className="w-3.5 h-3.5 text-amber-800" />
          <span>Application Form</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Start Your</span> <BrandBadge className="text-[0.75em]" /> <span>Franchise Journey</span>
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Complete the confidential details below. Our franchise director will review your profile and arrange an introductory discussion.
        </p>
      </div>

      {submitted ? (
        <div className="py-10 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="max-w-md mx-auto">
            <h4 className="font-heading font-extrabold text-2xl text-stone-900 mb-2">
              Application Received
            </h4>
            <p className="text-sm sm:text-base text-stone-800 font-semibold leading-relaxed bg-amber-50 p-5 rounded-2xl border border-amber-200">
              Thank you for your interest in becoming a <BrandBadge isInline className="text-[0.85em]" /> franchise partner. Our team will contact you shortly.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(constructMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-300"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Details Copied!" : "Copy Application"}</span>
            </button>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200"
            >
              <span>Submit Another Response</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          {/* Row 1: Full Name & Mobile Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. S. Venkat Reddy"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                    : "border-stone-300 bg-stone-50/40 focus:ring-amber-500"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-rose-500">*</span>
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
                    : "border-stone-300 bg-stone-50/40 focus:ring-amber-500"
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

          {/* Row 2: Email & Occupation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. partner@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                    : "border-stone-300 bg-stone-50/40 focus:ring-amber-500"
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
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="e.g. Educator, Professional, Business Owner"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Row 3: City, State & Preferred Location */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                City <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Hyderabad"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.city
                    ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                    : "border-stone-300 bg-stone-50/40 focus:ring-amber-500"
                }`}
              />
              {errors.city && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.city}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                State <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="e.g. Telangana"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.state
                    ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                    : "border-stone-300 bg-stone-50/40 focus:ring-amber-500"
                }`}
              />
              {errors.state && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.state}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Preferred Location <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleChange}
                placeholder="e.g. Sainikpuri, Kapra, Alwal"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.preferredLocation
                    ? "border-rose-400 bg-rose-50/40 focus:ring-rose-400"
                    : "border-stone-300 bg-stone-50/40 focus:ring-amber-500"
                }`}
              />
              {errors.preferredLocation && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.preferredLocation}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Current Business & Available Property? */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Current Business / Background
              </label>
              <input
                type="text"
                name="currentBusiness"
                value={formData.currentBusiness}
                onChange={handleChange}
                placeholder="e.g. Running tutoring center / IT / Retail / First-time entrepreneur"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Available Property?
              </label>
              <select
                name="hasProperty"
                value={formData.hasProperty}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Yes - Owned Space">Yes - Owned Commercial/Residential Space</option>
                <option value="Yes - Rented/Leased Space Ready">Yes - Rented/Leased Space Ready</option>
                <option value="Searching / Shortlisting Locations">Searching / Shortlisting Locations</option>
                <option value="Need Guidance for Site Selection">Need Guidance for Site Selection</option>
              </select>
            </div>
          </div>

          {/* Row 5: Property Details & Investment Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Property Details <span className="text-stone-400 font-normal">(Approx. sq ft, floor)</span>
              </label>
              <input
                type="text"
                name="propertyDetails"
                value={formData.propertyDetails}
                onChange={handleChange}
                placeholder="e.g. 2,000 sq ft, independent ground floor house"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Investment Range
              </label>
              <select
                name="investmentRange"
                value={formData.investmentRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="10 - 15 Lakhs">₹10 Lakhs – ₹15 Lakhs</option>
                <option value="15 - 25 Lakhs">₹15 Lakhs – ₹25 Lakhs</option>
                <option value="25 - 35 Lakhs">₹25 Lakhs – ₹35 Lakhs</option>
                <option value="Above 35 Lakhs">Above ₹35 Lakhs</option>
                <option value="Flexible / Need guidance">Flexible / Need guidance</option>
              </select>
            </div>
          </div>

          {/* Row 6: Relevant Experience */}
          <div>
            <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
              Relevant Experience <span className="text-stone-400 font-normal">(Teaching, School Management, Entrepreneurship)</span>
            </label>
            <input
              type="text"
              name="relevantExperience"
              value={formData.relevantExperience}
              onChange={handleChange}
              placeholder="e.g. 4 years early childhood teaching / Managing retail branch / Passionate parent"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Row 7: Message */}
          <div>
            <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
              Message <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Share any specific requirements, planned timeline, or questions for our franchise team..."
              className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/40 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Primary CTA: Submit Franchise Enquiry */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
            <button
              type="submit"
              className="flex-1 w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Submit Franchise Enquiry</span>
              <Send className="w-4 h-4 text-amber-200" />
            </button>

            {/* Secondary CTA: Talk to Our Franchise Team */}
            <a
              href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseWaMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl font-bold text-xs sm:text-sm text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Talk to Our Franchise Team</span>
            </a>
          </div>

          <p className="text-[11px] text-stone-500 text-center leading-relaxed">
            Your inquiry is handled with strict confidentiality. Helpline: {schoolInfo.phone} • Email: {schoolInfo.email}
          </p>
        </form>
      )}

    </div>
  );
}
