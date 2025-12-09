import { useEffect, useState, useRef } from 'react';
import { Building2, Users, Globe, Calendar } from 'lucide-react';

interface StatItemProps {
  icon: typeof Building2;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Calendar, value: 2, suffix: '', label: 'Years of Excellence', delay: 0 },
    { icon: Building2, value: 5, suffix: '', label: 'Subsidiary Companies', delay: 150 },
    { icon: Users, value: 10, suffix: '+', label: 'Team Members', delay: 300 },
    { icon: Globe, value: 3, suffix: '', label: 'Countries', delay: 450 },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="badge mb-4">Our Impact</span>
          <h2 className="heading-section text-foreground">
            Numbers That Speak
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
