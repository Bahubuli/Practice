import {createContext, useReducer,useEffect} from 'react'
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

export const authReducer = (state,action)=>{

    switch(action.type)
    {
        case 'LOGIN':
            return {...state, user:action.payload}
        case 'LOGOUT':
            return {...state,user:null};
        case 'AUTH_IS_READY':
            return {...state, user:action.payload,authIsReady:true}
        default:
            return state;
    }
}

export const AuthContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(authReducer,{
        user:null,
        authIsReady:false
    })
// now this function will fire everytime there is some
// authentication state change
// but firebase does not have any removeEventListener
// like function but it returns a function that do the
// same work

    useEffect(()=>{
        const unsub = projectAuth.onAuthStateChanged((user)=>{
            dispatch({type:'AUTH_IS_READY',payload:user})
            unsub();
        })


    },[])

    return (
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children};
        </AuthContext.Provider>
    )
}


/*
why we are calling function inside function discussion
----------
onAuthStateChanged takes a function as it's only argument. That function is the one that will be invoked whenever the auth state changes. So the code

function printHelloWorld() {
    console.log("Hello World")
}

firebase.auth().onAuthStateChanged(printHelloWorld)
Will print "Hello World" to the console, any time the auth state changes. But, at some later time, we want to stop that function from executing anymore, because we've already done whatever we need to. If you're familiar with event listeners, they use a pattern where to remove one, you would call something like removeEventListener. But firebase does not have a offAuthStateChanged or some such. Instead the onAuthStateChanged function returns a function to you that unsubscribes the function you originally gave it. To be clear, it does not return your original function (the one you gave it, so printHelloWorld in this example), but returns you a new function that can be used to remove the original.

So going back to the example:

function printHelloWorld() {
    console.log("Hello World")
}

var unsubscribe = firebase.auth().onAuthStateChanged(printHelloWorld)

// ... Sometime later when we are no longer interested in auth changes
unsubscribe();
// From this point forward, when the auth state changes, printHelloWorld will no longer be triggered.
Finally, suppose that you only want to have a function run on auth changes, but only one time. The simplest way to do that would be to have it run once, then unsubscribe it. So the code:

var unsubscribe = firebase.auth().onAuthStateChanged(() => {
    console.log("Hello World")
    unsubscribe()
})
means that the first time auth state changes, we will log the string, then immediately unsubscribe from further changes. So by calling the unsubscribe from within the function itself, we are just saying, run one time, then remove yourself.

Also, note that you can call unsubscribe at the beginning or end of the function, it doesn't matter. The entire function body will execute, just like any other. So calling unsubscribe won't halt the execution of the remainder of the function, or anything like that.

This is why things like

var unsubscribe = firebase.auth().onAuthStateChanged(() => {
    unsubscribe()
    // Lots of other code here...
});
is such a common pattern.
*/
