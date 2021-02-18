
import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import Ayush from './ayush_pic.jpg'
import database from './firebase'
import './TinderCards.css'

function TinderCards() {
    const [direction,setDirection]=useState('')
    const [swiped,setSwiped]=useState(false)
    const [people,setPeople]=useState([{
        name:"Ayush Dubey",
        image:Ayush
    }])
        //UseEffect to Import all Firebase Data to the App.
        useEffect(() => {
           const unsubscribe=database.collection('people').onSnapshot((snapshot)=>
            setPeople(snapshot.docs.map((doc)=>doc.data()))
           )
           return ()=>{
               unsubscribe();
           }
         
        }, []);
        const onSwipe = (direction) => {
         
            if(direction==='right' || direction==='left'){
         
            setDirection(direction)
            setSwiped(true)
        }
       
    }
       
    return (
        <div>
         
            <div className="tinderCards_Container">
        {people.map((person)=>(
            <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={onSwipe}
            preventSwipe={['up','down']}>
                <div className="card"
                style={{backgroundImage:`url(${person.url})`}}>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        {!swiped?(
<>
</>
        ):(
            <>

        <h1 className="direction_tag">You swiped {direction}!</h1>
        </>
        )}
        </div>
        </div>
    )
}

export default TinderCards
