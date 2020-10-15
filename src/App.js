import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TasksColumn from './components/TasksColumn';
import PageHeader from './components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  // Constructor to initialize the state and bind the functions.
  constructor(props) {
    super(props);
    this.state = {
      // An artificial index was required because the index provided by the map function was generating
      // a lot of issued.
      index: 0,
      tasks: []
    }

    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  // Function used to add any type of task (to do, doing or done).
  addTask(task) {
    let index = this.state.index;
    task.index = index;
    index = index + 1;
    this.setState(prevState => ({
      index: index,
      tasks: [...prevState.tasks, task]
    }));
  }

  // Function used to edit any task.
  editTask(index, updatedTask) {
    var tasks = this.state.tasks.slice();
    tasks[index] = updatedTask;
    this.setState({
      tasks
    });
  }

  render() {
    return (
      <>
        <PageHeader />
        <Container>
          {/* Different status columns */}
          <Row>

            {/* To Do column */}
            <Col>
              <TasksColumn columnName="To Do" tasks={this.state.tasks} addTask={this.addTask} editTask={this.editTask}/>
            </Col>

            {/* Doing column */}
            <Col lg="4">
              <TasksColumn columnName="Doing" tasks={this.state.tasks} addTask={this.addTask} editTask={this.editTask} />
            </Col>

            {/* Done column */}
            <Col lg="4">
              <TasksColumn columnName="Done" tasks={this.state.tasks} addTask={this.addTask} editTask={this.editTask} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
