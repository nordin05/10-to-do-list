import "./style.css";
import { projects, addTaskToProject, addProject } from "./App/app.js";
import { renderProjects } from "./App/DOM.js";

const projects_container = document.querySelector(".projects-container");

addProject("Test Project 1");
addProject("Test Project 2");
addProject("Test Project 3");

console.log(projects);

addTaskToProject("Test Project 1", "Test task in Project 1", "2/3/2031", false);
addTaskToProject("Test Project 2", "Test task in Project 2", "2/3/2031", false);
addTaskToProject("Test Project 3", "Test task in Project 3", "2/3/2031", false);
renderProjects(projects);
