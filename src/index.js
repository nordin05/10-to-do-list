import Task from "./Task/task.js";
import Project from "./Projects/projects.js";

const task1 = new Task("Test task", "2/3/2031", false);
const task2 = new Task("Test task", "2/3/2031", false);
// task1.render();

const project1 = new Project("Test project");
project1.addTask(task1);
project1.render();
