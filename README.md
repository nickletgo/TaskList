# TaskList
A replenisher task list

# Functional Requirements:
- As a guest, I can register a normal user account
- As a guest, I can register an admin account
- As a guest, I can view a list a task ordered by status and rank weighted by priority and estimate
- As a registered user, I can create a task and assign to myself only with following fields:
	* Task ID
	* Task Name
	* Description
	* CreatedBy 
	* Assignee
	* CreatedOn
	* Priority
	* Effort
	* Rank
- As an admin, I can create a task on anyone's behalf
- As a user, I can view status of all tasks by assignee and status

# Prerequisites
To successfully build and run this project, please make sure:
1. npm is installed in your Operating System
2. MongoDB is installed in your machine

# Configuration
## Configure database information for REST API project
Navigate to /src/main/resources folder and update application.properties with correct host and port value for your mongo database:
```
spring.data.mongodb.host=localhost
spring.data.mongodb.port=32768
```
## Insert testing data into MongoDB
For demonstration, please run the following script to insert initial testing data into Database.
```
mongo --host <yourMongoDBHost>:<yourMongoDBPort> MongoInitData.js
```

# Installation
1. Clone the project to your local file system.
```
git clone https://github.com/nickletgo/replenisher-task-list.git
```
2. Navigate to the project folder and build the server side code with:
- On Linux system:
```
./gradlew build
```
- On Windows:
```
gradlew.bat build
```
3. navigate into the react-app folder and install dependencies with
```
npm install
```
``
# Start Project
The project has both server side and front end applications. 

## Server
To start the server, start a terminal and navigate to the project folder:
```
./tasklist-start
```
Now your Rest API server should be running on http://localhost/8080

## Front End

To start the front end, navigate to /react-app:
```
cd /react-app
npm start
```
To open the front end app, open your browser and navigate to http://localhost:3000


