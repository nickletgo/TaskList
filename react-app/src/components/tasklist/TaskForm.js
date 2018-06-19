import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, Col, FormControl, Button} from 'react-bootstrap/lib';
import axios from 'axios';
import DatePicker from 'react-date-picker';

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
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount(){
        if(this.isUpdate) {
            axios.get(this.apiUrl).then((res) => {
                this.setState({task:res.data});
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(this.apiUrl, this.state.task).then(() => {
            this.props.history.push('/');
        }); 
    }

    handleDateChange(date) {
        var task = this.state.task;
        task.dueOn = date;
        this.setState({task : task});
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
                    <FormControl  align="left" name="priority" componentClass="select" value={this.state.task.priority} onChange={this.handleChange}>
                            <option default value="0">High</option>
                            <option value="1">Medium</option>
                            <option value="2">Low</option>
                        </FormControl>
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

                { this.isUpdate ? 
                    <FormGroup controlId="status">
                        <Col componentClass={ControlLabel} sm={2}>
                        Status
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                        <FormControl  align="left" name="status" componentClass="select" value={this.state.task.status || 0} onChange={this.handleChange}>
                            <option default value="0">Open</option>
                            <option value="1">In Progress</option>
                            <option value="2">Closed</option>
                        </FormControl>
                        </Col>
                    </FormGroup> : null
                }
                { this.isUpdate ?
                    <FormGroup controlId="createOn">
                        <Col componentClass={ControlLabel} sm={2}>
                        Created On
                        </Col>
                        <Col  align="left" componentClass={ControlLabel} sm={10}>
                        <DatePicker
                            name="createdOn"
                            value={this.state.task.createdOn ? new Date(this.state.task.createdOn) : null}
                            disabled
                        />
                        </Col>
                    </FormGroup> : null
                }
                { this.isUpdate ? 
                    <FormGroup controlId="creator">
                        <Col componentClass={ControlLabel} sm={2}>
                        Created By
                        </Col>
                        <Col align="left" componentClass={ControlLabel} sm={10}>
                        {this.state.task.creator}
                        </Col>
                    </FormGroup> : null
                }
                
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