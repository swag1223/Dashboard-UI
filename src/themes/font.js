import InterRegular from '@assets/fonts/Inter/Inter-Regular.woff2';
import InterMedium from '@assets/fonts/Inter/Inter-Medium.woff2';
import InterSemiBold from '@assets/fonts/Inter/Inter-SemiBold.woff2';
import InterBold from '@assets/fonts/Inter/Inter-Bold.woff2';

const Font = `@font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 400,
    src: url(${InterRegular}) format('woff2')
  }

  @font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 500,
    src: url(${InterMedium}) format('woff2')
  }

  @font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 600,
    src: url(${InterSemiBold}) format('woff2')
  }
  
  @font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 700,
    src: url(${InterBold}) format('woff2')
  }`;
export default Font;
