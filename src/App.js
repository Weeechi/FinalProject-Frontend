import Home from "./view/Home";
import Edit from "./view/Edit";
import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout";
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  let [workouts, setWorkouts] =useState([])

  const getWorkouts = () => {
    axios
      .get('http://localhost:3000/lift')
      .then(
        (response) => setWorkouts(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
   }

   const handleCreate = (addWorkout) => {
    axios
        .post('http://localhost:3000/lift', addWorkout)
        .then((response) => {
          console.log(response);
          getWorkouts()
        })
  }

  const handleDelete = (workout) => {
    axios 
        .delete(`http://localhost:3000/lift/${workout.id}`)
        .then((response) => {
          // getWorkouts()
        })
  }


   useEffect(() => {
    getWorkouts()
   }, [])

  return (
    <>
      <div>
        <Layout>
        <Routes>
            <Route path='/' element={<Home handleCreate={handleCreate} workouts={workouts} handleDelete={handleDelete}/>} />
            <Route path='/editLift/:id' element={<Edit getWorkouts={getWorkouts} workouts={workouts}/>} />
        </Routes>
        </Layout>
      </div>    </>
  
  );
}

export default App;
