import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompanyCardProps {
  name: string;
  description: string;
  industry: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

const CompanyCard = ({ name, description, industry, icon: Icon, color, link }: CompanyCardProps) => {
  return (
    <div className="group glass-card p-6 md:p-8 hover-lift">
      {/* Icon Container */}
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>

      {/* Industry Badge */}
      <span 
        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {industry}
      </span>

      {/* Content */}
      <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {name}
      </h3>
      <p className="text-body-sm text-muted-foreground mb-6 line-clamp-3">
        {description}
      </p>

      {/* Link */}
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary group/link"
      >
        <span className="link-underline">Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
};

export default CompanyCard;
