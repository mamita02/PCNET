import milestoneBg from "@/assets/milestones-bg.jpg";
import saidImg from "@/assets/said.png";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
      </svg>
    ),
    label: "Loyauté",
    desc: "Engagement durable et sincère envers chaque client et partenaire.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    label: "Transparence",
    desc: "Clarté totale dans nos échanges, nos prix et nos engagements.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m13 2-2 2.5h3L12 7"/><path d="M10 14v-3"/><path d="M14 14v-3"/><path d="M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3h-2Z"/><path d="M8 14H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
      </svg>
    ),
    label: "Service",
    desc: "Excellence, réactivité et solutions sur mesure pour vos projets.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
      </svg>
    ),
    label: "Proximité",
    desc: "À l'écoute de vos besoins, en Europe comme en Afrique.",
  },
];

const milestones = [
  { number: "20+", label: "Années d'expérience" },
  { number: "500+", label: "Clients satisfaits" },
  { number: "2", label: "Continents couverts" },
  { number: "∞", label: "Projets à venir" },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const QuiSuisJe = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Navbar />

      {/* ═══════════ HERO — dégradé doux bleu nuit ═══════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 px-6"
        style={{
          background: "linear-gradient(135deg, #0d1b2e 0%, #1a3a6e 45%, #2a5298 75%, #3b6cc9 100%)",
        }}
      >
        {/* Grille subtile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Lueur douce en bas à droite */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #4a90d9 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Texte de gauche ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              {/* Badge mis en valeur — fond bleu vitré avec ombre */}
              <div className="inline-block mb-8">
                <span
                  className="inline-block text-sm md:text-base font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-2xl"
                  style={{
                    color: "#FF9900",
                    background: "linear-gradient(135deg, rgba(255,153,0,0.15) 0%, rgba(255,153,0,0.05) 100%)",
                    boxShadow: "0 8px 32px rgba(255,153,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,153,0,0.3)",
                  }}
                >
                  Fondateur &bull; Ingénieur &bull; Visionnaire
                </span>
              </div>

              {/* Titre : prénom léger / TALIB réduit */}
              <h1 className="mb-6 leading-[1.05]">
                <span
                  className="block text-5xl md:text-6xl lg:text-7xl font-light text-white/80 tracking-wide"
                  style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
                >
                  Said
                </span>
                <span
                  className="block text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  TALIB
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100/70 mb-8 font-medium tracking-wide uppercase" style={{ letterSpacing: "0.12em" }}>
                Fondateur de <strong className="text-white font-bold">PCNET UNIVERS</strong>
              </p>

              <div className="space-y-4 text-white/70 leading-relaxed max-w-xl text-base">
                <p>
                  Ingénieur en informatique passionné par la technologie, la programmation
                  et le développement, Said TALIB a construit son parcours autour de
                  l'innovation et du service.
                </p>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: showMore ? "500px" : "0px", opacity: showMore ? 1 : 0 }}
                >
                  <p className="mb-4">
                    Au-delà de ses compétences techniques, il accorde une grande importance
                    à l'écoute, au conseil et à la relation humaine. Chaque projet est
                    une occasion de créer une véritable valeur.
                  </p>
                  <p>
                    Avec plus de 20 ans d'expérience, il a créé PCNET UNIVERS pour répondre
                    efficacement aux besoins du marché et accompagner ses clients dans
                    leur transformation numérique.
                  </p>
                </div>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-4 px-8 py-3 rounded-full border border-white/30 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#0d1b2e] transition-all duration-300"
                >
                  {showMore ? "— Voir moins" : "+ Lire plus"}
                </button>
              </div>
            </motion.div>

            {/* ── Photo agrandie, sans cadre blanc ── */}
            <motion.div
              className="flex justify-center items-end"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
              <div className="relative w-full max-w-[520px] lg:max-w-[640px]">
                {/* Accent bleu décoratif derrière */}
                <div
                  className="absolute -bottom-6 -right-6 w-3/4 h-4/5 rounded-3xl"
                  style={{ background: "linear-gradient(135deg, #4a90d9 0%, #1a3a6e 100%)", opacity: 0.4 }}
                />

                <img
                  src={saidImg}
                  alt="Said TALIB"
                  className="relative z-10 w-full rounded-2xl object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                  style={{ aspectRatio: "4/5", objectPosition: "center top" }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════ MILESTONES ═══════════ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img src={milestoneBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#001122]/70" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-white mb-2 drop-shadow-lg">
                {m.number}
              </div>
              <div className="text-base text-white/70 font-semibold uppercase tracking-wider">{m.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════ VALEURS ═══════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0d1b2e] mb-4">
              Nos <span className="text-blue-500">Valeurs</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Les piliers qui guident chaque action de PCNET UNIVERS pour garantir votre succès.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#1a3a6e] to-blue-400 rounded-full mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.label} delay={i * 0.1}>
                <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-[#1a3a6e] group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[#0d1b2e] text-xl mb-3">{v.label}</h3>
                  <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 px-6 bg-slate-50">
        <AnimatedSection>
          <div
            className="max-w-3xl mx-auto text-center rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-3xl"
            style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #1a3a6e 60%, #2a5298 100%)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/15 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Prêt à collaborer ?
              </h2>
              <p className="text-blue-100/80 text-lg md:text-xl mb-10">
                Discutons ensemble de votre prochain projet numérique et transformons vos idées en réalité.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-[#0d1b2e] px-10 py-4 rounded-xl font-bold text-base uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all shadow-xl"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </>
  );
};

export default QuiSuisJe;
