import React from "react";
import './tasks.css'
import NewTaskForm from "../components/NewTaskForm";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: []
        };
    }

    componentDidMount() {
        fetch("https://virtual-pet-c74k.onrender.com/tasks")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                tasks: result.tasks
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <div>
                    <h2 style={{fontFamily:"'Covered By Your Grace', cursive",
                    fontSize:"30px"}}>
                        Task list
                    </h2>
                    {tasks.map((task)=>{
                        return <Task id={task["id"]} title={task["title"]} />
                    })}
                </div>
            </div>
    )}
};

const Task = (props) => {
    function handleFunction(id) {
        console.log(id)
        fetch(`https://virtual-pet-c74k.onrender.com/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": 78912 })
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        }
        sleep(1000);
        window.location.reload();
    }

    return (
        <div id="taskBox">
            <div id={props.id}
                style={{
                    fontFamily:"'Concert One', cursive",
                    fontSize:"20px",
                    paddingRight:"20px"
                }}>
                {props.title}
            </div>
            <div id="taskButton">
                <button type="button"
                    style={{
                        background:"#268F22"
                    }} onClick={() => handleFunction(props.id)}>
                    Accept
                </button>
            </div>
        </div>
    )
};

export default Tasks;