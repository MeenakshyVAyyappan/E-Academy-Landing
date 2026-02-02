import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  X,
  Instagram,
  Facebook
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ecraftz-info-solutions/?originalSubdomain=in', label: 'LinkedIn' },
    { icon: X, href: 'https://x.com/Ecraftz1/status/1246465823277006848', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/eacademy_india?igsh=MWFjbG5wOGg2aTBlNg==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/ecraftzinfosolutions/', label: 'Facebook' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-8"
        >
          <div className="mb-6">
            <img
              src="/images/e-academylogo1.0.png"
              alt="E-Academy Logo"
              className="h-24 w-auto object-contain"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
            Empowering businesses with innovative IT solutions that drive
            growth, efficiency, and digital excellence.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <a href="mailto:info@ecraftz.in" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
              <span>info@ecraftz.in</span>
            </a>
            <a href="tel:+919188839916" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={18} />
              <span>+91 9188 839 916</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="shrink-0" />
              <a
                href="https://www.google.com/maps?q=Ecraftz,+2nd+Floor,+Above+Federal+Bank,+NV+Tower,+Kallai+Road+Calicut,+Kerala,+India+673003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Ecraftz, 2nd Floor, Above Federal Bank, NV Tower,<br />
                Kallai Road, Calicut, Kerala, India - 673003
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full border-t border-border/50 pt-8 flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              >
                
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} E-Academy. All rights reserved.
          </p>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
