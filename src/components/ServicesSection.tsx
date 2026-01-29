import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Cloud, 
  Shield, 
  Cpu, 
  Database, 
  Smartphone,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with cutting-edge technologies to meet your unique business requirements.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for seamless business operations.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and data-driven insights to transform your business processes.',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced analytics and visualization to unlock actionable business intelligence.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
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
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Comprehensive IT
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we provide end-to-end technology services 
            that drive innovation and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:bg-card/80">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
