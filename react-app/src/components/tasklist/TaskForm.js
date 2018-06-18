import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, Col, FormControl, Button} from 'react-bootstrap/lib';

class TaskForm extends Component {
    render(){
        return(
            <Form horizontal>
                <FormGroup controlId="taskId">
                    <Col componentClass={ControlLabel} sm={2}>
                    Task ID
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" placeholder="Task ID" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="taskName">
                    <Col componentClass={ControlLabel} sm={2}>
                    Task Name
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" placeholder="Task Name" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button type="submit">Create</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default TaskForm;