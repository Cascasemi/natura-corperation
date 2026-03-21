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
                    <a href="mailto:info@naturacorporation.com" className="text-muted-foreground hover:text-accent transition-colors">
                      info@naturacorporation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+233537402232" className="text-muted-foreground hover:text-accent transition-colors block">
                      +233 53 740 2232
                    </a>
                    <a href="tel:+233249768470" className="text-muted-foreground hover:text-accent transition-colors block">
                      +233 249 768 470
                    </a>
                    <a href="tel:+233558448491" className="text-muted-foreground hover:text-accent transition-colors block">
                      +233 55 844 8491
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <a href="https://wa.me/233249768470" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors block">
                      +233 24 976 8470
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
              <div className="rounded-2xl overflow-hidden shadow-medium h-40 sm:h-52 md:h-64 bg-secondary">
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
