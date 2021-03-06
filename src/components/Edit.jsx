import React, {useState} from 'react'
import { 
    Input
} from 'antd';


export default function Edit(props) {

  let emptyWorkout = { id: props.id, lift: '', weight: '', reps: '', sets: '', pr: false  }

  const [workout, setWorkout] = useState(emptyWorkout)

// console.log(props.id);

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
    props.handleUpdate(workout)
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
                value={workout.lift}
                name='lift' 
                onChange={handleChange}/>
            <br />
            <label htmlFor='weight'>Weight:</label>
            <Input 
                className='form'
                size='small'
                placeholder='225'
                type='number' 
                value={workout.weight}
                name='weight' 
                onChange={handleChange}/>
            <br />
            <label htmlFor='reps'>Reps:</label>
            <Input 
                className='form'
                size='small'
                placeholder='10'
                value={workout.reps}
                type='number' 
                name='reps' 
                onChange={handleChange}/>

            <br />
            <label htmlFor='pr'>PR:</label> <Input 
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

