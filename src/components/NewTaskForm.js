import React from 'react';

class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {v: ''};

        this.handleFunction = this.handleFunction.bind(this);
    }

    handleFunction() {
        fetch(`https://virtual-pet-c74k.onrender.com/post?task=${this.state.v}`, {
            method: 'POST',
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
    
    render() {
        const handleChange = (event) => {
            this.setState({v: event.target.value});
        }

        return (
            <div>
                <label for="newTask">
                    Add New Task
                    <input 
                        type="text" 
                        value={this.state.v}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={this.handleFunction}>Submit</button>
            </div>
        );
    }
}

export default NewTaskForm;