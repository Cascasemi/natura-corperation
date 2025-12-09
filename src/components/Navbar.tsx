import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Companies', path: '/companies' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-primary-foreground/10 backdrop-blur-sm'
            }`}>
              <Leaf className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'
              }`} />
            </div>
            <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}>
              Natura
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-primary-foreground/20 text-primary-foreground'
                    : isScrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                    : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`btn-accent text-sm ${
                !isScrolled && 'shadow-glow'
              }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-foreground hover:bg-secondary'
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-card rounded-2xl shadow-medium p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block btn-accent text-center text-sm mt-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
