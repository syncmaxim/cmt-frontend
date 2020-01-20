import React from "react";
import { TextField, Button } from '@material-ui/core';
import { DateTimePicker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import moment from 'moment';
import '../index.css';
import 'react-widgets/dist/css/react-widgets.css';

const CreateEventForm = props => {

  moment.locale('en');
  momentLocalizer();

  return (
    <div className='create-event-form-block'>
      <form className='create-event-form' onSubmit={props.handleConfirm}>
        <div className='create-event-form-field'>
          <TextField required name='title' label="Event title" variant="outlined" size='small' onChange={props.handleChange} />
        </div>
        <div className='create-event-form-field date-time-field'>
          <div className='row-field-one'>
            <DateTimePicker className='event-start-field' name='start' placeholder='Event start date and time' variant="outlined" size='small' value={props.date.start} onChange={props.handleStartDateChange} />
          </div>
          <div className='row-field-two'>
            <DateTimePicker className='event-end-field' name='end' placeholder='Event end date and time' variant="outlined" size='small' value={props.date.end} onChange={props.handleEndDateChange} />
          </div>
        </div>
        <div className='create-event-form-field row-field'>
          <div className='row-field-one'>
            <TextField required className='event-place-field' name='place' label="Event Place" size='small' variant="outlined" onChange={props.handleChange} />
          </div>
          <div className='row-field-two'>
            <TextField required className='event-address-field' name='address' label="Event Address" size='small' variant="outlined" onChange={props.handleChange} />
          </div>
        </div>
        <div className='create-event-form-field'>
          <TextField required name='description' label="Event Description" multiline rows="4" size='small' variant="outlined" onChange={props.handleChange} />
        </div>
        <div className='create-event-form-field'>
          <Button variant="outlined" color='primary' onClick={props.addNewSpeaker}> Add info about speakers </Button>
        </div>
        <div className='create-event-form-field'>
          {
            props.speakers.map((item, index) => (
              <div className='create-event-nested-form-field' key={index}>
                <div className='nested-field-header'> Speaker <b>#{index + 1}</b> </div>
                <div className='create-event-nested-form-group'>
                  <TextField className='nested-form-input' inputProps={{'data-id': `${index}`}} name='fullName' size='small' label="Speaker Full Name" variant="outlined" onChange={props.handleSpeakersChange} />
                  <TextField className='nested-form-input' inputProps={{'data-id': `${index}`}} name='presentationTitle' size='small' label="Presentation Title" variant="outlined" onChange={props.handleSpeakersChange} />
                </div>
                <div className='create-event-nested-form-group'>
                  <TextField className='nested-form-input' inputProps={{'data-id': `${index}`}} name='from' size='small' label="From what place speaker is?" variant="outlined" onChange={props.handleSpeakersChange} />
                  <TextField className='nested-form-input' inputProps={{'data-id': `${index}`}} name='company' size='small' label="From what company speaker is?" variant="outlined" onChange={props.handleSpeakersChange} />
                </div>
              </div>
            ))
          }
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
