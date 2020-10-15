import React, { useState } from 'react';
import styled from 'styled-components';
import TaskDetails from './TaskDetails'

// Component used to represent the cards inside the corresponding columns.
const Task = styled.div`
    background-color: white;
    padding: 0.3rem 0.5rem;
    margin: 1rem 0rem;
    border-radius: 0.5rem;
    border-bottom: 1px solid lightgray;
    &:hover {
        background-color: #dedede;
    }
`

const Tasks = ({ tasks, columnName, editTask }) => {
    // Definition of variables and functions to set them that are going to be used as local state.
    const [show, setShow] = useState(false);
    const [currTask, setCurrTask] = useState('');
    const [currIndex, setCurrIndex] = useState(-1);

    // Arrow function to store the selected task in the local state;
    const setTask = (task, index) => {
        setCurrTask(task);
        setCurrIndex(index);
    }

    // Arrow function to handle the showing and hiding of a task's specific details.
    const showModal = () => setShow(!show);

    // Tasks filtered by status.
    const filtered_Taks = tasks.filter(task => task.status === columnName);

    return (
        <div>
            {/* Map function used to bind each element in the status with a card in the UI. */}
            {filtered_Taks.map((value) => (
                <div key={value.index}>
                    <Task onClick={() => { showModal(); setTask(value, value.index) }}>{value.name}</Task>
                </div>
            ))}

            {/* Detailed view */}
            { show && <TaskDetails index={currIndex} task={currTask} show={show} showModal={showModal} editTask={editTask}></TaskDetails> }
        </div>
    )
}

export default Tasks;