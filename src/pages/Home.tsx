import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Heart, CreditCard, Plane, Sprout, Home as HomeIcon } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import CompanyCard from '@/components/CompanyCard';
import StatsSection from '@/components/StatsSection';

const companies = [
  {
    name: 'Natura Care',
    description: 'Providing comprehensive healthcare and wellness solutions that prioritize patient well-being and innovative medical practices.',
    industry: 'Healthcare',
    icon: Heart,
    color: '#14B8A6',
    link: '/companies#natura-care',
  },
  {
    name: 'Factopay',
    description: 'Revolutionary financial technology and payment solutions that empower businesses with seamless, secure transactions.',
    industry: 'Finance',
    icon: CreditCard,
    color: '#06B6D4',
    link: '/companies#factopay',
  },
  {
    name: 'Cultural Escape Travels',
    description: 'Curating extraordinary travel experiences that connect people with diverse cultures and breathtaking destinations worldwide.',
    industry: 'Travel & Tourism',
    icon: Plane,
    color: '#0891B2',
    link: '/companies#cultural-escape',
  },
  {
    name: 'Natura Agroband',
    description: 'Sustainable agriculture and agribusiness solutions driving food security through innovative farming technologies.',
    industry: 'Agriculture',
    icon: Sprout,
    color: '#0D9488',
    link: '/companies#natura-agroband',
  },
  {
    name: 'Natura Homes',
    description: 'Creating sustainable, modern living spaces that harmonize comfort, elegance, and environmental responsibility.',
    industry: 'Real Estate',
    icon: HomeIcon,
    color: '#0EA5E9',
    link: '/companies#natura-homes',
  },
];

const Home = () => {
  const scrollToNext = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Natura Corporation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block badge-accent mb-6 animate-fade-up">
              Building Sustainable Futures
            </span>
            <h1 className="heading-display mb-6 animate-fade-up delay-100">
              Natura Corporation
            </h1>
            <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
              A diversified holding company driving innovation across healthcare, finance, 
              travel, agriculture, and real estate. Together, we're building a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Link to="/companies" className="btn-accent">
                Explore Our Companies
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about-section" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <span className="badge mb-4">About Us</span>
              <h2 className="heading-section text-foreground mb-6">
                Nurturing Growth, <span className="gradient-text">Inspiring Change</span>
              </h2>
              <p className="text-body text-muted-foreground mb-6">
                For over 2 years, Natura Corporation has been at the forefront of sustainable 
                business practices. Our diverse portfolio of companies reflects our commitment 
                to innovation, excellence, and positive impact across multiple industries.
              </p>
              <p className="text-body text-muted-foreground mb-8">
                We believe in the power of responsible investment and strategic growth to 
                create lasting value for our stakeholders, communities, and the environment. 
                Every decision we make is guided by our core values of integrity, sustainability, 
                and human-centered progress.
              </p>
              <Link to="/about" className="btn-primary">
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern office space"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge mb-4">Our Portfolio</span>
            <h2 className="heading-section text-foreground mb-4">
              Our Companies
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Five industry-leading subsidiaries driving innovation and creating value 
              across diverse sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CompanyCard {...company} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/companies" className="btn-primary">
              View All Companies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="heading-section mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-body text-primary-foreground/80 mb-10">
              Whether you're looking to partner with us, join our team, or explore 
              investment opportunities, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/careers" className="btn-accent">
                View Careers
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
