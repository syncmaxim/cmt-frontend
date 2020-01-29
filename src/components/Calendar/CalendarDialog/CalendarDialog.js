import React from "react";
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import moment from 'moment';

const styles = {
  dialogContentTextHead: {
    fontWeight: '500'
  }
};

const CalendarDialog = props => {
  let startFullDate = moment(props.event.start || new Date()).format('LLL');

  return (
    <Dialog onClose={props.onClose} open={props.open} maxWidth='md' fullWidth={true}>
      <DialogTitle>{props.event.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span style={styles.dialogContentTextHead}>About:</span> {props.event.description}
        </DialogContentText>
        <DialogContentText>
          <span style={styles.dialogContentTextHead}>Where:</span> {props.event.address}, {props.event.place}
        </DialogContentText>
        <DialogContentText>
          <span style={styles.dialogContentTextHead}>When:</span> { startFullDate }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => props.handleReadMore(props.event._id)} color="primary" autoFocus>
          Read More
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
  handleReadMore: PropTypes.func.isRequired,
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
