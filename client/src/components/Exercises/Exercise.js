import React from 'react';
import ReactPlayer from 'react-player';

// Material U-I Imports:
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    margin: '0 auto',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  rootMobile: {
    width: '99vw',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    margin: '0 auto',
    marginTop: '2rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  details: {
    alignSelf: 'center',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  summary: {
    justifyContent: 'space-between',
  },
}));

const Exercise = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={!matches ? classes.root : classes.rootMobile}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <b>{props.title}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <ReactPlayer
            url={props.videoURL}
            style={{ slignSelf: 'center', justifyContent: 'center' }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Exercise;

// The Exercise component will be a ListItem with an Accordion inside of it.
