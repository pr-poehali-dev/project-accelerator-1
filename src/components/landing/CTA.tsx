import { Button } from '@/components/ui/button';

export const TG_LINK = 'https://t.me/GUM_GUM8';

export const CTA = ({
  children,
  variant = 'gold',
  className = '',
  tg = false,
  onClick,
}: {
  children: React.ReactNode;
  variant?: 'gold' | 'outline';
  className?: string;
  tg?: boolean;
  onClick?: () => void;
}) => {
  const handleClick = onClick ?? (tg ? () => window.open(TG_LINK, '_blank') : undefined);
  if (variant === 'outline') {
    return (
      <Button
        onClick={handleClick}
        className={`h-auto rounded-full border-2 border-gold bg-transparent px-8 py-4 text-base font-semibold text-emerald hover:bg-gold hover:text-emerald-deep transition-all ${className}`}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      onClick={handleClick}
      className={`h-auto rounded-full gold-gradient px-8 py-4 text-base font-semibold text-emerald-deep shadow-lg shadow-gold/30 hover:scale-105 transition-transform ${className}`}
    >
      {children}
    </Button>
  );
};

export default CTA;
