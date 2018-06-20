package com.qianbo.tasklist.controller;

import static org.junit.Assert.assertEquals;

import java.net.URL;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.qianbo.tasklist.model.Task;
import com.qianbo.tasklist.model.TaskRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TaskControllerTest {
	@LocalServerPort
    private int port;

    private URL base;
    private static boolean hasSetUp = false;
    
    static private String id;
    private String taskId = "TEST-0";
    private String taskName = "Unit Test";
    private String assignee = "auto";
    private int priority = 10;
    private int effort = 0;
    

    @Autowired
    private TestRestTemplate template;
    
    @Autowired
    private TaskRepository repository;

    @Before
    public void setUp() throws Exception {
    	this.base = new URL("http://localhost:" + port + "/api");
    	if(hasSetUp) return;
        cleanup();
        id = addTask();
        hasSetUp = true;
    }

    public String addTask() throws Exception {
    	Task newTask = new Task(taskId, taskName, assignee, priority, effort);
    	ResponseEntity<String> response = template.postForEntity(base.toString() + "/tasks", newTask, String.class);
    	return response.getBody();
    }
    
    public void cleanup() throws Exception {
    	Task testTask = repository.findByTaskId(taskId);
    	if(testTask != null) {
    		repository.delete(testTask);
    	}
    }
    
    @Test
    public void testGetTask() throws Exception {
    	ResponseEntity<Task> response = template.getForEntity(base.toString() + "/tasks/" + id, Task.class);
    	assertEquals(response.getBody().getId(), id);
    }

    @Test
    public void testTasks() throws Exception {
        ResponseEntity<String> response = template.getForEntity(base.toString() + "/tasks",
                String.class);
        
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
    
    //@Test
//    public void testUpdateTask() throws Exception {
//    	Task task = template.getForEntity(base.toString()+ "/task", responseType)
//    	ResponseEntity<String> response = template.postForEntity(base.toString() + "/tasks", newTask, String.class);
//    	assertEquals(response.getStatusCode(), HttpStatus.OK);
//    	assert(ObjectId.isValid(response.getBody()));
//    }
}
