import { Fragment } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // number of columns to appear in our grid
  const cols = isMobile ? 1 : 3;

  const imagesData = [
    {
      img: 'src/assets/images/beach1.png',
      title: 'Beach-bench',
      ...(isMobile
        ? { rows: 1, cols: 1, order: 2 }
        : { rows: 1, cols: 1, order: 1 }),
    },
    {
      img: 'src/assets/images/beach2.png',
      title: 'purple water beach',
      ...(isMobile
        ? { rows: 1, cols: 1, order: 3 }
        : { rows: 1, cols: 1, order: 2 }),
    },
    {
      img: 'src/assets/images/beach3.png',
      title: 'sunset beach',
      ...(isMobile
        ? { rows: 2, cols: 1, order: 1 }
        : { rows: 2, cols: 1, order: 3 }),
    },
    {
      img: 'src/assets/images/beach4.png',
      title: 'beautiful beach',
      ...(isMobile
        ? { rows: 1, cols: 1, isHidden: isMobile }
        : { rows: 1, cols: 2, order: 4 }),
    },
  ];

  return (
    <ImageList variant='quilted' cols={cols} gap={25} rowHeight={160}>
      {imagesData.map((image) => {
        return (
          <Fragment key={image.title}>
            {!image.isHidden && (
              <ImageListItem
                cols={image.cols}
                rows={image.rows}
                sx={{ order: image.order }}>
                <img src={image.img} alt={image.title} />
              </ImageListItem>
            )}
          </Fragment>
        );
      })}
    </ImageList>
  );
};

export default Gallery;
