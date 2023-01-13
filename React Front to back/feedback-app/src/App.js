import './index.css'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid';
import AboutPage from '../src/pages/AboutPage'
import AboutIcon from './components/AboutIcon';


import { useContext } from 'react';

import FeedbackContext from './context/FeedbackContext';
import { FeedbackProvider } from './context/FeedbackContext';

import {BrowserRouter, Link, Routes, Route, Navigate} from 'react-router-dom'

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
        <FeedbackProvider>
        <>
        <BrowserRouter>

                <Header text = "aaja aaja"/>
                <div className = "container">
                <Routes>
                    <Route exact path = '/' element = {
                        <>

                        <FeedbackForm handleAdd = {addFeedback}/>
                        <FeedbackStats feedback = {feedback}/>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                        </>
                    } />

                    <Route path ='/about' element = {<AboutPage/>}/>
                </Routes>

                <AboutIcon/>
                </div>

        </BrowserRouter>
        </>
        </FeedbackProvider>
    )
}

export default App;
