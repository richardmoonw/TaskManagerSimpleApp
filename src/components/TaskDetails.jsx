import React from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';

const TaskDetails = ({task, show, showModal, index, editTask}) => {

    const submitForm = (event) => {
        // Prevent the page reloading when the form is submitted.
        event.preventDefault();

        // Get the values from all the inputs of the form.
        const name = event.target[0].value;
        const status = event.target[1].value;
        const description = event.target[2].value;
        const startDate = event.target[3].value;
        var endDate = '', creator = '', supervisor = '';

        // If the status is different from 'To Do' retrieve the end date, creator and supervisor 
        // values from the form.
        if (task.status !== "To Do") {
            endDate = event.target[4].value;
            creator = event.target[5].value;
            supervisor = event.target[6].value;
        }
        // If the status is 'To Do', only retrive the creator value from the form.
        else if (task.status === "To Do") {
            creator = event.target[4].value;
        }

        // Create a object to store all the values retrived and send them to update the status.
        var updatedTask = {
            index: index,
            name: name,
            status: status,
            description: description,
            startDate: startDate,
            endDate: endDate,
            creator: creator,
            supervisor: supervisor
        }

        // Call the function to edit the main status and hide the modal.
        editTask(index, updatedTask);
        showModal();
    }

    return (
        <Modal show={show} onHide={showModal}>
            <Modal.Header closeButton>
                <Modal.Title>{task.name} details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitForm}>
                    <Row>
                        <Col lg="6">
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={task.name} />
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group>
                                <Form.Label>Status</Form.Label>
                                <Form.Control as="select" defaultValue={task.status} >
                                    <option>To Do</option>
                                    <option>Doing</option>
                                    <option>Done</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" defaultValue={task.description} />
                    </Form.Group>
                    
                    <Row>
                        <Col lg="6">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" defaultValue={task.startDate} />
                        </Col>
                        { task.status !== "To Do" &&
                            <Col lg="6">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date" defaultValue={task.endDate} />
                            </Col>
                        }
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Form.Group>
                                <Form.Label>Creator</Form.Label>
                                <Form.Control type="text" defaultValue={task.creator} />
                            </Form.Group>
                        </Col>
                        { task.status !== "To Do" && 
                           <Col lg="6">
                                <Form.Group>
                                    <Form.Label>Person in charge</Form.Label>
                                    <Form.Control type="text" defaultValue={task.supervisor} />
                                </Form.Group>
                           </Col> 
                        }
                    </Row>
                    <Button variant="primary" type="submit">Done</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default TaskDetails;