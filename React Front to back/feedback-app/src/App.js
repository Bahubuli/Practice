import './index.css'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid';
function App()
{

    const [feedback , setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeeback)=>{
        newFeeback.id = uuidv4();
        setFeedback([newFeeback, ...feedback])
    }

    const  deleteFeedback = (id)=>{

        if(window.confirm('Are you sure you want to delete ?'))
        {
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    return(

        <>
        <Header text = "aaja aaja"/>
        <div className = "container">

            <FeedbackForm handleAdd = {addFeedback}/>
            <FeedbackStats feedback = {feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>

        </>
    )
}

export default App;
