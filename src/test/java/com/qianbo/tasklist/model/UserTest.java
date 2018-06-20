package com.qianbo.tasklist.model;

import static org.assertj.core.api.Assertions.assertThat;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {SpringMongoConfiguration.class})
public class UserTest {
	
	@Autowired
	UserRepository repository;
    
	@Before
    public void setUp() {
		repository.deleteAll();
    }
	
	@Test
	public void testCreateTask() {
		User user = new User("John Smith");
		User savedUser = repository.save(user);
		assertThat(savedUser.getId()).isNotNull();
		assertThat(savedUser.getName()).isSameAs(user.getName());
	}
	
}
