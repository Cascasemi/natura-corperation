import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Companies', path: '/companies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const companies = [
    { name: 'Natura Care', path: '/companies#natura-care' },
    { name: 'Factopay', path: '/companies#factopay' },
    { name: 'Cultural Escape Travels', path: '/companies#cultural-escape' },
    { name: 'Natura Agroband', path: '/companies#natura-agroband' },
    { name: 'Natura Homes', path: '/companies#natura-homes' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-dark-gradient text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-primary-foreground/10">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-serif font-bold">Natura</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Building sustainable futures through diverse investments across healthcare, 
              finance, travel, agriculture, and real estate.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Companies</h4>
            <ul className="space-y-3">
              {companies.map((company) => (
                <li key={company.path}>
                  <Link
                    to={company.path}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  North Legon<br />
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+233537402232"
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    +233 53 740 2232
                  </a>
                  <a
                    href="tel:0249768470"
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    0249 768 470
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@naturacorporation.com"
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  info@naturacorporation.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Natura Corporation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
