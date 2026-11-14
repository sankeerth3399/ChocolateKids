import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* The five existing Chocolate Kids groups, with their supplied photos and existing descriptions.
   Card surfaces are always white; each group only contributes an accent colour. */
const groups = [
  {
    name: "Playgroup",
    age: "1.5 – 2.5 Years",
    img: "/images/programs/playgroup.jpg",
    pos: "center 38%",
    alt: "Toddlers playing together with colourful soft building blocks in a Playgroup classroom",
    desc: "A gentle, joyful transition from home to preschool centered on sensory exploration, social warmth, and fun daily routines.",
    bar: "bg-[#C51F45]",
    pill: "bg-[#C51F45] text-white",
    btn: "bg-[#C51F45] text-white hover:bg-[#A31838]",
  },
  {
    name: "Nursery",
    age: "2.5 – 3.5 Years",
    img: "/images/programs/nursery.jpg",
    pos: "center 30%",
    alt: "Nursery children painting and doing creative activities at a classroom table",
    desc: "Developing expressive speech, phonics curiosity, fine-motor coordination, and self-confidence through interactive story-telling.",
    bar: "bg-[#FFBD16]",
    pill: "bg-[#FFBD16] text-[#142B4A]",
    btn: "bg-[#FFBD16] text-[#142B4A] hover:bg-[#FFCB45]",
  },
  {
    name: "PP1",
    age: "3.5 – 4.5 Years",
    img: "/images/programs/pp1.jpg",
    pos: "center 45%",
    alt: "A PP1 teacher reading a picture book together with a young child",
    desc: "Foundational literacy and numbers combined with hands-on science curiosity, creative expression, and teamwork.",
    bar: "bg-[#174EA6]",
    pill: "bg-[#174EA6] text-white",
    btn: "bg-[#174EA6] text-white hover:bg-[#123F85]",
  },
  {
    name: "PP2",
    age: "4.5 – 5.5 Years",
    img: "/images/programs/pp2.jpg",
    pos: "center 35%",
    alt: "A PP2 child stacking alphabet blocks during a classroom activity",
    desc: "School readiness through confidence building, phonics, and early mathematics.",
    bar: "bg-[#16834A]",
    pill: "bg-[#16834A] text-white",
    btn: "bg-[#16834A] text-white hover:bg-[#11693B]",
  },
  {
    name: "Day Care",
    age: "1.5 – 5.5 Years",
    img: "/images/programs/daycare.jpg",
    pos: "center 40%",
    alt: "A sleeping child resting comfortably while holding a teddy bear at Day Care",
    desc: "A secure, loving after-school sanctuary with hygienic rest spaces, homework mentoring, and creative recreational play.",
    bar: "bg-[#7439B5]",
    pill: "bg-[#7439B5] text-white",
    btn: "bg-[#7439B5] text-white hover:bg-[#5D2D92]",
  },
];

export default function HomeGroups() {
  return (
    <section id="programs" className="py-14 sm:py-20 bg-[#FFF4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C51F45]">Our Schools &amp; Programs</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#142B4A] leading-tight">
            From Playgroup to UKG
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536174] leading-relaxed">
            Five thoughtfully designed groups to meet your child at every stage of their early journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {groups.map((g, i) => (
            <motion.article
              key={g.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="accent-card group relative flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl bg-white border border-[#E8DCC9] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[3/2] bg-[#FFF4DF]">
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: g.pos }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md ${g.pill}`}>{g.age}</span>
                <span className={`absolute inset-x-0 bottom-0 h-1.5 ${g.bar}`} aria-hidden="true" />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
                <h3 className="font-heading font-bold text-2xl text-[#142B4A]">{g.name}</h3>
                <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-[#536174]">{g.desc}</p>
                <Link
                  to="/academics"
                  className={`mt-5 self-start inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:gap-3 hover:shadow-md transition-all ${g.btn}`}
                >
                  <span>View details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
