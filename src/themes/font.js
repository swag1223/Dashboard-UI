import InterRegular from '../assets/font/Inter/Inter-Regular.woff2';
import InterMedium from '../assets/font/Inter/Inter-Medium.woff2';
import InterSemiBold from '../assets/font/Inter/Inter-SemiBold.woff2';
import InterBold from '../assets/font/Inter/Inter-Bold.woff2';

const Font = `@font-face {
    font-family: 'Inter',
    font-weight: 400,
    src: url(${InterRegular}) format('woff2')
  }

  @font-face {
    font-family: 'Inter',
    font-weight: 600,
    src: url(${InterMedium}) format('woff2')
  }

  @font-face {
    font-family: 'Inter',
    font-weight: 700,
    src: url(${InterSemiBold}) format('woff2')
  }
  
  @font-face {
    font-family: 'Inter',
    font-weight: 800,
    src: url(${InterBold}) format('woff2')
  }`;

export default Font;
