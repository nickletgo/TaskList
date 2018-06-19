package com.qianbo.tasklist.data;

public class TaskSummary {
	static final private int STATUS_COUNT = 3;
	private final String assignee;
	private int[] statusCount;
	
	public TaskSummary(String assignee){
		this.assignee = assignee;
		statusCount = new int[STATUS_COUNT];
	}
	
	public void addCount(int status, int count){
		statusCount[status] += count;
	}

	public int[] getStatusCount() {
		return statusCount;
	}

	public void setStatusCount(int[] statusCount) {
		this.statusCount = statusCount;
	}

	public String getAssignee() {
		return assignee;
	}
	
}
