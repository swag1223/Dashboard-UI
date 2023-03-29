import { useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import beach3 from '@assets/images/beach3.png';
import beach4 from '@assets/images/beach4.png';
import beach2 from '@assets/images/beach2.png';
import beach1 from '@assets/images/beach1.png';
import CONSTANTS from '@constants/index';
import useViewportContext from '@hooks/useViewPortContext';

const Gallery = () => {
  const theme = useTheme();
  const { isMobile } = useViewportContext();
  const {
    typography: { pxToRem },
  } = theme;

  // number of columns to appear in our grid
  const cols = isMobile ? 1 : 3;

  // image data config
  const imagesData = [
    {
      img: beach1,
      title: 'Beach-bench',
      ...(isMobile
        ? { rows: 1, cols: 1, order: 2 }
        : { rows: 1, cols: 1, order: 1 }),
    },
    {
      img: beach2,
      title: 'purple water beach',
      ...(isMobile
        ? { rows: 1, cols: 1, order: 3 }
        : { rows: 1, cols: 1, order: 2 }),
    },
    {
      img: beach3,
      title: 'sunset beach',
      ...(isMobile
        ? { rows: 2, cols: 1, order: 1 }
        : { rows: 2, cols: 1, order: 3 }),
    },
    {
      img: beach4,
      title: 'beautiful beach',
      ...(isMobile
        ? { rows: 1, cols: 1, isHidden: isMobile }
        : { rows: 1, cols: 2, order: 4 }),
    },
  ];

  return (
    <ImageList
      variant='quilted'
      cols={cols}
      gap={CONSTANTS.IMAGE_LIST_GAP}
      sx={{
        gridTemplateRows: `${pxToRem(
          CONSTANTS.IMAGE_LIST_ROW1_HEIGHT
        )} ${pxToRem(CONSTANTS.IMAGE_LIST_ROW2_HEIGHT)}`,
      }}>
      {imagesData.map((image) => {
        return (
          !image.isHidden && (
            <ImageListItem
              key={image.title}
              cols={image.cols}
              rows={image.rows}
              sx={{ order: image.order }}>
              <img src={image.img} alt={image.title} />
            </ImageListItem>
          )
        );
      })}
    </ImageList>
  );
};

export default Gallery;
