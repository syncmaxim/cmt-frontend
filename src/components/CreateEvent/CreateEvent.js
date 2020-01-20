import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CreateEventForm from "./CreateEventForm/CreateEventForm";
import { openErrorSnackBar, openSuccessSnackBar } from "../../redux/actions";
import { useDispatch } from "react-redux";

const CreateEvent = props => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  useEffect(() => {
    setIsConfirmDisabled(checkProperties(eventData))
  }, [eventData]);

  const checkProperties = obj => {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === '')
        return true;
    }
    return false;
  };

  const checkDateIsValid = obj => !!(obj && (obj.start.getTime() < obj.end.getTime()) && (obj.start.getTime() > new Date().getTime()) && (obj.end.getTime() > new Date().getTime()));

  const handleConfirm = event => {
    event.preventDefault();

    if (checkDateIsValid(eventData)) {
      axios.post(`/api/events`, {...eventData, speakers})
        .then(response => {
          history.goBack();
          dispatch(openSuccessSnackBar('Successfully added'));
        })
        .catch(error => {
          dispatch(openErrorSnackBar(error.response.data.message));
        });
    } else {
      dispatch(openErrorSnackBar('Event start date and event end date is not valid'));
    }
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

    history.goBack();
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
      from: '',
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

  return (
    <div className='create-event-container'>
      <div className='component-header-one'> Create Event </div>
      <CreateEventForm
        handleConfirm={ handleConfirm }
        handleChange={ handleChange }
        handleCancel={ handleCancel }
        handleStartDateChange={ handleStartDateChange }
        handleEndDateChange={ handleEndDateChange }
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
