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
  
  .icon-chevron-up:before {
    content: "\\e901";
  }
  .icon-chevron-down:before {
    content: "\\e902";
  }
  .icon-shopping-bag:before {
    content: "\\e917";
  }
  .icon-support:before {
    content: "\\e918";
  }
  .icon-bell:before {
    content: "\\e903";
  }
  .icon-menu:before {
    content: "\\e904";
  }
  .icon-lock-closed:before {
    content: "\\e905";
  }
  .icon-logout:before {
    content: "\\e907";
  }
  .icon-document-report:before {
    content: "\\e908";
  }
  .icon-inbox-in:before {
    content: "\\e909";
  }
  .icon-clipboard-list:before {
    content: "\\e90a";
  }
  .icon-cog:before {
    content: "\\e90b";
  }
  .icon-search:before {
    content: "\\e90d";
  }
  .icon-user:before {
    content: "\\e90e";
  }
  .icon-collection:before {
    content: "\\e90f";
  }
  .icon-chart-pie:before {
    content: "\\e910";
  }
  .icon-dribbble:before {
    content: "\\e911";
  }
  .icon-github:before {
    content: "\\e912";
  }
  .icon-twitter:before {
    content: "\\e913";
  }
  .icon-facebook-f:before {
    content: "\\e914";
  }
  .icon-cog:before {
    content: "\\e915";
  }
  .icon-globe:before {
    content: "\\e916";
  }
  .icon-adjustments:before {
    content: "\\e900";
  }`;

export default fonts;
