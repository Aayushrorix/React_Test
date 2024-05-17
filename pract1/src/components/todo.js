import React,{useState, useEffect} from 'react';

function Todo(){
    const [tasks, setTask] = useState([])
    const [id,setId] = useState(1)
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')

    function addTask(){
        setTask([...tasks, { id: id, title: title, description: description }]);
        setId(id+1)
        setTitle('')
        setDescription('')
    }

    function editTask(id, newTitle, newDescription){
        const updatedTasks = tasks.map(task =>
        task.id === id
            ? {
                ...task,
                title: newTitle !== null && newTitle !== '' ? newTitle : task.title,
                description: newDescription !== null && newDescription !== '' ? newDescription : task.description
            }
            : task
        );
        setTask(updatedTasks);
    }

    function ShowTasks(props){
        return <li><input 
        type="checkbox"
        /> 
        ID : {props.id} | Title : {props.title} | Description : {props.description}  
        <button onClick={() => {
        const newTitle = prompt('Enter new title', props.title);
        const newDescription = prompt('Enter new description', props.description);
        editTask(props.id, newTitle, newDescription);
        }}>E</button>
        <button onClick={() => deleteTask(props.id)}>D</button>
        <br/>
        </li>
    }

    function deleteTask(id) {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTask(filteredTasks);
    }

    return(
        <div>
            <div>
                <label>Title : </label>
                <input placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div>
                <label>Description : </label>
                <input placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <button onClick={addTask} disabled={!(title!=='' && description!=='')}> Add </button>

            <hr/>

            <div>
                <h2> Tasks : </h2>
                <ul>
                    {tasks.map((task, index)=> (
                    <ShowTasks id={task.id} title={task.title} description={task.description}/>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}


export default Todo;