import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  threshold?: number;
}

/**
 * A wrapper component that adds scroll-triggered reveal animations to its children.
 * Elements will animate into view when they enter the viewport.
 */
const ScrollReveal = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'scroll-animate-left';
      case 'right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      default:
        return 'scroll-animate';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${getAnimationClass()} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
