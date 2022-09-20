import { useState, useEffect, useRef } from 'react';

// we are defining the function inside useEffect so we don't need to pass defendecly inside []
// this is not always possible to in those cases we need to do this as we did in the
// TripList component
export const useFetch = (url,_options) => {


    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const options = useRef(_options).current;

    useEffect(() => {

        console.log(options);
        const fetchData = async () =>
        {
            setIsPending(true);

            try
            {
                const res = await fetch(url);

                if (!res.ok)
                {
                    throw new Error(res.statusText);
                }

                const json = await res.json();

                setIsPending(false);
                setData(json);
                setError(null); // clearing the prev erros
            }

            catch (err)
            {
                setIsPending(false);
                setError('Could not fetch the data');
                console.log(err.message+ " is the error");

            }


        }

        fetchData();

    }, [url,options])

    // to handle this error in function we use useCallBack
    // but in case of objects and array use useRef
    // or wrap around using useRef
    

    return { data, isPending,error};
 }
