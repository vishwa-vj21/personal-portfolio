
import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    // Save the original scrollTo function
    const originalScrollTo = window.scrollTo;

    // Override the scrollTo function
    window.scrollTo = function() {
      // If smooth scroll is requested through an options object
      if (arguments.length === 1 && typeof arguments[0] === 'object' && arguments[0].behavior === 'smooth') {
        const { top, left } = arguments[0];
        smoothScroll(top);
        return;
      }
      
      // Fall back to original implementation for other cases
      originalScrollTo.apply(this, arguments as any);
    };

    // Implement the smooth scroll function
    const smoothScroll = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 800; // ms
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        startTime = startTime || currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeOutCubic(progress);
        
        window.scrollBy(0, distance * ease - (timeElapsed > 0 ? distance * easeOutCubic((timeElapsed - 16) / duration) : 0));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      // Easing function
      const easeOutCubic = (t: number) => {
        return 1 - Math.pow(1 - t, 3);
      };

      requestAnimationFrame(step);
    };

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if it's an internal anchor link
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        smoothScroll(targetPosition);
        
        // Update URL without reload
        history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      // Cleanup
      window.scrollTo = originalScrollTo;
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
}
