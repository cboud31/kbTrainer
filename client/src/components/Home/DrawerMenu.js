import React from 'react';
import useToggle from '../../hooks/useToggle';

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ListItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';

import { Container } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HomeIcon from '@material-ui/icons/Home';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CreateIcon from '@material-ui/icons/Create';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50vw',
  },
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
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Exercises', path: '/exercises', icon: <FitnessCenterIcon /> },
    { name: 'Routines', path: '/routines', icon: <FormatListNumberedIcon /> },
    { name: 'Register', path: '/register', icon: <CreateIcon /> },
    { name: 'Login', path: '/login', icon: <VpnKeyIcon /> },
  ];

  //   const list = () => {
  //     return (
  //       <>
  //         <div onClick={() => toggleDrawer(false)}>
  //           <List>
  //             {categories.map((category) => {
  //               return (
  //                 <ListItem key={category}>
  //                   <ListItemText>
  //                     <Link className={classes.link} to={category.path}>
  //                       {category.name}
  //                     </Link>
  //                   </ListItemText>
  //                 </ListItem>
  //               );
  //             })}
  //           </List>
  //         </div>
  //       </>
  //     );
  //   };

  const linksList = () => {
    return (
      <div className={classes.root}>
        <List aria-label="drawer-menu-list">
          {categories.map((category) => {
            return (
              <ListItem button divider onClick={() => toggleDrawer(!drawer)}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText>{category.name}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
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
        width="100%"
        anchor={'left'}
        open={drawer}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        {linksList()}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
