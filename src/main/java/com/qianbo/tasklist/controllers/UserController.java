package com.qianbo.tasklist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qianbo.tasklist.model.User;
import com.qianbo.tasklist.model.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@RequestMapping(value="/users")
	public List<User> findAllUsers(){
		return repository.findAll();
	}

}
