import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';

const imagesData = [
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    order: {
      desktop: 1,
      mobile: 2,
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    order: {
      desktop: 2,
      mobile: 3,
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    rows: 2,
    order: {
      desktop: 3,
      mobile: 1,
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
    order: {
      desktop: 4,
    },
  },
];

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cols = isMobile ? 1 : 3;
  return (
    <ImageList variant='quilted' cols={cols} gap={25} rowHeight={150}>
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
