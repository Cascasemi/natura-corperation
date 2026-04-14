import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('natura-cookies-accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('natura-cookies-accepted', 'true');
    setVisible(false);
  };

  return (
    <div
      id="app-banner"
      className={visible ? 'show' : ''}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="flex items-center gap-4 bg-card border border-border rounded-2xl shadow-strong px-5 py-4 max-w-md w-[calc(100vw-2rem)]">
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground mb-0.5">We use cookies</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We use cookies to improve your experience on our site. By continuing, you agree to our{' '}
            <a href="#" className="text-primary hover:text-accent transition-colors underline">
              Privacy Policy
            </a>.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={accept} className="btn-accent text-xs px-4 py-2">
            Accept
          </button>
          <button
            onClick={accept}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
