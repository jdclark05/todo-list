import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const TodoForm = (props) => {

    const handleSubmit = (e, newTask) => {
        e.preventDefault();
        props.onNewTask( newTask );
        e.target[0].value = ""
    };
    return(
        <div className="mt-2">

            <div className="d-flex flex-row align-items-center justify-content-center mt-5" style={{ height: '10rem', width: '100%'}}>

                <form onSubmit={ (e) => handleSubmit(e, e.target[0].value) } className="d-flex flex-row align-items-center justify-content-center" style={{width: '40rem'}} >

                    <input placeholder="Enter New Task" className="m-1" name="color" style={{width: '20rem', height: '2.5rem', borderRadius: '10px'}} type="text"/>

                    <input className="m-1 d-flex flex-row align-items-center justify-content-center" style={{height: '2.25rem', width: '6rem', borderRadius: '5px', backgroundColor: 'white', border: '1px solid #999', color: '#000', fontSize: '1.3rem'}} type="submit" />

                </form>
            </div>
        </div>
    );
}

export default TodoForm;