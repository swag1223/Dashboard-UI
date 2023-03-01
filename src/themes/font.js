import InterRegular from '@assets/fonts/Inter/Inter-Regular.woff';
import InterMedium from '@assets/fonts/Inter/Inter-Medium.woff';
import InterSemiBold from '@assets/fonts/Inter/Inter-SemiBold.woff';
import InterBold from '@assets/fonts/Inter/Inter-Bold.woff';

const font = `@font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 400,
    src: url(${InterRegular}) format('woff')
  }

  @font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 500,
    src: url(${InterMedium}) format('woff')
  }

  @font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 600,
    src: url(${InterSemiBold}) format('woff')
  }
  
  @font-face {
    font-family: 'Inter',
    font-style: 'normal,
    font-display: 'swap',
    font-weight: 700,
    src: url(${InterBold}) format('woff')
  }`;

export default font;
