import { useContext } from 'react';

import { ViewportContext } from '@context/ViewportContextProvider';

const useViewportContext = () => useContext(ViewportContext);
export default useViewportContext;
