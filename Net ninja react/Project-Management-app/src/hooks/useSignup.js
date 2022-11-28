import {useState, useEffect} from 'react';
import { projectAuth ,projectStorage,projectFirestore} from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = ()=>{

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending,setIsPending] = useState(false);
    const {dispatch} = useAuthContext();
    const signup = async (email,password,displayName,thumbnail) =>{
        setError(null);
        setIsPending(true);

        try
        {
            //signup user
            const response = await projectAuth.createUserWithEmailAndPassword(email,password);


            if(!response)
            {
                throw new Error("Could not complete signup");
            }


            // generate folder and file path
            const uploadPath = `thumbnails/${response.user.uid}/${thumbnail.name}`

            // upload image
            const img = await projectStorage.ref(uploadPath).put(thumbnail);

            // get download url
            const imgURL = await img.ref.getDownloadURL();

            // add display picture and  name to user
            await response.user.updateProfile({displayName,photoURL:imgURL})


            // create a user document
            await projectFirestore.collection('users').doc(response.user.uid).set({
                online:true,
                displayName,
                photoURL:imgURL
            })

            // dispatch login action
            dispatch({type:'LOGIN', payload:response.user})

            if(!isCancelled)
            {
                setIsPending(false);
                setError(null);
            }

        }
        catch(err)
        {
            if(!isCancelled)
            {
                console.log(err.message);
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

    return {error, isPending, signup}
}
