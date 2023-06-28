import "./style.css";
import { createDiv } from "./DOM.js";

// Contains all the information for a single task

class Task {
    constructor(title, deadline, description, isCompleted) {
        this.title = title;
        this.deadline = deadline;
        this.description = description;
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
        createDiv(
            this.title,
            this.deadline,
            this.description,
            this.isCompleted
        );
    }
}

export default Task;
