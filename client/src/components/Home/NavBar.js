import React from 'react';
import logo from '/Users/CoryB/Desktop/2021_codingProjects/kbTrainer/client/src/components/Screen Shot 2021-05-05 at 9.23.37 PM.png';

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
  logo: {
    height: '20%',
    width: '25%',
    paddingTop: '.25rem',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // [x] Save NavLinks in a variable (already saved as a component)
  // [x] Create matches variable above.

  return (
    <div className={classes.root} alignItems="center">
      <AppBar position="static" className={classes.nav_bar}>
        <Toolbar>
          <Typography className={classes.title}>
            <img className={classes.logo} src={logo} alt="logo" />
          </Typography>
          {matches ? <DrawerMenu /> : <NavLinks />}
          {/* Ternary to render NavLinks or Drawer */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

{
  /* <img className={classes.logo} src={logo} alt="logo" /> */
}
