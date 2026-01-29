import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Users, Award, HeartHandshake, TrendingUp } from 'lucide-react';
import abstractTech from '@/assets/abstract-tech.png';

const reasons = [
  {
    icon: Target,
    title: 'Result-Driven Approach',
    description: 'We focus on measurable outcomes that directly impact your bottom line.',
  },
  {
    icon: Zap,
    title: 'Rapid Delivery',
    description: 'Agile methodologies ensure faster time-to-market without compromising quality.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our certified professionals bring deep expertise across technologies.',
  },
  {
    icon: Award,
    title: 'Award-Winning Solutions',
    description: 'Recognized globally for innovation and excellence in IT services.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Focus',
    description: 'Your success is our priority. We build lasting partnerships.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-proof architectures that grow with your business.',
  },
];

const WhyUsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          src={abstractTech}
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            The E-Academy
            <span className="gradient-text"> Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover what sets us apart and makes us the preferred choice 
            for businesses seeking digital transformation.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-gradient-to-b from-card/80 to-card/40 border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg"
              >
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient" />
          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied clients who have accelerated their digital 
              journey with E-Academy.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Start Your Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
