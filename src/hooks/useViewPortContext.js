import { ViewportContext } from '@context/ViewportContextProvider';
import { useContext } from 'react';

const useViewportContext = () => useContext(ViewportContext);
export default useViewportContext;
