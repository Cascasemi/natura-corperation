import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const offices = [
  {
    city: 'Accra',
    region: 'Greater Accra Region',
    address: 'North Legon, Adjacent ACP Estate',
    addressLine2: 'Accra, Ghana',
    phone: '+233 53 740 2232',
    email: 'accra@naturacorp.com',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
  {
    city: 'Kumasi',
    region: 'Ashanti Region',
    address: 'Ahodwo, Near Melcom',
    addressLine2: 'Kumasi, Ghana',
    phone: '+233 53 740 2232',
    email: 'kumasi@naturacorp.com',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
  {
    city: 'Takoradi',
    region: 'Western Region',
    address: 'Market Circle, Liberation Road',
    addressLine2: 'Takoradi, Ghana',
    phone: '+233 53 740 2232',
    email: 'takoradi@naturacorp.com',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
];

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="badge-accent mb-4 animate-fade-up">Get in Touch</span>
          <h1 className="heading-display mb-6 animate-fade-up delay-100">Contact Us</h1>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <span className="badge mb-4">Send a Message</span>
              <h2 className="heading-section text-foreground mb-8">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <span className="badge mb-4">Contact Information</span>
              <h2 className="heading-section text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@naturacorp.com" className="text-muted-foreground hover:text-accent transition-colors">
                      info@naturacorp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+233537402232" className="text-muted-foreground hover:text-accent transition-colors">
                      +233 53 740 2232
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                    <p className="text-muted-foreground">
                      North Legon<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-medium h-64 bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Map location"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge mb-4">Global Presence</span>
            <h2 className="heading-section text-foreground">Our Offices</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className="glass-card p-6 md:p-8 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                  {office.city}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">{office.region}</p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-muted-foreground">
                      {office.address}<br />
                      {office.addressLine2}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
