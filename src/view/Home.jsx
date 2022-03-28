import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Add from '../components/Add';
import {input} from 'antd/dist/antd.css';
import { 
    DeleteOutlined,
    EditOutlined,
    UserOutlined
} from '@ant-design/icons';

import { 
    Button,
    Card,
} from 'antd';


const Home = ({handleCreate, workouts, handleDelete}) => {


    
    return (
        <div className='workouts'>
            {workouts.map((workout) => {
                return(
                    <div className='site-card-border-less-wrapper' key={workout.id}>
                     <Card title='Lift' bordered={true} style={{ width: 200 }}>
                    <h4>Lift: {workout.lift}</h4>  
                    <p>Reps: {workout.reps}</p>  
                    <p>PR: {workout.pr.toString()}</p> 
                   
                    <center>
                        <Button 
                        type='primary' 
                        shape='round' 
                        icon={<EditOutlined/>} 
                        link="/edit">
                        edit
                        </Button>
                    <br />
                    <Button
                        type='primary' 
                        onClick={handleDelete(workout)} 
                        icon={<DeleteOutlined/>}
                        shape='round' 
                        danger>
                        Delete
                        </Button></center>
                    </Card></div>
                )
            })}
        
            <Add handleCreate={handleCreate}/>
        
        </div>
    );
}

export default Home;
