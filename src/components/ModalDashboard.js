import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from './Agenda'

function ModalDashboard(props) {
   
    //state
    const [show, setShow] = useState(false);

    //handlers
 

        function showModal(){
            setShow(true)
            console.log(props.selectedEvent);
            console.log(props.selectedEvent.start)
            console.log(props.selectedEvent.end);
            console.log(
							`Start Day: ${props.selectedEvent.start.getMonth()}/${props.selectedEvent.start.getDay()}/${props.selectedEvent.start.getYear()}`
						);
            console.log(props.selectedEvent.end.getDay());
    
        };
    
        function hideModal(){
            setShow(false)
        };
   


  return(
      <>
      <h1>Open Model button</h1>
      <Agenda show={show} hideModal={hideModal} startDateAndTime={props.selectedEvent.start} endDateAndTime={props.selectedEvent.end} title={props.selectedEvent.title} jobDescription={props.selectedEvent.jobDescription}  />
      <button type='button' onClick={showModal}>Open Here</button>
      </>
  );
}

export default ModalDashboard;
