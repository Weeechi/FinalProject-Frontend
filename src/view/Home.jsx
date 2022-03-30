import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Add from '../components/Add';
import Edit from '../components/Edit';
import {input} from 'antd/dist/antd.css';
import { 
    DeleteOutlined,
    EditOutlined,
    UserOutlined
} from '@ant-design/icons';

import { 
    Button,
    Card,
    Carousel,
} from 'antd';

// function onChange(a, b, c) {
//     console.log(a, b, c);
//   }
  
//   const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

const Home = ({handleCreate, workouts, handleDelete, handleUpdate}) => {
    return (
        <div className='workouts'>
            {workouts.map((workout) => {
                return(
                    <div className='site-card-border-less-wrapper' key={workout.id}>
                     <Card title='Lift' bordered={true} style={{ width: 200 }}>
                    <p>{workout.lift}</p>  
                    <p>Weight: {workout.weight}</p>  
                    <p>Reps: {workout.reps}</p>  
                    <p>PR: {workout.pr.toString()}</p> 
                   
                    <center>
                   <Edit handleUpdate={handleUpdate} id={workout.id} />
                    <br />
                    <Button
                        type='primary' 
                        onClick={handleDelete(workout)} 
                        icon={<DeleteOutlined/>}
                        shape='round' 
                        danger>
                        Delete
                    </Button>
                    </center>
                    </Card></div>
                )
            })}
        
            <Add handleCreate={handleCreate}/>
        
        </div>
    );
}

export default Home;
