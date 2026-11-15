const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold text-center cursor-pointer min-h-[46px] " +
  "text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#142B4A]";

const variants = {
  /** Sunshine yellow: the main call to action */
  primary: "bg-[#FFBD16] text-[#142B4A] shadow-md hover:bg-[#FFCB45] hover:shadow-lg",
  /** White with a royal-blue outline */
  secondary: "bg-white text-[#174EA6] border-2 border-[#174EA6] hover:bg-[#174EA6] hover:text-white",
  /** Burgundy fill */
  accent: "bg-[#C51F45] text-white shadow-md hover:bg-[#A31838] hover:shadow-lg",
  /** Transparent with a navy outline */
  outline: "border-2 border-[#142B4A] text-[#142B4A] hover:bg-[#142B4A] hover:text-white",
  /** Soft green WhatsApp action */
  whatsapp: "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100",
};

const sizes = {
  md: "px-7 py-3",
  lg: "px-8 py-3.5",
};

/**
 * One button for the whole site. Render it as a button (default), a router <Link>, or an <a>:
 *   <Button as={Link} to="/contact" variant="accent">Contact</Button>
 */
export default function Button({ as: Component = "button", variant = "primary", size = "lg", className = "", type, ...props }) {
  const typeProp = Component === "button" ? { type: type || "button" } : {};
  return <Component className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()} {...typeProp} {...props} />;
}
