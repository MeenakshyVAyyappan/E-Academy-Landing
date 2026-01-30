import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      'Custom Development',
      'Cloud Solutions',
      'Cybersecurity',
      'AI & ML',
      'Data Analytics',
      'Mobile Apps',
    ],
    company: [
      'About Us',
      'Careers',
      'Blog',
      'Press',
      'Partners',
      'Contact',
    ],
    resources: [
      'Documentation',
      'Case Studies',
      'Whitepapers',
      'Webinars',
      'FAQ',
      'Support',
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 pt-16 sm:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/e-academylogo1.0.png"
                  alt="E-Academy Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
                Empowering businesses with innovative IT solutions that drive
                growth, efficiency, and digital excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:info@ecraftz.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} />
                  <span>info@ecraftz.in</span>
                </a>
                <a href="tel:+919188839916" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} />
                  <span>+91 9188 839 916</span>
                </a>
               <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <a 
                  href="https://www.google.com/maps?q=Ecraftz,+2nd+Floor,+Above+Federal+Bank,+NV+Tower,+Kallai+Road+Calicut,+Kerala,+India+673003"
                  target="_blank" 
                  rel="noopener noreferrer">
                    Ecraftz, 2nd Floor, Above Federal Bank,<br />
                    NV Tower, Kallai Road Calicut,<br />
                    Kerala, India - 673003
                </a>
               </div>

              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-display font-semibold text-foreground mb-4 capitalize">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {new Date().getFullYear()} E-Academy. All rights reserved.
            </p>

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
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
