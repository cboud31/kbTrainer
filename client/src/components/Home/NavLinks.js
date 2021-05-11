import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  nav_links: {
    display: 'flex',
  },
  nav_link: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '1.25rem',
    textDecoration: 'none',
  },
  link: {
    fontFamily: 'Open Sans',
    textDecoration: 'bold',
    color: 'white',
    underline: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: 'yellow',
    },
  },
}));

const NavLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav_links}>
      {/* !isLoggedIn ? Home : Dashboard */}
      {/* <Typography className={classes.nav_link}></Typography> */}
      <Typography className={classes.nav_link}>
        <Link className={classes.link} href="#" onClick={() => {}}>
          Routines
        </Link>
      </Typography>
      <Typography className={classes.nav_link}>
        <Link className={classes.link} href="/exercises" onClick={() => {}}>
          Exercises
        </Link>
      </Typography>
      <Typography className={classes.nav_link}>
        <Link className={classes.link} href="#" onClick={() => {}}>
          About
        </Link>
      </Typography>
      <Typography className={classes.nav_link}>
        <Link className={classes.link} href="#" onClick={() => {}}>
          Contact
        </Link>
      </Typography>
      {/* !isLoggedIn ? Register/ Login : Logout */}
      <Typography className={classes.nav_link}>
        <Link className={classes.link} href="#" onClick={() => {}}>
          Register/ Login
        </Link>
      </Typography>
    </div>
  );
};

export default NavLinks;
