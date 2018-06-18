import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, Col, FormControl, Button} from 'react-bootstrap/lib';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.apiUrl = '/api/tasks';
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post(this.apiUrl, this.state.task).then(() => {
            this.props.history.push('/');
        }); 
    }

    handleChange(e) {
        const target = e.target;
        var task = this.state.task;
        task[target.name] = target.value;
        this.setState({ task : task });
    }
    render(){
        return(
            <Form horizontal>
                <FormGroup controlId="taskId">
                    <Col componentClass={ControlLabel} sm={2}>
                    Task ID
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" placeholder="Task ID" name='taskId' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="taskName">
                    <Col componentClass={ControlLabel} sm={2}>
                    Task Name
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" placeholder="Task Name" name='taskName' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="description">
                    <Col componentClass={ControlLabel} sm={2}>
                    Description
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="textarea" placeholder="Write the description of this task here" name='description' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="priority">
                    <Col componentClass={ControlLabel} sm={2}>
                    Priority
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='priority' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="effort">
                    <Col componentClass={ControlLabel} sm={2}>
                    Effort
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='effort' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="assignee">
                    <Col componentClass={ControlLabel} sm={2}>
                    Assign To
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='assignee' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="dueDate">
                    <Col componentClass={ControlLabel} sm={2}>
                    Due on
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='dueOn' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} smOffset={2}>
                    <Button type="submit" bsStyle="primary"  onClick={this.handleSubmit}>Create</Button>
                    </Col>
                    <Col componentClass={ControlLabel} smOffset={4}>
                    <Button type="cancel" bsStyle="link"  href="/">Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default TaskForm;