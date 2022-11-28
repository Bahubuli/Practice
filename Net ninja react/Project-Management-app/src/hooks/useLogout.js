import {useState, useEffect} from 'react';
import { projectAuth ,projectFirestore} from '../firebase/config';
import { useAuthContext } from './useAuthContext';

// in the component we are trying to do something
// that is trying to logout waiting for backend to
// actually logout and then do changes in state in that page
// but we are on different page so can't change states on that page
// but if we unmount the component in between the process
// then our cleanup function fires
// where we set isCancelled as true and we put
// consition for changing the state this condition
//


export const useLogout = () =>{

    const [isCancelled, setIsCancelled] = useState(false);
    const [error,setError] = useState(null);
    const [IsPending,setIsPending] = useState(false);
    const {dispatch,user} = useAuthContext();

    const logout = async ()=>{
        setError(null);
        setIsPending(true);

    try {

        const {uid} = user;
        await projectFirestore.collection("users").doc(uid).update({
            online:false
        })
        
        //before signout we need to change
        // use document status
        await projectAuth.signOut();
        // dispatch logout action
        dispatch({type:'LOGOUT'})

        if(!isCancelled)
        {
            setIsPending(false);
            setError(null);
        }

    } catch (err) {
        if(!isCancelled)
        {
            console.log(err.message)
            setError(err.message);
            setIsPending(false);
        }
    }
}
useEffect(()=>{
    return ()=>{
        setIsCancelled(true);
    }
},[])

    return {logout}
}
