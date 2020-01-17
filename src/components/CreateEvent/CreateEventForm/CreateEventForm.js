import React from "react";
import { TextField, Button } from '@material-ui/core';
import { DateTimePicker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import moment from 'moment';
import '../index.css';
import 'react-widgets/dist/css/react-widgets.css';

const CreateEventForm = (props) => {

  moment.locale('en');
  momentLocalizer();

  return (
    <div className='create-event-form-block'>
      <form className='create-event-form' onSubmit={props.handleConfirm}>
        <div className='create-event-form-field'>
          <TextField required name='title' label="Event title" onChange={props.handleChange} />
        </div>
        <div className='create-event-form-field date-time-field'>
          <DateTimePicker name='start' placeholder='Event start date and time' value={props.date.start} onChange={props.handleStartDateChange} />
          <DateTimePicker name='end' placeholder='Event end date and time' value={props.date.end} onChange={props.handleEndDateChange} />
        </div>
        <div className='create-event-form-field'>
          <TextField required name='place' label="Event Place" onChange={props.handleChange} />
        </div>
        <div className='create-event-form-field'>
          <TextField required name='address' label="Event Address" onChange={props.handleChange} />
        </div>
        <div className='create-event-form-field'>
          <TextField required name='description' label="Event Description" multiline rows="4" onChange={props.handleChange} />
        </div>
        <div className='create-event-form-field-actions'>
          <Button variant="contained" onClick={props.handleCancel}> Cancel </Button>
          <Button variant="contained" color="primary" type='submit' disabled={props.isConfirmDisabled}> Confirm </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
