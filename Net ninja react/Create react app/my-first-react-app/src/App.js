import './App.css';

import './components/NewEventForm'

import React, { useState } from 'react'

import Title from './components/Title'

import Modal from './components/Modal'

import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {

    const [showModal, setShowModal] = useState(false);
    const [SalesModal, setSalesModal] = useState(false);
    const [HideModal, setHideModal] = useState(true);
    const [name, setName] = useState('Jitendra')
    const [showEvents, setShowEvents] = useState(true);
    const [events, setEvents] = useState([])



    const handleClose = () => {
        setShowModal(!showModal);
    }


    const addEvent = (event) => {
        setEvents((pEvents) => {
            return [...pEvents, event]
        })
        setShowModal(false);
     }

    const handleClick = (id) =>
    {
        // setEvents get prevEvent
        // then we apply filter
        // instead directly applying on set event
        // there might be other process that deleted
        // the event we want to handle and we can get
        // weired results
        setEvents((prevEvents) => {

            return prevEvents.filter((event) => {

                return id !== event.id;
             })
         })

     }
const subtitle = "All the latest  events"
  return (
      <div className="App">

          <Title title="Events in Your Area" subtitle={subtitle} />

          {
              showEvents &&  <div>
              <button onClick={() => setShowEvents(false)}>Hide events</button>
              </div>
          }
          {
               !showEvents && <div>
              <button onClick={() => setShowEvents(true)}>Show Events</button>
              </div>
          }

          {showEvents && <EventList events={events} handleClick={handleClick} />}


          {showModal && <Modal handleClose={handleClose} isSalesModal={ SalesModal}>

              <NewEventForm addEvent={addEvent} />

          </Modal>}

          {
              !showModal && <div>
                  <button onClick={() => handleClose() }>Add new Event</button>
              </div>
          }
    </div>
  );
}

export default App;
