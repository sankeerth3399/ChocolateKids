/** Pre-filled WhatsApp message for a franchise enquiry (used by the page form and the pop-up). */
export function buildFranchiseMessage({ name, phone, email, investmentRange, message }) {
  return `Hello Chocolate Kids,

I am interested in the Chocolate Kids franchise opportunity.

Name: ${name.trim()}
Phone: ${phone.trim()}
Email: ${email.trim()}
Investment Range: ${investmentRange}
Message: ${message.trim() || "None"}

Please contact me regarding the franchise opportunity.

Thank you.`;
}
