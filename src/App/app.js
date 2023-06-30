import "./style.css";
import Task from "../Task/task.js";
import Project from "../Projects/projects.js";
import { renderProjects } from "./DOM.js";

const tasks = document.querySelector(".tasks-container");

export let projects = [];
export let currentActiveProject;

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
}

export function addProject(projectName) {
    const project = new Project(projectName);
    projects.push(project);
}

export function renderActiveProjectTasks(projectName) {
    const project = searchForProject(projectName);
    currentActiveProject = project;
    tasks.innerHTML = "";
    project.renderTasks();
}

export function removeProject(projectName) {
    const project = searchForProject(projectName);
    const index = projects.indexOf(project);
    projects.splice(index, 1);
    tasks.innerHTML = "";
    renderProjects(projects);
}

function showDescription(parent, child) {
    parent.style.gridTemplateRows = "1fr 3fr 35px";
    child.style.display = "block";
}

function hideDescription(parent, child) {
    parent.style.gridTemplateRows = "1fr 40px";
    child.style.display = "none";
}

tasks.addEventListener("click", function (e) {
    const remove_task_btn = e.target.closest(".close-btn");
    const task_item = e.target.closest(".taskItem");
    const checkbox = e.target.closest("#checkbox");

    if (remove_task_btn) {
        const taskName = remove_task_btn.parentNode.children[0].innerHTML;
        currentActiveProject.removeTask(taskName);
        renderActiveProjectTasks(currentActiveProject.name);
    }
    if (checkbox) {
        return;
    } else if (task_item) {
        const description = task_item.querySelector(".description");
        const display = window.getComputedStyle(description).display;
        if (display == "none") {
            showDescription(task_item, description);
        } else if (display == "block") {
            hideDescription(task_item, description);
        }
    }
});
