import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Lightbulb, ArrowRight } from 'lucide-react';
import oliverImg from '@/assets/team/oliver.jpg';
import benajahImg from '@/assets/team/Benajah.jpg';
import georgeImg from '@/assets/team/george.jpg';
import bernardImg from '@/assets/team/bernard.jpg';

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with unwavering honesty and transparency, building trust with every interaction.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creative thinking and cutting-edge solutions to drive progress across all our ventures.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We invest in the well-being of our communities, fostering sustainable growth that benefits all.',
  },
];

const leadership = [
  {
    name: 'Dr. Oliver Boakye Danquah',
    role: 'Chief Executive Officer/Founder',
    image: oliverImg,
  },
  {
    name: 'Ing. Benajah Adomako',
    role: 'Managing Director/Co-Founder',
    image: benajahImg,
  },
  {
    name: 'Ing. George Kwame Frimpong',
    role: 'Chief Technology Officer',
    image: georgeImg,
  },
  {
    name: 'Mr. Bernard Kwansah Ansah',
    role: 'Chief Marketing Officer',
    image: bernardImg,
  },
];

const milestones = [
  { year: 'Sep/2023', title: 'Foundation', description: 'Natura Corporation founded with a vision for sustainable growth.', link: null },
  { year: 'Dec/2023', title: 'First Acquisition', description: 'Natura Care established, entering the healthcare sector.', link: '/companies/natura-care' },
  { year: 'April/2024', title: 'Financial Expansion', description: 'Launch of Factopay, revolutionizing payment solutions.', link: '/companies/factopay' },
  { year: 'June/2024', title: 'Global Reach', description: 'Cultural Escape Travels opens doors to worldwide tourism.', link: '/companies/cultural-escape' },
  { year: 'Jan/2025', title: 'Agriculture Initiative', description: 'Natura Agroband founded for sustainable farming.', link: '/companies/natura-agrobrand' },
  { year: 'June/2025', title: 'FactoPay Anticipation', description: 'FactoPay enters into the world of digital finance.', link: '/companies/factopay' },
  { year: 'March/2026', title: 'Lobi Anticipation', description: 'Lobi ride-hailing platform set to redefine urban transportation across Africa.', link: '/companies/lobi' },
];

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="badge-accent mb-4 animate-fade-up">Our Story</span>
          <h1 className="heading-display mb-6 animate-fade-up delay-100">About Natura</h1>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200">
            Building a legacy of sustainable growth and positive impact across industries.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Our History</span>
              <h2 className="heading-section text-foreground mb-6">
                A Journey of <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-body text-muted-foreground mb-6">
                Founded in 2023, Natura Corporation began with a simple yet powerful vision: 
                to create a holding company that prioritizes sustainable growth while making 
                a positive impact on communities worldwide.
              </p>
              <p className="text-body text-muted-foreground mb-6">
                Over the past two years, we've grown from a single venture into a
                diversified conglomerate spanning six key industries. Our success is built
                on the foundation of strong values, strategic investments, and a commitment
                to excellence in everything we do.
              </p>
              <p className="text-body text-muted-foreground">
                Today, Natura Corporation employs over 2,500 talented individuals across 
                12 countries, united by our shared mission to nurture growth and inspire 
                positive change in the world.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Corporate building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="glass-card p-6 sm:p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card text-foreground mb-4">Our Mission</h3>
              <p className="text-body text-muted-foreground">
                To create sustainable value through strategic investments that drive innovation, 
                empower communities, and contribute to a more prosperous and equitable world 
                for generations to come.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="heading-card text-foreground mb-4">Our Vision</h3>
              <p className="text-body text-muted-foreground">
                To be the world's most trusted holding company, recognized for our unwavering 
                commitment to ethical business practices, environmental stewardship, and 
                transformative impact across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge mb-4">What Guides Us</span>
            <h2 className="heading-section text-foreground">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{value.title}</h3>
                <p className="text-body-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge mb-4">Leadership</span>
            <h2 className="heading-section text-foreground">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {leadership.map((leader, index) => (
              <div
                key={leader.name}
                className="group text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">{leader.name}</h3>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge mb-4">Our Journey</span>
            <h2 className="heading-section text-foreground">Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-6 sm:pl-8 md:pl-12 pb-8 md:pb-10 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                {/* Dot */}
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent -translate-x-1/2" />
                {/* Content */}
                {milestone.link ? (
                  <Link
                    to={milestone.link}
                    className="glass-card p-6 block group hover:-translate-y-1 transition-transform duration-300"
                    style={{ boxShadow: 'var(--shadow-soft)' }}
                  >
                    <span className="text-sm font-medium text-accent">{milestone.year}</span>
                    <h3 className="text-lg font-serif font-semibold text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{milestone.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:gap-2 transition-all duration-200">
                      Visit Company <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ) : (
                  <div className="glass-card p-6">
                    <span className="text-sm font-medium text-accent">{milestone.year}</span>
                    <h3 className="text-lg font-serif font-semibold text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
