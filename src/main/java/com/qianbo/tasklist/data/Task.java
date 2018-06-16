package com.qianbo.tasklist.data;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tasks")
public class Task {
	@Id
	public String id;

	@Indexed(unique = true)
	public String taskId;
	public String description;
	public Date createdOn;
	public Date lastModifiedOn;
	public Date dueOn;
	public int priority;
	public String owner;
	public String creator;
	public int effort;

	public Task() {}

	public Task(String taskId, String creator, int priority, int effort){
		this.taskId = taskId;
		this.creator = creator;
		this.priority = priority;
		this.effort = effort;
		this.createdOn = new Date();
		this.lastModifiedOn = this.createdOn;
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

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public int getEffort() {
		return effort;
	}

	public void setEffort(int effort) {
		this.effort = effort;
	}

	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", description=" + description + ", createdOn=" + createdOn
				+ ", lastModifiedOn=" + lastModifiedOn + ", dueOn=" + dueOn + ", priority=" + priority + ", owner="
				+ owner + ", creator=" + creator + ", effort=" + effort + "]";
	}
	
}
