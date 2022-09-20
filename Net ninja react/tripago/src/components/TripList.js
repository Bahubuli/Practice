import React from 'react'
import { useState, useEffect, useCallback } from "react"
import { useFetch } from '../Hooks/useFetch'

//styles
import './TripList.css'

export default function TripList() {

    // this url is side effect, outside of the component
    // whenever we use useState our component rerender
    // and jb jb component rerender hota h
    // useEffect run hoga
    // infinite loop because javascript create differece
    // reference of a function each time it called
    // even though the mal inside the function is same
    // but still the referece location is changed


    const [url, setUrl] = useState("http://localhost:3000/trips");

    const { data, isPending, error } = useFetch(url, {type: 'GET'});

    // const fetchTrips = useCallback(async () => {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     setTrips(json);
    // },[url])


    // useEffect(() => {

    //    fetchTrips()

    //  }, [fetchTrips])




    console.log(data);


  return (
      <div>
          <h2>TripList</h2>
          {isPending && <h1>Data is loading </h1>}
          {error && <p>There is some kind of error</p> }
          <ul>
              {data && data.map(trip =>
              (<li key={trip.id}  >
                  <h3>{trip.title}</h3>
                  <p>{trip.price}</p>
              </li>))}
          </ul>

          <div className="filters">
              <button onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}>
                  European Trips
              </button>
              <button onClick={ ()=> setUrl("http://localhost:3000/trips")}>
                  All Trips
              </button>
          </div>
      </div>
  )
}
