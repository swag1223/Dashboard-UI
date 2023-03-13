import { Box, Typography } from '@mui/material';
import StyledSearchResultItem from './style';

const SearchResultItem = (props) => {
  const { option } = { ...props };
  return (
    <StyledSearchResultItem key={option.id} {...props}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography variant='h4'>{option?.label}</Typography>
        <Typography variant='body2'>{option.description}</Typography>
      </Box>
      <Typography variant='body1'>{option.sales} sales</Typography>
    </StyledSearchResultItem>
  );
};
export default SearchResultItem;
