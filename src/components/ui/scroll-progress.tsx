import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  progress: number;
  className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ 
  progress, 
  className 
}) => {
  return (
    <div 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400",
        className
      )}
    >
      <div 
        className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 ease-out shadow-lg"
        style={{ 
          width: `${Math.max(0, Math.min(100, progress * 100))}%`,
          boxShadow: '0 0 10px rgba(217, 119, 6, 0.5)'
        }}
      />
    </div>
  );
};

interface SectionNavigationProps {
  sections: string[];
  activeSection: number;
  onSectionClick: (index: number) => void;
  className?: string;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({
  sections,
  activeSection,
  onSectionClick,
  className
}) => {
  return (
    <nav 
      className={cn(
        "fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3",
        className
      )}
    >
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => onSectionClick(index)}
          className={cn(
            "block w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
            activeSection === index
              ? "bg-amber-600 border-amber-600 scale-110"
              : "bg-transparent border-gray-400 hover:border-amber-500"
          )}
          aria-label={`Navigate to ${section}`}
          title={section}
        />
      ))}
    </nav>
  );
};