package com.qianbo.tasklist.data;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.qianbo.tasklist.controllers.StatusTrackerProcessor;

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
	public void testCreateTask() {
		Task newTask = new Task("DataTask-1", "Data Test Task", "John Smith", 1, 2);
		Task savedTask = repository.save(newTask);
		assertThat(savedTask.getId()).isNotNull();
	}
	
	@Test
	public void testGetAssigneeStatus() {
		List<AssigneeStatus> assigneeList = repository.aggregateTaskByAssignee();
		List<TaskSummary> summary = StatusTrackerProcessor.processAssignee(assigneeList);
		assertThat(summary.size()).isNotNull();
	}
}
