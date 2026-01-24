import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When the path changes, scroll to the top of the window instantly
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything visible
}