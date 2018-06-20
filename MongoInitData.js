var db = connect('127.0.0.1:32768/tasklist');

print('Database tasklist is connected');
db.users.drop();
print('collection users has been cleaned');
db.tasks.drop();
print('collection tasks has been cleaned');

db.users.insert(
   [
     { name: "Admin", isAdmin: true },
     { name: "John Smith", isAdmin: false },
     { name: "Qianbo Wang", isAdmin: false },
   ]
);

print('inserted 3 records to users collection');

db.tasks.insert(
	[
		{
			taskId: "FE-1",
			taskName:"Create TaskList View",
			description: "Use React to create TaskList view.",
			createdOn: new Date(),
			priority: 1,
			assignee: "Qianbo Wang",
			creator: "Qianbo Wang",
			effort:2,
			status:0,
			rank: 6
		},
		{
			taskId: "FE-2",
			taskName:"Create TaskForm View",
			description: "Use React to create TaskForm view for creating new tasks",
			createdOn: new Date(),
			priority: 2,
			assignee: "John Smith",
			creator: "Admin",
			effort:10,
			status:0,
			rank: 10
		},
		{
			taskId: "TEST-1",
			taskName:"Test TaskList View",
			description: "Test TaskList view.",
			createdOn: new Date(),
			priority: 2,
			assignee: "John Smith",
			creator: "Admin",
			effort:8,
			status:0,
			rank: 14
		},
		{
			taskId: "TEST-2",
			taskName:"Test Database",
			description: "Write JUnit test cases to test Database",
			createdOn: new Date(),
			priority: 0,
			assignee: "Qianbo Wang",
			creator: "Admin",
			effort:2,
			status:0,
			rank: 1
		},
		{
			taskId: "BE-1",
			taskName:"Create controller for users collection",
			description: "Implement rest controller for users",
			createdOn: new Date(),
			priority: 1,
			assignee: "Mike Musson",
			creator: "Admin",
			effort:2,
			status:0,
			rank: 2
		}]
);

print('inserted 5 records to tasks collection');
