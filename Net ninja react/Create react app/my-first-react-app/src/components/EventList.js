import React from 'react'

import styles from './EventList.module.css';

export default function eventList({events, handleClick}) {
  return (
      <div>
       {    events.map((event) => (
           <div key={event.id} className={styles.card}>
               <h2>{event.title}</h2>
               <p>{event.location}</p>
                  <button onClick={() => handleClick(event.id)}>
                      delete event
                  </button>
              </div>
          ))}



    </div>
  )
}
