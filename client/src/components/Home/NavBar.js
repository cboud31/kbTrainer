import React from 'react';

// Material U-I imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// useMediaQuery & useTheme hooks
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// Custom components
import { NavLinks, DrawerMenu } from '../Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  nav_bar: {
    backgroundColor: 'black',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // [x] Save NavLinks in a variable (already saved as a component)
  // [x] Create matches variable above.

  const menu = (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav_bar}>
        <Toolbar>
          <Typography className={classes.title}>
            <FitnessCenterIcon fontSize="large" /> Kettlebell Trainer
          </Typography>
          {matches ? <DrawerMenu /> : <NavLinks />}
          {/* Ternary to render NavLinks or Drawer */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
