import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { 
    DeleteOutlined,
    EditOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { 
    Button,
    Input
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
            [name]: type === 'checkbox' ? 'Yes' : 'No'
          }
        })
    }

    console.log(props);
    

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
                onChange={handleChange}/>
            <br />

            <label 
                htmlFor='weight'>
                Weight:
            </label>
            <Input 
                className='form'
                size='small'
                placeholder='225 Lbs'
                type='number' 
                name='weight' 
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
