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
        font-display: block;
        font-family: 'icomoon';
        font-style: normal;
        font-weight: normal;
        src: url(${icomoonFile}) format('woff');
      }
      
      [class^='icon-'],
      [class*=' icon-'] {
        font-family: 'icomoon', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        line-height: 1;
        text-transform: none;
      }

      .icon-bell:before {
        content: "\\e900";
      }`;

export default fonts;
