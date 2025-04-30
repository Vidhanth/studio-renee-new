import { useState, useEffect } from 'react';

export function useScrollTrigger(threshold = 300) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let hasShown = false;

    const handleScroll = () => {
      if (!hasShown && window.scrollY > threshold) {
        setShowModal(true);
        hasShown = true;
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return showModal;
} 