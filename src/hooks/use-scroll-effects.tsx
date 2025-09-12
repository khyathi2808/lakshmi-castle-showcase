import { useState, useEffect, useCallback } from 'react';

interface ScrollEffectsState {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  scrollProgress: number;
  activeSection: number;
  isScrolling: boolean;
}

export function useScrollEffects() {
  const [scrollState, setScrollState] = useState<ScrollEffectsState>({
    scrollY: 0,
    scrollDirection: 'down',
    scrollProgress: 0,
    activeSection: 0,
    isScrolling: false,
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const updateScrollState = useCallback(() => {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(currentScrollY / documentHeight, 1);
    
    // Determine scroll direction
    const direction = currentScrollY > lastScrollY ? 'down' : 'up';
    
    // Determine active section based on scroll position
    const sections = document.querySelectorAll('[data-scroll-section]');
    let activeIndex = 0;
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        activeIndex = index;
      }
    });

    setScrollState({
      scrollY: currentScrollY,
      scrollDirection: direction,
      scrollProgress: progress,
      activeSection: activeIndex,
      isScrolling: true,
    });

    setLastScrollY(currentScrollY);

    // Clear existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set new timeout to detect when scrolling stops
    const newTimeout = setTimeout(() => {
      setScrollState(prev => ({ ...prev, isScrolling: false }));
    }, 150);

    setScrollTimeout(newTimeout);
  }, [lastScrollY, scrollTimeout]);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [updateScrollState]);

  return scrollState;
}

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

export function useParallax(speed: number = 0.5) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offsetY;
}