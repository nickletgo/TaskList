package com.qianbo.tasklist.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.qianbo.tasklist.data.AssigneeStatus;
import com.qianbo.tasklist.data.TaskSummary;

public class StatusTrackerProcessor {
	
	static public List<TaskSummary> processAssignee(List<AssigneeStatus> input){
		Map<String, TaskSummary> map = new HashMap<String, TaskSummary>();
		for(AssigneeStatus ts : input) {
			map.putIfAbsent(ts.getAssignee(), new TaskSummary(ts.getAssignee()));
			map.get(ts.getAssignee()).addCount(ts.getStatus(), ts.getCount());
		}
		return new ArrayList<TaskSummary>(map.values());
	}
}
