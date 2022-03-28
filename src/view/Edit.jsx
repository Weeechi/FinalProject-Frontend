import axios from 'axios';
import React, {useState} from 'react'


export default function Edit(getWorkouts, workouts, handleDelete, props) {

  let emptyWorkout = {id: props.id, lift: '', weight: '', reps: '', sets: '', pr: false  }

  const [workout, setWorkout] = useState(emptyWorkout)

  const handleUpdate = (editWorkout) => {
    console.log(editWorkout);
    axios
        .put('http://localhost:3000/lift' + editWorkout._id, editWorkout)
        .then((response) =>{
          getWorkouts()
        })
  }

  const handleChange =(event) =>{
    const {name, value, type, checked} = event.target
    setWorkout(prevWorkout => {
        return {
        ...prevWorkout,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(workouts)
  }


  return (
    <>
   <form onSubmit={handleSubmit}>
            <label htmlFor='lift'>Lift:</label>
            <input type='text' name='lift' onChange={handleChange}/>
            <br />
            <label htmlFor='weight'>Weight:</label>
            <input type='number' name='weight' onChange={handleChange}/>
            <br />
            <label htmlFor='reps'>Reps:</label>
            <input type='number' name='reps' onChange={handleChange}/>
            <br />
            <label htmlFor='sets'>Sets:</label>
            <input type='number' name='sets' onChange={handleChange}/>
            <br />
            <label htmlFor='pr'>PR:</label>
            <input type='checkbox' name='pr' checked={workout.pr} onChange={handleChange}/>
            <input type="submit" />

        </form>
    </>

  )
}

