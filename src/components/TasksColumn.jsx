import React, { useState } from 'react';
import Tasks from './Tasks';
import styled from 'styled-components';
import { Form, Row, Col } from 'react-bootstrap';

// Component that contains all the tasks to be performed in a given category.
const TasksContainer = styled.div`
    border-radius: 0.5rem;
    background-color: #f1f1f1;
    padding: 1rem;
`;

// Component that display the name of the column.
const ColumnName = styled.p`
    font-weight: bold;
`;

// Button used to display a input to enter the name of a new task.
const SHButton = styled.button`
    padding: 0.4rem;
    border-radius: 0.5rem;
    background: none;
    width: 100%;
    border: none;
    text-align: left;
    transition-duration: 0.4s;
    &:hover {
        background-color: #dedede;
    }
`;

// Button used to add the specified new task.
const AddTaskButton = styled.button`
    padding: 0.4rem;
    border-radius: 0.5rem;
    background-color: #74cf83;
    width: 100%;
    border: none;
    text-align: center;
    font-weight: bold;
    color: white;
    transition-duration: 0.4s;
    &:hover {
        background-color: #86eb96;
    }
`;

const TasksColumn = ({ columnName, tasks, addTask, editTask }) => {

    // Property used to handle the name of a new task and
    // Property used to show/hide the input to type the name of a new task.
    const [newTask, setNewTask] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState(true);
    
    // Function in charge of adding a new task.
    const submitForm = (event) => {
        event.preventDefault();
        var new_Task = {
            name: event.target[0].value,
            status: columnName
        }
        addTask(new_Task);
        event.target[0].value = '';
    }

    return (
        <>
            <TasksContainer>
                <ColumnName>{columnName}</ColumnName>
                <Tasks tasks={tasks} columnName={columnName} editTask={editTask} />

                {/* If the buttonDisplay property is true, then show the button 'Add a task' */}
                { buttonDisplay && 
                    <SHButton onClick={() => { setNewTask(true); setButtonDisplay(false); }}>Add a task</SHButton>
                }

                {/* If the newTask property is true, then show the form to create a new task. The 
                    Form will call the submitForm() function once it is submitted. */}
                {newTask && 
                    <Form onSubmit={submitForm}>  
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter the title for this card" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="5">
                                <AddTaskButton type="submit">Add Card</AddTaskButton>
                            </Col>
                            <Col lg="2">
                                <SHButton onClick={() => { setNewTask(false); setButtonDisplay(true); }}>X</SHButton>
                            </Col>
                        </Row>
                        
                    </Form>
                }
            </TasksContainer>
        </>
    )
}

export default TasksColumn;