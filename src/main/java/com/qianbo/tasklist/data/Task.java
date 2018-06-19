package com.qianbo.tasklist.data;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;

@Document(collection = "tasks")
public class Task {
	@Id
	private String id;

	@Indexed(unique = true)
	@NonNull
	private String taskId;

	@NonNull
	private String taskName;
	private String description;
	@NonNull
	private Date createdOn;
	private int priority;
	private String assignee;
	@NonNull
	private String creator;
	private int effort;
	private int status;
	private int rank;

	public Task() {}

	public Task(String taskId, String taskName, String creator, int priority, int effort){
		this.taskId = taskId;
		this.taskName = taskName;
		this.creator = creator;
		this.priority = priority;
		this.effort = effort;
		this.createdOn = new Date();
		this.status = 0;
		this.setRank();
	}

	
	public Task(String taskId, String taskName, String description, Date dueOn, int priority, String assignee, String creator,
			int effort) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.description = description;
		this.priority = priority;
		this.assignee = assignee;
		this.creator = creator;
		this.effort = effort;
		this.createdOn = new Date();
		this.status = 0;
		this.setRank();
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
		this.setRank();
	}

	public String getAssignee() {
		return assignee;
	}

	public void setaAssignee(String assignee) {
		this.assignee = assignee;
	}

	public int getEffort() {
		return effort;
	}

	public void setEffort(int effort) {
		this.effort = effort;
		this.setRank();
	}
	

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}
	
	public int setRank() {
		return priority * 5 + effort/2;
	}
	
	public int getRank(){
		return rank;
	}
	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", description=" + description + ", createdOn=" + createdOn
				+ ", priority=" + priority + ", assignee="
				+ assignee + ", creator=" + creator + ", effort=" + effort + "]";
	}
	
}
