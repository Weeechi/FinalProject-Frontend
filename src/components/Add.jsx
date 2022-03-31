import React, {useState} from 'react'
import { 
    Input,
} from 'antd';

export default function Add(props) {

    let emptyWorkout = {lift: '', weight: '', reps: '', sets: '', pr: false  }

    const [workout, setWorkout] = useState(emptyWorkout)

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setWorkout(prevWorkout => {
            return {
            ...prevWorkout,
            [name]: type === 'checkbox' ? checked : value,
          }
        })
    }

    // console.log(props);
    

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(workout)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
             <label htmlFor='lift'>Lift:</label>
            <Input 
                className='form'
                size='small'
                placeholder='Bench'
                type='text'
                name='lift' 
                value={workout.lift}
                onChange={handleChange}/>
            <br />

            <label 
                htmlFor='weight'>
                Weight:
            </label>

            <Input 
                className='form'
                size='small'
                placeholder='225'
                type='number' 
                name='weight' 
                value={workout.weight}
                onChange={handleChange}/>

            <br />
            <label 
                htmlFor='reps'>
                Reps:
                </label>
            <Input 
                className='form'
                size='small'
                placeholder='10'
                type='number' 
                name='reps' 
                value={workout.reps}
                onChange={handleChange}/>
            <br />
            <label
                htmlFor='pr'>
                PR:
                </label>
            <input 
                type='checkbox' 
                name='pr' 
                checked={workout.pr} 
                onChange={handleChange}/>
            <br />

            <input type="submit"/>
        </form>
    </>
  )
}
