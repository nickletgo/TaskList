package com.qianbo.tasklist.data;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
	public Task findByTaskId(String taskId);
	public List<Task> findAll();
}
