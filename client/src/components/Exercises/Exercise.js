import React from 'react';
import ReactPlayer from 'react-player';

// Material U-I Imports:
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    margin: '0 auto',
    marginTop: '2rem',
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
    flexDirection: 'row',
    alignContent: 'center',
  },
  details: {
    flexGrow: 0,
  },
}));

const Exercise = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={!matches ? classes.root : classes.rootMobile}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <b>{props.title}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion}>
          <ReactPlayer url={props.videoURL} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Exercise;
