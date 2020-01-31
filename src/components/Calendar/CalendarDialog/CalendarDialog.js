import React from "react";
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@material-ui/core';
import { Button } from '@material-ui/core';
import moment from 'moment';

const styles = {
  aboutBlock: {
    padding: '10px 0',
  },
  locationBlock: {
    width: '50%',
    padding: '10px 0',
    margin: 'auto',
    display: 'flex',
  },
  location: {
    margin: '0 10px'
  },
  date: {
    margin: '0 10px'
  }
};

const CalendarDialog = props => {
  let startFullDate = moment(props.event.start || new Date()).format('LLL');
  const location = `${props.event.address}, ${props.event.place}`;

  return (
    <Dialog onClose={props.onClose} open={props.open} maxWidth='md' fullWidth={true}>
      <DialogTitle>{props.event.title}</DialogTitle>
      <DialogContent>
        <div style={styles.aboutBlock}>
          {props.event.description}
        </div>
        <div style={styles.locationBlock}>
          <div style={styles.location}>
            <Chip size='small' label={location} />
          </div>
          <div style={styles.date}>
            <Chip size='small' label={startFullDate} />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleLearnMore(props.event._id)} color="primary" autoFocus>
          Learn More...
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CalendarDialog.defaultProps = {
  start: new Date(),
  end: new Date()
};

CalendarDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleLearnMore: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  event: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    place: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default CalendarDialog;
