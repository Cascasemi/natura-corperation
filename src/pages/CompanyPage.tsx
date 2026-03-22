import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Heart, CreditCard, Plane, Sprout, Home as HomeIcon, Car } from 'lucide-react';
import worldcupFans from '@/assets/worldcup-fans.jpg';
import lobiCover from '@/assets/lobi_cover_image.png';

const companiesData = [
  {
    id: 'natura-care',
    name: 'Natura Care',
    tagline: 'Healthcare Excellence, Human Touch',
    shortDescription: 'Comprehensive medical services and wellness solutions powered by technology and compassion.',
    description: `Natura Care is Natura Corporation's flagship healthcare subsidiary, built on the belief that quality healthcare is a fundamental right — not a privilege. We deliver comprehensive medical services and wellness solutions that place the patient at the centre of every decision.

Our facilities are equipped with cutting-edge medical technology, staffed by highly trained and compassionate professionals who understand that healing goes beyond clinical treatment. We take a holistic approach to health — addressing the physical, emotional, and social dimensions of well-being.

From primary care walk-ins to specialized treatment programmes, Natura Care is committed to delivering outcomes that matter. Our telemedicine arm extends our reach to underserved communities, ensuring no one is left behind in the pursuit of good health. We also partner with corporate organizations to manage employee health programmes, reducing absenteeism and improving workforce productivity.

At Natura Care, we believe a healthier population drives a stronger nation — and we are proud to be at the forefront of that mission.`,
    services: [
      'Primary healthcare and outpatient services',
      'Specialized medical treatments and referral management',
      'Wellness and preventive care programmes',
      'Telemedicine and remote health consultations',
      'Corporate health management and employee wellness',
      'Maternal and child health services',
    ],
    icon: Heart,
    color: '#5DADE2',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
    highlights: [
      { label: 'Patients Served', value: '10,000+' },
      { label: 'Medical Professionals', value: '120+' },
      { label: 'Branches', value: '4' },
      { label: 'Years of Care', value: '2+' },
    ],
  },
  {
    id: 'factopay',
    name: 'Factopay',
    tagline: 'Seamless Transactions, Secure Future',
    shortDescription: 'Innovative payment solutions and digital banking services empowering businesses of all sizes.',
    description: `Factopay is Natura Corporation's answer to the growing demand for fast, secure, and reliable digital financial services across Africa. In a continent where millions remain underserved by traditional banking, Factopay bridges the gap — bringing the power of digital finance to individuals and businesses alike.

Our platform enables merchants to accept payments seamlessly across multiple channels — mobile wallets, card payments, QR codes, and bank transfers. We process thousands of transactions daily with near-zero downtime and bank-grade encryption, giving our clients the confidence to focus on growing their business rather than worrying about payment failures.

Beyond payment processing, Factopay offers sophisticated financial analytics tools that help businesses understand their cash flow, identify trends, and make smarter decisions. Our B2B payment infrastructure supports payroll processing, supplier payments, and cross-border transfers with competitive exchange rates.

We are building a future where every transaction — no matter how small — is fast, safe, and transparent. Factopay is not just a payment solution; it is a financial ecosystem designed for Africa's future.`,
    services: [
      'Digital payment processing and gateway services',
      'Merchant onboarding and POS solutions',
      'Mobile wallet and USSD payment integration',
      'B2B payments, payroll, and supplier disbursements',
      'Cross-border money transfer services',
      'Financial analytics and business reporting',
    ],
    icon: CreditCard,
    color: '#48C9B0',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    highlights: [
      { label: 'Transactions Processed', value: '500K+' },
      { label: 'Merchant Partners', value: '2,000+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Countries Supported', value: '5' },
    ],
  },
  {
    id: 'cultural-escape',
    name: 'Cultural Escape Travels',
    tagline: 'Discover the World, Find Yourself',
    shortDescription: 'Extraordinary travel experiences connecting adventurers with the world\'s most captivating destinations.',
    description: `Cultural Escape Travels was born from a simple but powerful idea — that travel, when done right, transforms lives. We curate extraordinary journeys that go far beyond sightseeing, immersing our clients in the authentic textures of the world's most fascinating destinations.

Whether you are chasing the golden savannahs of East Africa, the ancient medinas of North Africa, the carnival energy of South America, or the serene temples of Southeast Asia, our team of experienced travel curators designs every itinerary with precision and passion. We handle every detail — flights, accommodation, transfers, cultural guides, and special experiences — so our clients can be fully present in every moment.

Our luxury travel packages cater to discerning travellers who expect nothing but the best, while our adventure expeditions appeal to those who crave something off the beaten path. We are also proud champions of sustainable tourism — working with local communities, eco-lodges, and conservation initiatives to ensure our journeys leave a positive footprint.

For corporate clients, we manage business travel end-to-end, combining efficiency with comfort. Cultural Escape Travels is more than a travel agency — it is your gateway to the world.`,
    services: [
      'Luxury and bespoke travel packages',
      'Cultural immersion and heritage tours',
      'Adventure and eco-tourism expeditions',
      'Corporate travel management and MICE',
      'Honeymoon and special occasion travel',
      'Sustainable and community-based tourism',
    ],
    icon: Plane,
    color: '#85C1E2',
    image: worldcupFans,
    highlights: [
      { label: 'Happy Travellers', value: '5,000+' },
      { label: 'Destinations', value: '40+' },
      { label: 'Tour Packages', value: '80+' },
      { label: 'Expert Guides', value: '30+' },
    ],
  },
  {
    id: 'natura-agrobrand',
    name: 'Natura Agrobrand',
    tagline: "Cultivating Tomorrow's Harvest",
    shortDescription: 'Leading sustainable agriculture and agribusiness through innovative farming technologies.',
    description: `Natura Agrobrand stands at the intersection of tradition and technology, driving a new era of sustainable agriculture across West Africa. We believe that feeding the world begins with respecting the land, and every decision we make reflects that philosophy.

Our farming operations span thousands of hectares across multiple regions, producing a diverse portfolio of crops with a strong emphasis on organic and sustainably grown produce. We employ modern precision farming techniques — including drone monitoring, soil analysis technology, and data-driven irrigation — to maximise yields while minimising environmental impact.

Beyond production, Natura Agrobrand plays a pivotal role in connecting smallholder farmers to markets, finance, and modern farming knowledge. Through our farm management consulting arm, we work directly with local farmers to improve productivity, reduce post-harvest losses, and increase incomes.

We also create agri-investment opportunities for individuals and institutions looking to participate in Africa's agricultural transformation. With a growing global appetite for ethically sourced food, Natura Agrobrand is well-positioned to supply both local and international markets with premium produce.

Food security is not just a challenge — it is our purpose. And we are cultivating the future, one harvest at a time.`,
    services: [
      'Sustainable and organic farming operations',
      'Precision agriculture and agri-tech solutions',
      'Organic produce processing and distribution',
      'Smallholder farmer support and extension services',
      'Farm management and agribusiness consulting',
      'Agri-investment and commodity trading',
    ],
    icon: Sprout,
    color: '#45B7A0',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
    highlights: [
      { label: 'Hectares Farmed', value: '1,200+' },
      { label: 'Farmers Supported', value: '800+' },
      { label: 'Crop Varieties', value: '25+' },
      { label: 'Export Markets', value: '6' },
    ],
  },
  {
    id: 'lobi',
    name: 'Lobi',
    tagline: 'Your Ride, Your Way',
    shortDescription: 'A ride-hailing platform set to redefine urban mobility across Africa — coming soon.',
    description: `Lobi is Natura Corporation's bold upcoming entry into the urban mobility space — a ride-hailing platform purpose-built for the African experience. The name "Lobi" means "tomorrow" in several West African languages, and it captures our vision perfectly: we are building the transportation infrastructure that Africa's cities need for the future.

Getting around in African cities has long been a challenge — unpredictable transport options, safety concerns, and lack of reliability have made daily commuting stressful for millions. Lobi is set to change that. With a few taps on your smartphone, you will be able to book a verified, professional driver who arrives promptly and takes you to your destination safely and affordably.

Every Lobi driver will undergo a rigorous onboarding process — background checks, vehicle inspections, and customer service training — so every ride meets a consistent standard of quality. Riders will be able to track their driver in real time, share their trip details with loved ones, and pay seamlessly through cash or mobile money.

For businesses, Lobi will offer corporate accounts that simplify staff transportation, reduce logistics costs, and provide full visibility into employee travel. Our fleet management arm will also partner with vehicle owners looking to earn income by joining the Lobi network.

Lobi is more than a taxi app — it is a movement to make African cities more connected, more mobile, and more alive. Stay tuned for our official launch.`,
    services: [
      'On-demand ride booking via mobile app',
      'Scheduled and advance ride reservations',
      'Real-time GPS driver tracking and trip sharing',
      'Cashless and mobile money payment integration',
      'Corporate ride accounts and fleet solutions',
      'Driver onboarding, training, and fleet management',
    ],
    icon: Car,
    color: '#2E86C1',
    image: lobiCover,
    highlights: [
      { label: 'Target Cities', value: '3' },
      { label: 'Driver Partners (Target)', value: '500+' },
      { label: 'Launch Date', value: 'Q2 2026' },
      { label: 'Status', value: 'Coming Soon' },
    ],
  },
  {
    id: 'natura-homes',
    name: 'Natura Homes',
    tagline: 'Building Dreams, Creating Communities',
    shortDescription: 'Premium residential and commercial properties harmonizing modern living with environmental consciousness.',
    description: `Natura Homes is redefining what it means to live well. As Natura Corporation's real estate subsidiary, we develop premium residential and commercial properties that set new benchmarks for quality, sustainability, and community living across Ghana and beyond.

Every Natura Homes development begins with a question: how can this space improve the lives of the people who will live and work here? That question drives everything — from site selection and architectural design to landscaping, community facilities, and building materials. We partner with world-class architects and engineers to create spaces that are not only beautiful but also functional, energy-efficient, and built to last.

Our residential developments range from affordable family homes to premium gated communities, each designed with thoughtful amenities — green spaces, children's play areas, security infrastructure, and community centres that foster neighbourliness. Our commercial real estate projects provide modern, flexible office and retail spaces that meet the evolving needs of Ghana's growing business community.

We are committed to green building principles — incorporating solar energy systems, rainwater harvesting, and natural ventilation into our designs wherever possible. For investors, our real estate investment opportunities offer attractive, stable returns in one of Africa's most dynamic property markets.

At Natura Homes, we are not just building structures — we are building communities where life thrives.`,
    services: [
      'Residential estate development and sales',
      'Premium and affordable housing projects',
      'Commercial real estate and office park development',
      'Property management and facility services',
      'Green and sustainable building initiatives',
      'Real estate investment and joint ventures',
    ],
    icon: HomeIcon,
    color: '#76D7C4',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    highlights: [
      { label: 'Units Developed', value: '500+' },
      { label: 'Active Projects', value: '8' },
      { label: 'Satisfied Homeowners', value: '400+' },
      { label: 'Sq. Meters Built', value: '120K+' },
    ],
  },
];

