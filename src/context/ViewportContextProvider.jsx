import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery, useTheme } from '@mui/material';

const ViewportContext = createContext();

const ViewportContextProvider = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const value = useMemo(() => ({ isMobile, isTablet }), [isMobile, isTablet]);

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
};

ViewportContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ViewportContext, ViewportContextProvider };
