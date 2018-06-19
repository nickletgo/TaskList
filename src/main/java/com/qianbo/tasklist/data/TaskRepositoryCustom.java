package com.qianbo.tasklist.data;

import java.util.List;

public interface TaskRepositoryCustom {
	public List<AssigneeStatus> aggregateTaskByAssignee();
}
