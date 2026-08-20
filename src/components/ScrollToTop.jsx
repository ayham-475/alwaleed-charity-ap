import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // إعادة التمرير إلى أعلى الصفحة فور تغير المسار
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}