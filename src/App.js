import React, { useState, useEffect } from 'react'


function App() {

  let [workouts, setWorkouts] =useState([])

  const getWorkouts = () => {
    axios
      .get('http://localhost:8000/lift')
      .then(
        (response) => setPeople(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
   }

   useEffect(() => {
    getWorkouts()
   }, [])

  return (
    <>
      <h1>App</h1>
    </>
  
  );
}

export default App;
