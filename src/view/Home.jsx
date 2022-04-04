import React from 'react';
import Add from '../components/Add';
import Edit from '../components/Edit';
import {} from 'antd/dist/antd.css';
import { 
    DeleteOutlined,
} from '@ant-design/icons';

import { 
    BackTop,
    Button,
    Card
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

const Home = ({handleCreate, workouts, handleUpdate, handleDelete}) => {
    return (
        <>
        <center><h1 className='sub'>Log All Your Strongest Lifts</h1>
        <Add className='add' handleCreate={handleCreate}/>
        <br />
        </center>
        <div className='workouts'>
            {workouts.map((workout) => {
                console.log(workout);
                return(
                    <div className='site-card-border-less-wrapper' key={workout.id}>
                      <Card className='card' bordered={true} style={{ width: 200 }}>
                    <center> <p>{workout.lift}</p>  
                    <p>Weight: {workout.weight}</p>  
                    <p>Reps: {workout.reps}</p>  
                    <p>PR: {workout.pr.toString()}</p> 
                   
                   
                   <Edit handleUpdate={handleUpdate} 
                   id={workout._id} />
                    <br />
                    <Button
                        type='primary' 
                        onClick={ () => {handleDelete(workout)}} 
                        value={workout._id}
                        icon={<DeleteOutlined/>}
                        shape='round' 
                        danger>
                        Delete
                    </Button>
                    </center>
                    </Card></div>
                )
            })}
        

    <BackTop />

        </div>
        </>
    );
}

export default Home;


