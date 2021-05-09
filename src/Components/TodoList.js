import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoList.css';


const TodoList = (props) => {

    const handleRemove = (e, thisTask) => {
        e.preventDefault();
        props.onRemove( thisTask );
    }

    const handleCompleted = (e, thisTask) => {
        e.preventDefault();
        console.log(thisTask, " Completed!")
    }
    
    return(
        <div className="pageContainer">
            <table className="TodoTable">
                <thead className="tHeader">
                    <th className="headerTitle1">Task</th>
                    <th className="headerTitle2">Completed</th>
                    <th className="headerTitle1">Action</th>
                </thead>
                <tbody className="listBody">
                {props.tasks.map((task) => {
                    return(
                        <tr id="taskText">
                            <td className="taskTitle" >{task}</td>

                            <td className="listCheckbox" ><input type="Checkbox" placeholder="Task Completed" onChange={ (e) => handleCompleted(e, task) }></input></td>

                            <td className="deleteButton"><Button type="submit" variant="secondary" onClick={ (e) => handleRemove(e, task) }>Delete</Button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;

