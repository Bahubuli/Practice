import { useState } from 'react';
import './NewEventForm.css';



export default function NewEventForm({ addEvent }) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState("menchester");

    const resetForm = () => {
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {

            title: title,
            date: date,
            id: Math.floor(Math.random() * 10000),
            location:location
        }

        //console.log(event);
        addEvent(event)
        resetForm();

     }

  return (
      <form className="new-event-form" onSubmit={handleSubmit}>

          <label>
              <span>Event Title: </span>
              <input type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
              />
          </label>
          <label>
              <span>Event Date: </span>
              <input type="date"
                  onChange={(e) => setDate(e.target.value)}
              value={date}/>
          </label>

          <label>
              <span>
                  Event Location:
              </span>
              <select onChange={ (e) => setLocation(e.target.value)}>

                  <option value="menchester">Manchester</option>
                  <option value="menchester">United</option>
                  <option value="menchester">Gogoagone</option>
              </select>
          </label>

          <button>Submit</button>


     </form>
  )
}
