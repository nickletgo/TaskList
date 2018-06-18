package com.qianbo.tasklist.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.qianbo.tasklist.data.Task;
import com.qianbo.tasklist.data.TaskRepository;

@RestController
public class TaskController {
	
	@Autowired
	TaskRepository repository;
	
	@RequestMapping(method=RequestMethod.GET, value="/tasks")
	public Iterable<Task> findAllTasks(){
		return repository.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/tasks")
	public String save(@RequestBody Task task) {
		Task newTask = repository.save(task);
		return newTask.id;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/tasks/{id}")
	public Task findById(@PathVariable("id") String id) {
		Task task = repository.findById(id).get();
		return task;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/tasks/search", params= "taskId")
	public Task findByTaskId(@RequestParam("taskId") String taskId) {
		Task task = repository.findByTaskId(taskId);
		return task;
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/tasks/{id}")
	public String update(@RequestBody Task task) {
		Task theTask = repository.save(task);
		return theTask.id;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/tasks/{id}")
	public ResponseEntity<Void> update(@PathVariable("id") String id) {
		Optional<Task> theTask = repository.findById(id);
		if (!theTask.isPresent()){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        repository.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
