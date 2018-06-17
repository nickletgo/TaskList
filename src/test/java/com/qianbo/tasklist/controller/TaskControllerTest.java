package com.qianbo.tasklist.controller;

import static org.junit.Assert.assertEquals;

import java.net.URL;

import org.bson.types.ObjectId;
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

import com.qianbo.tasklist.data.Task;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TaskControllerTest {
	@LocalServerPort
    private int port;

    private URL base;

    @Autowired
    private TestRestTemplate template;

    @Before
    public void setUp() throws Exception {
        this.base = new URL("http://localhost:" + port + "/");
    }

    
    public void testTasks() throws Exception {
        ResponseEntity<String> response = template.getForEntity(base.toString() + "/tasks",
                String.class);
        
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
    
    @Test
    public void testAddTask() throws Exception {
    	Task newTask = new Task("REST-2", "test", 9, 1);
    	ResponseEntity<String> response = template.postForEntity(base.toString() + "/tasks", newTask, String.class);
    	assertEquals(response.getStatusCode(), HttpStatus.OK);
    	assert(ObjectId.isValid(response.getBody()));
    }
}
