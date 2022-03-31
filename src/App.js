import Home from "./view/Home";
import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout";
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  let [workouts, setWorkouts] =useState([])

  const getWorkouts = () => {
    axios
      .get('https://prpalbackend.herokuapp.com/lift/')
      .then(
        (response) => setWorkouts(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
   }

   const handleCreate = (addWorkout) => {
    axios
        .post('https://prpalbackend.herokuapp.com/lift', addWorkout)
        .then((response) => {
          console.log(response);
          getWorkouts()
        })
  }

  const handleDelete = (workout) => {
    axios 
        .delete('https://prpalbackend.herokuapp.com/lift/' + workout._id)
        .then((response) => {
          getWorkouts()
        })
  }

  const handleUpdate = (editWorkout) => {
    // console.log(editWorkout);
    axios
        .put('https://prpalbackend.herokuapp.com/lift/' + editWorkout.id, editWorkout)
        .then((response) =>{
          getWorkouts()
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
            <Route path='/' element={<Home handleCreate={handleCreate} workouts={workouts} handleUpdate={handleUpdate} handleDelete={handleDelete} />} />
        </Routes>
        </Layout>
      </div>    </>
  
  );
}

export default App;
