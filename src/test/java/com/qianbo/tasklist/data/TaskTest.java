package com.qianbo.tasklist.data;

import static org.assertj.core.api.Assertions.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {SpringMongoConfiguration.class})
public class TaskTest {
	
	@Autowired
	TaskRepository repository;
    
	@Before
    public void setUp() {
		repository.deleteAll();
    }
	
	@Test
	public void createTask() {
		Task newTask = new Task("DataTask-1", "John Smith", 1, 2);
		Task savedTask = repository.save(newTask);
		assertThat(savedTask.id).isNotNull();
	}
}
