import { useTheme } from '@mui/material';
import { useState } from 'react';

export default function useIsMobile() {
  const theme = useTheme();
  const MOBILE_BP = theme.breakpoints.values.sm;

  const [isMobile, setIsMObile] = useState(window.innerWidth <= MOBILE_BP);

  window.addEventListener('resize', () => {
    setIsMObile(window.innerWidth <= MOBILE_BP);
  });

  return isMobile;
}
