import React from "react";
import './tasks.css'

const Tasks = () => {
    return (
        <div>
            <h1>
                Task Page
            </h1>
            <Task />
            <Task />
            <Task />
        </div>
    )
};

const Task = () => {
    return (
        <div id="taskBox">
            <div id="taskName">
                Water the flowers!
            </div>
            <div id="taskButton">
                <button type="button"
                    style={{
                        background:"#268F22"
                    }}>
                    Accept
                </button>
                <button type="button"
                    style={{
                        background:"#DB493A"
                    }}>
                    Decline
                </button>
            </div>
        </div>
    )
};

export default Tasks;