package com.qianbo.tasklist.data;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;

@Document(collection = "tasks")
public class Task {
	@Id
	public String id;

	@Indexed(unique = true)
	@NonNull
	public String taskId;
	@NonNull
	public String taskName;
	public String description;
	@NonNull
	public Date createdOn;
	public Date lastModifiedOn;
	public Date dueOn;
	public int priority;
	public String assignee;
	@NonNull
	public String creator;
	public int effort;
	public int status;

	public Task() {}

	public Task(String taskId, String taskName, String creator, int priority, int effort){
		this.taskId = taskId;
		this.taskName = taskName;
		this.creator = creator;
		this.priority = priority;
		this.effort = effort;
		this.createdOn = new Date();
		this.lastModifiedOn = this.createdOn;
		this.status = 0;
	}

	
	public Task(String taskId, String taskName, String description, Date dueOn, int priority, String assignee, String creator,
			int effort) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.description = description;
		this.dueOn = dueOn;
		this.priority = priority;
		this.assignee = assignee;
		this.creator = creator;
		this.effort = effort;
		this.createdOn = new Date();
		this.lastModifiedOn = this.createdOn;
		this.status = 0;
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

	public Date getLastModifiedOn() {
		return lastModifiedOn;
	}

	public void setLastModifiedOn(Date lastModifiedOn) {
		this.lastModifiedOn = lastModifiedOn;
	}

	public Date getDueOn() {
		return dueOn;
	}

	public void setDueOn(Date dueOn) {
		this.dueOn = dueOn;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
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

	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", description=" + description + ", createdOn=" + createdOn
				+ ", lastModifiedOn=" + lastModifiedOn + ", dueOn=" + dueOn + ", priority=" + priority + ", assignee="
				+ assignee + ", creator=" + creator + ", effort=" + effort + "]";
	}
	
}
