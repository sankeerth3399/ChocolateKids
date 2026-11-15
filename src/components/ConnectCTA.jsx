import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import Button from "./common/Button";

/**
 * Connect Us button only. It has no background or wrapper of its own, so it
 * sits directly on whatever section renders it (see AdmissionsCTA).
 */
export default function ConnectCTA() {
  return (
    <Button as={Link} to="/contact" variant="accent" className="animate-wiggle-subtle px-8 sm:px-10 select-none">
      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
      <span>CONNECT US</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 shrink-0" />
    </Button>
  );
}
