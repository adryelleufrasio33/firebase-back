import {initializeApp} from 'firebase/app';
import {getFirestore , getDocs, collection} from 'firebase/firestore';
import { useEffect, useState } from 'react';

const firebaseapp = initializeApp( {
  apiKey: "AIzaSyBGzvMEvQ3jJGhu0rJKVrj0fJJA7rZ4dNU",
  authDomain: "smartclamps-efdd9.firebaseapp.com",
  projectId: "smartclamps-efdd9",
  
});




export const App = () => {
   const[name,setName] = useState("")
   const[email, setEmail] = useState("")
   const[users, setUsers] = useState([])

   const db = getFirestore(firebaseapp)
   const userCollectionRef = collection(db,"users")

   useEffect(() => {
   
  const getUsers = async () =>{

    const data = await getDocs(userCollectionRef)

    console.log(data);

  };
  getUsers();

   }  )


  return <h1>Hello world</h1>
}