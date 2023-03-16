import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';
import imagesData from './imagesData.config';

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cols = isMobile ? 1 : 3;
  return (
    <ImageList variant='quilted' cols={cols} gap={25} rowHeight={160}>
      {imagesData.map((image) => {
        if (isMobile && image.order.mobile === undefined) {
          return null;
        }

        const order = isMobile ? image.order.mobile : image.order.desktop;
        return (
          <ImageListItem
            key={image.img}
            cols={image.cols || 1}
            rows={image.rows || 1}
            sx={{ order }}>
            <img src={image.img} alt={image.title} />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default Gallery;
