import "./style.css";
import { createDiv } from "./DOM.js";

// Contains all the information for a single task

class Task {
    constructor(title, deadline, isCompleted) {
        this.title = title;
        this.deadline = deadline;
    }

    getTitle() {
        return this.title;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    getDeadline() {
        return this.deadline;
    }

    setDeadline(newDeadline) {
        this.deadline = newDeadline;
    }

    getStatus() {
        return this.isCompleted;
    }

    toggleStatus() {
        this.isCompleted = !this.isCompleted;
    }

    render() {
        createDiv(this.title, this.deadline, this.isCompleted);
    }
}

export default Task;
