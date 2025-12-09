import { ArrowRight, MapPin, Clock, Briefcase, Heart, TrendingUp, Users, Leaf, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

import teamMeetingImg from '@/assets/careers/team-meeting.jpg';
import brainstormingImg from '@/assets/careers/brainstorming.jpg';
import presentationImg from '@/assets/careers/presentation.jpg';
import celebrationImg from '@/assets/careers/celebration.jpg';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Continuous learning opportunities, mentorship, and clear advancement paths.',
  },
  {
    icon: Users,
    title: 'Inclusive Culture',
    description: 'A diverse workplace where every voice is heard and valued.',
  },
  {
    icon: Leaf,
    title: 'Work-Life Balance',
    description: 'Flexible schedules, remote work options, and generous time off.',
  },
  {
    icon: Coffee,
    title: 'Great Perks',
    description: 'Modern offices, team events, and competitive compensation.',
  },
  {
    icon: Briefcase,
    title: 'Impact',
    description: 'Work on meaningful projects that make a real difference.',
  },
];

const openPositions = [
  {
    title: 'Senior Software Engineer',
    department: 'Factopay - Technology',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    title: 'Healthcare Operations Manager',
    department: 'Natura Care - Operations',
    location: 'Boston, MA',
    type: 'Full-time',
  },
  {
    title: 'Travel Experience Designer',
    department: 'Cultural Escape Travels',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Agricultural Scientist',
    department: 'Natura Agroband - R&D',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
  {
    title: 'Real Estate Project Manager',
    department: 'Natura Homes - Development',
    location: 'Miami, FL',
    type: 'Full-time',
  },
  {
    title: 'Financial Analyst',
    department: 'Natura Corporation - Finance',
    location: 'New York, NY',
    type: 'Full-time',
  },
];

const cultureImages = [
  teamMeetingImg,
  brainstormingImg,
  presentationImg,
  celebrationImg,
];

const Careers = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="badge-accent mb-4 animate-fade-up">Join Our Team</span>
          <h1 className="heading-display mb-6 animate-fade-up delay-100">Build Your Career</h1>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200">
            Join a team of passionate professionals shaping the future across five dynamic industries.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge mb-4">Benefits</span>
            <h2 className="heading-section text-foreground">Why Join Natura?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 md:p-8 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Our Culture</span>
              <h2 className="heading-section text-foreground mb-6">
                Where Passion Meets <span className="gradient-text">Purpose</span>
              </h2>
              <p className="text-body text-muted-foreground mb-6">
                At Natura Corporation, we believe that great work happens when talented 
                people are given the freedom to innovate, collaborate, and grow. Our 
                culture is built on trust, respect, and a shared commitment to excellence.
              </p>
              <p className="text-body text-muted-foreground">
                Whether you're working in healthcare, finance, travel, agriculture, or 
                real estate, you'll be part of a team that values your unique perspective 
                and empowers you to make a meaningful impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cultureImages.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-medium ${
                    index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={image}
                    alt="Team culture"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge mb-4">Opportunities</span>
            <h2 className="heading-section text-foreground">Open Positions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {position.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{position.department}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <button className="btn-primary text-sm py-2.5">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Don't see the right fit? We're always looking for talented individuals.
            </p>
            <Link to="/contact" className="btn-outline">
              Send Your Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
