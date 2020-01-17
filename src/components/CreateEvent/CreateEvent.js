import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CreateEventForm from "./CreateEventForm/CreateEventForm";
import { openErrorSnackBar, openSuccessSnackBar } from "../../redux/actions";
import { useDispatch } from "react-redux";

const CreateEvent = (props) => {
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

  useEffect(() => {
    setIsConfirmDisabled(checkProperties(eventData))
  }, [eventData]);

  const checkProperties = (obj) => {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === '')
        return true;
    }
    return false;
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    axios.post(`/api/events`, eventData)
      .then(response => {
        history.goBack();
        dispatch(openSuccessSnackBar('Successfully added'));
      })
      .catch(error => {
        dispatch(openErrorSnackBar(error.response.data.message));
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    let {name, value } = event.target;

    setEventData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  };

  const handleCancel = (event) => {
    event.preventDefault();

    history.goBack();
  };

  const handleStartDateChange = (value) => {
    setStartDate(value);
    setEventData(prevState => {
      return {
        ...prevState,
        start: value
      }
    });
  };

  const handleEndDateChange = (value) => {
    setEndDate(value);
    setEventData(prevState => {
      return {
        ...prevState,
        end: value
      }
    });
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
        date={{start: startDate, end: endDate}}
        isConfirmDisabled={isConfirmDisabled}
      />
    </div>
  );
};

export default CreateEvent;
