import React, { Fragment } from 'react';

import { Divider, List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';

import CardItem from '@components/CardItem';

const CustomList = (props) => {
  const { data } = props;

  return (
    <List
      disablePadding
      sx={{
        maxHeight: '370px',
        overflowY: 'auto',
      }}>
      {data.map((item) => {
        return (
          <Fragment key={item.id}>
            <ListItem
              disablePadding
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
              }}>
              <CardItem dataItem={item} />
              {item.amount}
            </ListItem>
            {item.id !== data.length ? <Divider /> : null}
          </Fragment>
        );
      })}
    </List>
  );
};

CustomList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      amount: PropTypes.element,
    })
  ),
};

CustomList.defaultProps = {
  data: [],
};
export default CustomList;
