import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';




// const defaultTodos = [
//   { text: 'Cortar Manzana', completed: false },
//   { text: 'Tomar el cursso de intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: true },
// ];



function App() {
  
   

  return (
   <TodoProvider>

     <AppUI/>
  
  
   </TodoProvider> 
   
  );
}

export default App;