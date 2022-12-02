/* 1. Error: It looks like you haven't used Cloud Firestore in this project before.
 Go to https://console.firebase.google.com/project/projectmanagement-c19c5/firestore
 to create your Cloud Firestore database.

you need to go into Firebase project settings and set
 "Default GCP resource location".
Just click on the pen and then "done".

-------------------------------------------------------

2. npm start and npm build error

"start": "react-scripts start"
to

"start": "react-scripts --openssl-legacy-provider start"


--------------------------------------------------------

3. signup button stuck at loading while signup process is done

reason :-
        {isPending && <button className = "btn" disabled>Loading</button>}
        {!isPending && <button className = "btn">Signup</button>}

        order should be swaped



----------------------------------------------------------

4. JSX expression should have at least one parent element
 */
