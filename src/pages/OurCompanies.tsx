import { Link } from 'react-router-dom';
import { Heart, CreditCard, Plane, Sprout, Home as HomeIcon, Car, ArrowRight, ExternalLink } from 'lucide-react';
import worldcupFans from '@/assets/worldcup-fans.jpg';
import lobiCover from '@/assets/lobi_cover_image.png';

const companies = [
  {
    id: 'natura-care',
    name: 'Natura Care',
    tagline: 'Healthcare Excellence, Human Touch',
    description: 'Natura Care is our flagship healthcare subsidiary, providing comprehensive medical services and wellness solutions. We combine cutting-edge technology with compassionate care to deliver exceptional patient outcomes.',
    services: [
      'Primary healthcare services',
      'Specialized medical treatments',
      'Wellness and preventive care programs',
      'Telemedicine solutions',
      'Corporate health management',
    ],
    icon: Heart,
    color: '#5DADE2',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  },
  {
    id: 'factopay',
    name: 'Factopay',
    tagline: 'Seamless Transactions, Secure Future',
    description: 'Factopay revolutionizes the financial technology landscape with innovative payment solutions and digital banking services. Our platform empowers businesses of all sizes to transact securely and efficiently.',
    services: [
      'Digital payment processing',
      'Merchant services',
      'Mobile wallet solutions',
      'B2B payment platforms',
      'Financial analytics and reporting',
    ],
    icon: CreditCard,
    color: '#48C9B0',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
  {
    id: 'cultural-escape',
    name: 'Cultural Escape Travels',
    tagline: 'Discover the World, Find Yourself',
    description: 'Cultural Escape Travels curates extraordinary travel experiences that connect adventurers with the world\'s most captivating destinations. We specialize in immersive cultural journeys that create lasting memories.',
    services: [
      'Luxury travel packages',
      'Cultural immersion tours',
      'Adventure expeditions',
      'Corporate travel management',
      'Sustainable tourism initiatives',
    ],
    icon: Plane,
    color: '#85C1E2',
    image: worldcupFans,
  },
  {
    id: 'natura-agrobrand',
    name: 'Natura Agrobrand',
    tagline: 'Cultivating Tomorrow\'s Harvest',
    description: 'Natura Agrobrand leads the way in sustainable agriculture and agribusiness. Through innovative farming technologies and responsible practices, we\'re ensuring food security for generations to come.',
    services: [
      'Sustainable farming operations',
      'Agricultural technology solutions',
      'Organic produce distribution',
      'Farm management consulting',
      'Agri-investment opportunities',
    ],
    icon: Sprout,
    color: '#45B7A0',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    externalUrl: 'https://agrobrand.naturacorporation.com/',
  },
  {
    id: 'lobi',
    name: 'Lobi',
    tagline: 'Your Ride, Your Way',
    description: 'Lobi is Natura Corporation\'s innovative ride-hailing platform built to redefine urban mobility across Africa. By connecting passengers with reliable, professional drivers, Lobi delivers safe, affordable, and convenient transportation at the tap of a button — wherever you are, whenever you need it.',
    services: [
      'On-demand ride booking',
      'Scheduled and corporate rides',
      'Real-time driver tracking',
      'Cashless and mobile payment integration',
      'Driver onboarding and fleet management',
    ],
    icon: Car,
    color: '#2E86C1',
    image: lobiCover,
  },
  {
    id: 'natura-homes',
    name: 'Natura Homes',
    tagline: 'Building Dreams, Creating Communities',
    description: 'Natura Homes develops premium residential and commercial properties that harmonize modern living with environmental consciousness. Our developments set new standards for sustainable urban living.',
    services: [
      'Residential property development',
      'Commercial real estate projects',
      'Property management services',
      'Green building initiatives',
      'Real estate investment opportunities',
    ],
    icon: HomeIcon,
    color: '#76D7C4',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
];

const OurCompanies = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="badge-accent mb-4 animate-fade-up">Our Portfolio</span>
          <h1 className="heading-display mb-6 animate-fade-up delay-100">Our Companies</h1>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200">
            Six industry-leading subsidiaries driving innovation and creating value across diverse sectors.
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-12 md:space-y-16 lg:space-y-24">
            {companies.map((company, index) => (
              <div
                key={company.id}
                id={company.id}
                className={`grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Icon Badge */}
                  <div
                    className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shadow-medium"
                    style={{ backgroundColor: `${company.color}15` }}
                  >
                    <company.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" style={{ color: company.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{ backgroundColor: `${company.color}15`, color: company.color }}
                  >
                    {company.tagline}
                  </span>
                  <h2 className="heading-section text-foreground mb-4">{company.name}</h2>
                  <p className="text-body text-muted-foreground mb-6">{company.description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                      Key Services
                    </h4>
                    <ul className="space-y-3">
                      {company.services.map((service) => (
                        <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: company.color }}
                          />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {company.externalUrl ? (
                    <a
                      href={company.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: company.color }}
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={`/companies/${company.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: company.color }}
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="heading-section text-foreground mb-4">
            Interested in Partnership?
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for strategic partners who share our vision for sustainable growth.
          </p>
          <a href="/contact" className="btn-accent">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default OurCompanies;
