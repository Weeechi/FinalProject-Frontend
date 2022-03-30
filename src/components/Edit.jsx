import axios from 'axios';
import React, {useState} from 'react'
import { 
    Button,
    Input,
    InputNumber,
    Space
} from 'antd';


export default function Edit(getWorkouts, workouts, handleDelete, props) {

  let emptyWorkout = { lift: '', weight: '', reps: '', sets: '', pr: false  }

  const [workout, setWorkout] = useState(emptyWorkout)


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
        <details>
            <summary>Edit Lift</summary>
          <form onSubmit={handleSubmit}>
            <label htmlFor='lift'>Lift:</label>
            <Input 
            className='form'
            size='small'
            placeholder='Bench'
            type='text' 
            name='lift' 
            onChange={handleChange}/>
            <br />
            <label htmlFor='weight'>Weight:</label>
            <Input 
            className='form'
            size='small'
            placeholder='225'
            type='number' 
            name='weight' 
            onChange={handleChange}/>
            <br />
            <label htmlFor='reps'>Reps:</label>
            <Input 
            className='form'
            size='small'
            placeholder='10'
            type='number' 
            name='reps' 
            onChange={handleChange}/>
            <br />
            <label htmlFor='sets'>Sets:</label>
            <br />
            <label htmlFor='pr'>PR:</label>
            <Input 
            type='checkbox'
             name='pr' 
             checked={workout.pr}
             onChange={handleChange}/>
            <br />

            <input type="submit" />
          </form>
        </details>
    </>

  )
}

