import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedProgressBarProps {
  percentage: number;
  label: string;
  className?: string;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({
  percentage,
  label,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className={`mb-6 ${className}`}>
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{label}</span>
        <span className="text-primary font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className={`progress-bar h-full bg-gradient-to-r from-primary to-primary-glow rounded-full ${isVisible ? 'animate' : ''}`}
          style={{ '--progress-width': `${percentage}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;