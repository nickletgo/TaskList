package com.qianbo.tasklist.model;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String>, TaskRepositoryCustom {
	public Task findByTaskId(String taskId);
	public List<Task> findAll();
}
