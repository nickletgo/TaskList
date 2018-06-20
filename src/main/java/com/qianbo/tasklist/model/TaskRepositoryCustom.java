package com.qianbo.tasklist.model;

import java.util.List;

public interface TaskRepositoryCustom {
	public List<AssigneeStatus> aggregateTaskByAssignee();
}
