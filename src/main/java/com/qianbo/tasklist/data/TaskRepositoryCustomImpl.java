package com.qianbo.tasklist.data;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;


public class TaskRepositoryCustomImpl implements TaskRepositoryCustom {
	private final MongoTemplate template;
	
    @Autowired
    public TaskRepositoryCustomImpl(MongoTemplate template) {
        this.template = template;
    }

	
	@Override
	public List<AssigneeStatus> aggregateTaskByAssignee() {
		GroupOperation group = 
				group("assignee", "status").count().as("count");
		ProjectionOperation projection = project("status", "count","assignee");
		Aggregation agg = newAggregation(group,projection);
		return template.aggregate(agg, Task.class, AssigneeStatus.class).getMappedResults();
	}

}
