import Task from "../Task/task.js";
import Project from "../Projects/projects.js";
import { tasks } from "../Task/DOM.js";

export let projects = [];

function searchForProject(projectName) {
    return projects.find((obj) => obj.name === projectName);
}

export function addTaskToProject(
    projectName,
    taskTitle,
    taskDeadline,
    taskIsCompleted
) {
    const project = searchForProject(projectName);
    const task = new Task(taskTitle, taskDeadline, taskIsCompleted);

    project.addTask(task);
    // project.renderTasks();
}

export function addProject(projectName) {
    const project = new Project(projectName);
    projects.push(project);
}

function renderActiveProjectTasks(projectItem) {
    const project = searchForProject(projectItem.id);
    tasks.innerHTML = "";
    project.renderTasks();
    console.log(project);
}

document.addEventListener("click", function (e) {
    const projectItem = e.target.closest(".projectItem");

    if (projectItem) {
        renderActiveProjectTasks(projectItem);
    }
});
