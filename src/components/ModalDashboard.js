import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from './Agenda'

function ModalDashboard(props) {
   
    //state
    const [show, setShow] = useState(false);

    //handlers
    function showModal(){
        setShow(true)
        console.log(props.selectedEvent)
    };

    function hideModal(){
        setShow(false)
    };


  return(
      <>
      <h1>Open Model button</h1>
      <Agenda show={show} hideModal={hideModal} props={props}/>
      <button type='button' onClick={showModal}>Open Here</button>
      </>
  );
}

export default ModalDashboard;
