import { ShieldCheck, Sparkles, Smile, HeartHandshake } from "lucide-react";

export default function TrustSection() {
  const trustPillars = [
    {
      title: "Safe Environment",
      description: "Clean, healthy and secure campus where little ones play with complete safety.",
      icon: ShieldCheck,
      colorBg: "bg-emerald-50",
      colorBorder: "border-emerald-100",
      colorText: "text-emerald-700",
      colorIcon: "text-emerald-600",
    },
    {
      title: "Learning Through Play",
      description: "Stimulating activities where natural curiosity meets joyful hands-on discovery.",
      icon: Sparkles,
      colorBg: "bg-amber-50",
      colorBorder: "border-amber-100",
      colorText: "text-amber-800",
      colorIcon: "text-amber-600",
    },
    {
      title: "Happy Childhood",
      description: "A joyful atmosphere celebrating laughter, friendships, and early childhood wonder.",
      icon: Smile,
      colorBg: "bg-orange-50",
      colorBorder: "border-orange-100",
      colorText: "text-orange-800",
      colorIcon: "text-orange-600",
    },
    {
      title: "Caring Environment",
      description: "Warm educators sensitive and responsive to every child's individual needs.",
      icon: HeartHandshake,
      colorBg: "bg-rose-50",
      colorBorder: "border-rose-100",
      colorText: "text-rose-800",
      colorIcon: "text-rose-500",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-amber-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl ${pillar.colorBg} border ${pillar.colorBorder} transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${pillar.colorIcon}`} />
                </div>
                <h3 className={`font-heading font-bold text-lg ${pillar.colorText} mb-1.5`}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
