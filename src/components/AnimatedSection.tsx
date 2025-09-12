import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'stagger';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const animationClass = `scroll-${animation}`;
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${isVisible ? 'animate' : ''} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;