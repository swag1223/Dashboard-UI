import interBold from '@assets/fonts/Inter/Inter-Bold.woff';
import interMedium from '@assets/fonts/Inter/Inter-Medium.woff';
import interRegular from '@assets/fonts/Inter/Inter-Regular.woff';
import interSemibold from '@assets/fonts/Inter/Inter-SemiBold.woff';
import icomoonFile from '@assets/icomoon/icomoon.woff';

const fonts = `
  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    font-display: swap;
    src: url(${interBold}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-display: swap;
    src: url(${interSemibold}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    font-display: swap;
    src: url(${interMedium}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-display: swap;
    src: url(${interRegular}) format("woff");
  }
  @font-face {
    font-family: 'icomoon';
    src: url(${icomoonFile}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  
  [class^='icon-'],
  [class*=' icon-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-logout:before {
    content: '\\e906';
  }
  .icon-settings:before {
    content: '\\e904';
  }
  .icon-user:before {
    content: '\\e903';
  }
  .icon-search:before {
    content: '\\e902';
  }
  .icon-menu:before {
    content: '\\e901';
  }
  .icon-bell:before {
    content: '\\e900';
  }`;

export default fonts;
