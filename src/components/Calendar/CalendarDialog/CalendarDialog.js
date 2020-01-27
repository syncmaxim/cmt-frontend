import React from "react";
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import moment from 'moment';

const styles = {
  eventDialogBlock: {
    display: 'flex',
    justifyContent: 'space-around'
  }
};

const CalendarDialog = props => {
  let startFullDate, endFullDate, startDate, endDate;

  startDate = props.event.start || new Date();
  endDate = props.event.end || new Date();

  startFullDate = moment(startDate).format('LL');
  endFullDate = moment(endDate).format('LL');

  return (
    <Dialog onClose={props.onClose} open={props.open} maxWidth='md' fullWidth={true}>
      <DialogTitle>{props.event.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.event.description}
        </DialogContentText>
        <DialogContentText>
          {props.event.place}
        </DialogContentText>
        <DialogContentText>
          {props.event.address}
        </DialogContentText>
        <DialogContentText style={styles.eventDialogBlock}>
          <span>Event Start: { startFullDate }</span>
          <span>Event End: { endFullDate }</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.onClose} color="primary" autoFocus>
          Read More ...
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
