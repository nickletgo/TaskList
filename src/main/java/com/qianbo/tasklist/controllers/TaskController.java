package com.qianbo.tasklist.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
}
