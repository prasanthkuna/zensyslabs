
import { useCallback } from 'react';

/**
 * Hook for smooth scrolling to page sections
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
