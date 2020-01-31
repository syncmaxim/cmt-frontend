import React, { useEffect, useState } from "react";
import { useLastLocation } from "react-router-last-location";
import CreateEventForm from "./CreateEventForm/CreateEventForm";
import { createEvent, openErrorSnackBar } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { checkProperties, checkDateIsValid } from "../../utils/helpers";

const CreateEvent = props => {
  const dispatch = useDispatch();
  const lastLocation = useLastLocation();
  let [startDate, setStartDate] = useState(null);
  let [endDate, setEndDate] = useState(null);
  let [eventData, setEventData] = useState({
    title: null,
    start: null,
    end: null,
    place: null,
    address: null,
    description: null
  });
  let [isConfirmDisabled, setIsConfirmDisabled] = useState(true);
  let [speakers, setSpeakers] = useState([]);
  let eventFormRef = React.createRef();

  useEffect(() => {
    setIsConfirmDisabled(checkProperties(eventData))
  }, [eventData]);


  const handleConfirm = event => {
    event.preventDefault();

    if (!checkDateIsValid(eventData)) {
      dispatch(openErrorSnackBar('Event start date and event end date is not valid'));
      return;
    }

    dispatch(createEvent({...eventData, speakers}, props));
  };

  const handleChange = event => {
    event.preventDefault();
    let { name, value } = event.target;

    setEventData(prevEventData => {
      return {
        ...prevEventData,
        [name]: value
      }
    })
  };

  const handleCancel = event => {
    event.preventDefault();
    if (lastLocation) {
      (lastLocation.pathname === '/registration' || lastLocation.pathname === '/login') ? props.history.push('/') : props.history.push(lastLocation.pathname);
    } else {
      props.history.push('/');
    }
  };

  const handleStartDateChange = value => {
    setStartDate(value);
    setEventData(prevEventData => {
      return {
        ...prevEventData,
        start: value
      }
    });
  };

  const handleEndDateChange = value => {
    setEndDate(value);
    setEventData(prevEventData => {
      return {
        ...prevEventData,
        end: value
      }
    });
  };

  const addNewSpeaker = event => {
    event.preventDefault();

    const speakerData = {
      fullName: '',
      presentationTitle: '',
      company: ''
    };

    setSpeakers((prevSpeakers => [...prevSpeakers, speakerData]))
  };

  const handleSpeakersChange = event => {
    let { name, value } = event.target;
    const _tempSpeakers = [...speakers];

    _tempSpeakers[event.target.dataset.id][name] = value;

    setSpeakers(_tempSpeakers);
  };

  const handleDeleteSpeaker = index => {
    const _tempSpeakers = [...speakers];
    _tempSpeakers.splice(index, 1);
    setSpeakers(_tempSpeakers);
  };

  return (
    <div className='create-event-container'>
      <div className='component-header-one'> Create Event </div>
      <CreateEventForm
        eventFormRef={eventFormRef}
        handleConfirm={ handleConfirm }
        handleChange={ handleChange }
        handleCancel={ handleCancel }
        handleStartDateChange={ handleStartDateChange }
        handleEndDateChange={ handleEndDateChange }
        handleDeleteSpeaker={ handleDeleteSpeaker }
        handleSpeakersChange={ handleSpeakersChange }
        addNewSpeaker={ addNewSpeaker }
        date={{start: startDate, end: endDate}}
        speakers={speakers}
        isConfirmDisabled={isConfirmDisabled}
      />
    </div>
  );
};

export default CreateEvent;