const CompanyPage = () => {
  const { id } = useParams<{ id: string }>();
  const company = companiesData.find((c) => c.id === id);

  if (!company) {
    return <Navigate to="/companies" replace />;
  }

  const Icon = company.icon;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        {/* Cover Image */}
        <div className="absolute inset-0">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — deep at bottom, light at top */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${company.color}33 0%, ${company.color}99 60%, ${company.color}ee 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom pb-12 md:pb-20 pt-36 md:pt-48 w-full">
          {/* Back link */}
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Companies
          </Link>

          <div className="flex items-start gap-4 md:gap-6">
            {/* Icon badge */}
            <div
              className="w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{ backgroundColor: `${company.color}30`, border: `2px solid ${company.color}60` }}
            >
              <Icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
            </div>

            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                style={{ backgroundColor: `${company.color}40`, color: '#fff' }}
              >
                {company.tagline}
              </span>
              <h1 className="heading-display text-white leading-tight">{company.name}</h1>
              <p className="text-white/80 text-base md:text-lg mt-3 max-w-2xl">
                {company.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section
        className="py-8 md:py-10"
        style={{ backgroundColor: company.color }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-white text-center">
            {company.highlights.map((h) => (
              <div key={h.label}>
                <p className="text-2xl md:text-3xl font-bold">{h.value}</p>
                <p className="text-white/80 text-sm mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Description */}
            <div className="animate-fade-up">
              <span className="badge mb-4">About {company.name}</span>
              <h2 className="heading-section text-foreground mb-6">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <div className="space-y-4">
                {company.description.trim().split('\n\n').map((para, i) => (
                  <p key={i} className="text-body text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="animate-fade-up delay-200">
              <span className="badge mb-4">What We Offer</span>
              <h2 className="heading-section text-foreground mb-6">
                Our Key <span className="gradient-text">Services</span>
              </h2>
              <ul className="space-y-4">
                {company.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: company.color }}
                    />
                    <span className="text-body text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div
            className="rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
            style={{ backgroundColor: `${company.color}15`, border: `1px solid ${company.color}30` }}
          >
            {/* Decorative circles */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-10"
              style={{ backgroundColor: company.color }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-10"
              style={{ backgroundColor: company.color }}
            />

            <div className="relative z-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${company.color}20` }}
              >
                <Icon className="w-8 h-8" style={{ color: company.color }} />
              </div>
              <h2 className="heading-section text-foreground mb-4">
                Interested in {company.name}?
              </h2>
              <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
                Whether you're a potential client, investor, or partner, we'd love to hear from you.
                Reach out to us and let's explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/companies" className="btn-outline">
                  View All Companies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyPage;
