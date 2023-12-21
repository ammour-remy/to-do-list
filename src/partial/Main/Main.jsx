import React, { useState } from "react";
import Formulaire from "../../components/Formulaire/Formulaire";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [tasksElementId, setTasksElementId] = useState(1);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);


  const addTask = (newTask) => {
    const newTaskItem = { id: tasksElementId, value: newTask };
    setTasksElementId(tasksElementId + 1); // Incrémentez la valeur de tasksElementId
    setTasks([...tasks, newTaskItem]);
  };

  const handleModifyTask = (taskId, newTaskValue) => {
    // Logique pour modifier la tâche avec l'identifiant donné
    console.log("modif la tâche avec l'identifiant", taskId);
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, value: newTaskValue } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    // Logique pour supprimer la tâche avec l'identifiant donné 
    console.log("Supprimer la tâche avec l'identifiant", taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleDoubleClick = () => {
    setIsDoubleClicked((prev) => !prev);
  };
  return (
    <main>
      <Formulaire onAdd={addTask} />
      {tasks.map((task) => (
        <Formulaire
          key={task.id}
          keyProp={true}
          task={task.value}
          onModify={(newTaskValue) => handleModifyTask(task.id, newTaskValue)}
          onDelete={() => handleDeleteTask(task.id)}
          onDoubleClick={handleDoubleClick}
          
        />
      ))}
    </main>
  );
}

export default Main;
