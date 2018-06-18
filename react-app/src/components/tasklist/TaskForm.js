import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, Col, FormControl, Button} from 'react-bootstrap/lib';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: {}};
        this.isUpdate = this.props.location && this.props.location.state && this.props.location.state.update;
        if(this.isUpdate) {
            this.id = this.props.match.params.id;
            this.apiUrl = `/api/tasks/${this.id}`;
        } else{
            this.apiUrl = '/api/tasks';
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(this.isUpdate) {
            axios.get(this.apiUrl).then((res) => {
                this.setState({task:res.data});
            });
        }
    }

    handleSubmit(event) {
        console.log(this.apiUrl);
        console.log(this.state.task);
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
                    <FormControl type="text" placeholder="Task ID" value={this.state.task.taskId || ''} name='taskId' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="taskName">
                    <Col componentClass={ControlLabel} sm={2}>
                    Task Name
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" placeholder="Task Name" name='taskName' value={this.state.task.taskName || ''} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="description">
                    <Col componentClass={ControlLabel} sm={2}>
                    Description
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="textarea" placeholder="Write the description of this task here" value={this.state.task.description || ''} name='description' onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="priority">
                    <Col componentClass={ControlLabel} sm={2}>
                    Priority
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='priority' value={this.state.task.priority || ''} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="effort">
                    <Col componentClass={ControlLabel} sm={2}>
                    Effort
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='effort' value={this.state.task.effort || ''} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="assignee">
                    <Col componentClass={ControlLabel} sm={2}>
                    Assign To
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='assignee' value={this.state.task.assignee || ''} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="dueDate">
                    <Col componentClass={ControlLabel} sm={2}>
                    Due on
                    </Col>
                    <Col componentClass={ControlLabel} sm={10}>
                    <FormControl type="text" name='dueOn' value={this.state.task.dueOn || ''} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} smOffset={2}>
                    <Button type="submit" bsStyle="primary"  onClick={this.handleSubmit}>{this.isUpdate ? 'Update' : 'Create'}</Button>
                    </Col>
                    <Col componentClass={ControlLabel} smOffset={4}>
                    <Button type="button" bsStyle="link"  href="/">Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default TaskForm;