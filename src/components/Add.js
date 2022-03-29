import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
    let emptyWorkout = {lift: '', weight: '', reps: '', sets: '', pr: false  }
    const [workout, setWorkout] = useState(emptyWorkout)
  return (
    <>
      <form>
      <label htmlFor='lift'>Lift:</label>
        <input type="text" name="lift" />
        <br />
        <br />
        <label htmlFor='weight'>Weight:</label>        
        <input type="number" name="weight" />
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add