import { motion } from "framer-motion";
import { Battery, Cpu, HardDrive, Laptop, Monitor, Mouse, PlugZap } from "lucide-react";
import HPLogo from "../assets/HP-Logo.png";
import DellLogo from "../assets/Dell.jpg";
import LenovoLogo from "../assets/lenovo.png";

const products = [
  { icon: Monitor, name: "Écrans", desc: "Moniteurs professionnels toutes tailles" },
  { icon: Laptop, name: "PC Portables", desc: "Laptops HP, Dell, Lenovo" },
  { icon: Cpu, name: "PC Fixes", desc: "Stations de travail performantes" },
  { icon: HardDrive, name: "Disques durs", desc: "Stockage SSD et HDD" },
  { icon: Battery, name: "Chargeurs", desc: "Alimentations certifiées" },
  { icon: Mouse, name: "Accessoires", desc: "Périphériques et connectique" },
  { icon: PlugZap, name: "Pièces", desc: "Composants et pièces détachées" },
];

const brands = [
  { name: "HP", logo: HPLogo },
  { name: "Dell", logo: DellLogo },
  { name: "Lenovo", logo: LenovoLogo },
];

const ProductsSection = () => (
  <section id="produits" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Catalogue</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Nos produits</h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          Une gamme complète de matériel informatique pour les professionnels. Vente en gros à partir de 100 pièces.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <p.icon size={28} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground font-heading">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Brand logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-12 md:gap-20"
      >
        {brands.map((b) => (
          <img
            key={b.name}
            src={b.logo}
            alt={b.name}
            className="h-12 md:h-16 object-contain"
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
