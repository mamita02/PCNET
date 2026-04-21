import { motion } from "framer-motion";
import { Award, Globe, Shield, Users } from "lucide-react";
import FranceFlag from "/public/France.webp";
import MoroccoFlag from "/public/Morocco.svg";
import AllemagneFlag from "/public/allemagne.webp";
import SenegalFlag from "/public/Senegal.svg";
const strengths = [
  { icon: Award, label: "+20 ans", desc: "d'expérience" },
  { icon: Shield, label: "Société", desc: "française" },
  { icon: Users, label: "100+ pièces", desc: "minimum" },
  { icon: Globe, label: "Europe", desc: "& Afrique" },
];



const countries = [
  { name: "France", flag: FranceFlag },
  { name: "Maroc", flag: MoroccoFlag },
  { name: "Allemagne", flag: AllemagneFlag },
  { name: "Sénégal", flag: SenegalFlag },
];

const AboutSection = () => (
  <section id="apropos" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Qui sommes-nous</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
          À propos de PCNET UNIVERS
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Entreprise française spécialisée dans la vente en gros de matériel informatique et consommables.
          Depuis plus de 20 ans, nous mettons notre expertise au service des professionnels en proposant des équipements fiables et adaptés.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {strengths.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <div className="text-xl font-bold text-foreground font-heading">{s.label}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* International presence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 bg-card rounded-2xl border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Présence internationale</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Notre mission est d'accompagner nos clients avec sérieux, transparence et efficacité,
            tout en construisant des relations durables basées sur la confiance.
          </p>
          <div className="flex flex-wrap gap-3">
            {countries.map((c) => (
            <div
              key={c.name}
              className="w-14 h-14 rounded-full overflow-hidden border border-border hover:scale-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center bg-white"
              title={c.name}
            >
              <img
                src={c.flag}
                alt={c.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          </div>
        </div>
        <div className="w-full md:w-64 h-48 rounded-xl gradient-primary flex items-center justify-center">
          <Globe size={64} className="text-primary-foreground opacity-30" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
