import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamImage from '@/assets/team.jpg';

const features = [
  'Industry-leading expertise with 15+ years of experience',
  'Certified professionals across multiple technologies',
  'Agile methodologies for faster time-to-market',
  '24/7 dedicated support and maintenance',
  'Cost-effective solutions without compromising quality',
  'Proven track record with Fortune 500 companies',
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-card/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={containerRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={teamImage}
                alt="E-Academy Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 sm:bottom-8 sm:right-8 gradient-border p-6 glow"
            >
              <div className="text-center">
                <div className="font-display text-4xl font-bold gradient-text">15+</div>
                <div className="text-muted-foreground text-sm mt-1">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-2xl"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About E-Academy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Your Trusted Partner in
              <span className="gradient-text"> Digital Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Since our founding, E-Academy has been at the forefront of technological 
              advancement, helping businesses navigate the complexities of digital 
              transformation with confidence and clarity.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button variant="premium" size="lg">
                Discover Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
