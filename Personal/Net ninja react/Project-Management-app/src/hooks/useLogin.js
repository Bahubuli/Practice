import {useState, useEffect} from 'react';
import { projectAuth,projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

// in the component we are trying to do something
// that is trying to logout waiting for backend to
// actually logout and then do changes
// but if we unmount the component in between the process
// then our cleanup function fires
// where we set isCancelled as true and we put
// consition for changing the state this condition
//


export const useLogin = () =>{

    const [isCancelled, setIsCancelled] = useState(false);
    const [error,setError] = useState(null);
    const [IsPending,setIsPending] = useState(false);
    const {dispatch,user} = useAuthContext();

    const login = async (email,password)=>{
        setError(null);
        setIsPending(true);

    try {
        const res =  await projectAuth.signInWithEmailAndPassword(email,password);

        // dispatch login action
        dispatch({type:'LOGIN',payload:res.user})

        const uid = res.user.uid;

        await projectFirestore.collection("users").doc(uid).update({
            online:true
        })

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

    return {login,error,IsPending}
}
