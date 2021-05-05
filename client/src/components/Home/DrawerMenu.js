import React from 'react';
import useToggle from '../../hooks/useToggle';

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'black',
    textDecoration: 'bold',
  },
  icon: {
    color: 'white',
    marginLeft: 'auto',
    height: '2.25rem',
    width: '2.25rem',
  },
}));

const DrawerMenu = () => {
  const [drawer, toggleDrawer] = useToggle(false);

  const classes = useStyles();

  //   Map over this array to build menu links:
  const categories = [
    { name: 'Home', path: '/' },
    { name: 'Exercises', path: '/exercises' },
    { name: 'Routines', path: '/routines' },
  ];

  const list = () => {
    return (
      <>
        <div onClick={() => toggleDrawer(false)}>
          <List>
            {categories.map((category) => {
              return (
                <ListItem key={category}>
                  <ListItemText>
                    <Link className={classes.link} to={category.path}>
                      {category.name}
                    </Link>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </>
    );
  };

  return (
    <div className="DrawerMenu">
      <IconButton
        onClick={() => {
          toggleDrawer(true);
        }}
      >
        {!drawer ? (
          <MenuIcon className={classes.icon} />
        ) : (
          <CloseIcon className={classes.icon} />
        )}
      </IconButton>
      <Drawer
        anchor={'left'}
        open={drawer}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
