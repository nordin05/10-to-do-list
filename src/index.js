import "./style.css";
import {
    projects,
    addTaskToProject,
    addProject,
    renderActiveProjectTasks,
    removeProject,
} from "./App/app.js";
import { renderProjects } from "./App/DOM.js";

const projects_container = document.querySelector(".projects-container");

addProject("Test Project 1");
addProject("Test Project 2");
addProject("Test Project 3");

addTaskToProject("Test Project 1", "Test task in Project 1", "2/3/2031", false);
addTaskToProject("Test Project 2", "Test task in Project 2", "2/3/2031", false);
addTaskToProject("Test Project 3", "Test task in Project 3", "2/3/2031", false);
renderProjects(projects);

projects_container.addEventListener("click", function (e) {
    const projectItem = e.target.closest(".projectItem");
    const remove_project_btn = e.target.closest(".close-btn");

    if (projectItem) {
        renderActiveProjectTasks(projectItem.id);
    }
    if (remove_project_btn) {
        const projectName = remove_project_btn.parentNode.id;
        removeProject(projectName);
    }
});
