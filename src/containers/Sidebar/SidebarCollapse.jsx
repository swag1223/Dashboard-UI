import FontIcon from '@components/FontIcon/FontIcon';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarCollapse = ({ title, iconName, collapseItems }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FontIcon className={`icon-${iconName}`} size={20} fontcolor='dark' />
        </ListItemIcon>

        <ListItemText primary={title} />
        <ListItemIcon
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          {!open ? (
            <FontIcon
              className='icon-chevron-up-converted'
              size={16}
              fontcolor='dark'
            />
          ) : (
            <FontIcon
              className='icon-chevron-down-converted'
              size={16}
              fontcolor='dark'
            />
          )}
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={!open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {collapseItems.map((item) => (
            <ListItemButton key={item.title} sx={{ pl: 9 }}>
              <Link to={item.to}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarCollapse;
