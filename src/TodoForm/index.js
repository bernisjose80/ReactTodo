import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){

  const [newTodoValue,setNewTodoValue] = React.useState('');
  
  const {
      addTodo,
      setOpenModal,
  } = React.useContext(TodoContext);
  

  const onCancel = () => {
     // tarea de cancelar el envio de add todoo
     // todo se recarga la pagina
    setOpenModal(false);
  }

  const onChange = (event) => {
    // tarea de cancelar el envio de add todoo
    setNewTodoValue(event.target.value);
   
 }


  const onSubmit = (event) => {
    // tarea de hacer el envio de form todoo
     event.preventDefault();
     addTodo(newTodoValue);
     setOpenModal(false);
 }

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            
            <textarea
              value = {newTodoValue}
              onChange = {onChange}
              placeholder="Introduzca su nuevo Todoo"
            />

            <div className="TodoForm-buttonContainer">

                <button type="button" className="TodoForm-button-cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button-add">Agregar</button>
             
            </div>

        </form>
    );
}

export { TodoForm };