import {FaTimes,FaEdit} from 'react-icons/fa';

import PropTypes from 'prop-types';
import Card from './shared/Card';
//import FeedbackContext from '../context/FeedbackContext';



export default function FeedbackItem({item,handleDelete})
{

  return (
    <Card reverse = {true}>
        <div className = "num-display">{item.rating}</div>
        <button onClick = {()=>handleDelete(item.id)} className = "close">
            <FaTimes color = 'purple'/>
        </button>

        <button onClick = {()=>{}} className = "edit">
            <FaEdit color = "purple"/>
        </button>
        <div className = "text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes=
{
    item:PropTypes.object.isRequired
}
