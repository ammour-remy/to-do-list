import React, { useState } from "react";
import ButtonToDo from "../Button/ButtonToDo";
import {
  FaPlus,
  FaPencilAlt,
  FaTrashAlt,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import "./formulaire.css";

function Formulaire({
  onAdd,
  keyProp,
  task,
  onModify,
  onDelete,
  onDoubleClick,
}) {
  const [inputValue, setInputValue] = useState(task || "");
  const [originalValue, setOriginalValue] = useState(task || "");
  const [isEditing, setIsEditing] = useState(false);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  const handleTask = (e) => {
    e.preventDefault();

    if (onAdd) {
      onAdd(inputValue);
      setInputValue("");
    } else if (onModify && isEditing) {
      onModify(inputValue);
      setOriginalValue(inputValue);
      setIsEditing(false);
    }
  };
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete();
  };

  const handleCancelEdit = () => {
    // Rétablir la valeur originale lors de l'annulation
    setInputValue(originalValue);
    setIsEditing(false);
  };

  const handleLocalDoubleClick = () => {
    setIsDoubleClicked((prev) => !prev);
    onDoubleClick && onDoubleClick();
  };

  const handleBlur = () => {
    setIsDoubleClicked(false);
  };

  return (
    <div
      className={`p-3 m-4 border border-2 rounded-2 ${
        keyProp && isDoubleClicked ? "bg-success text-white" : ""
      }`}
      onDoubleClick={handleLocalDoubleClick}
      onBlur={handleBlur}
    >
      <form
        className="w-100 d-flex justify-content-between"
        onSubmit={handleTask}
      >
        {keyProp ? (
          <>
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="p-3 rounded-3 inputSize"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="containerButtons d-flex justify-content-between">
                  <ButtonToDo type="submit" className="bg-success text-white">
                    <FaCheck /> Valider
                  </ButtonToDo>
                  <ButtonToDo
                    onClick={handleCancelEdit}
                    className="bg-danger text-white"
                  >
                    <FaTimes /> Annuler
                  </ButtonToDo>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex w-100 justify-content-between">
                  <p className="inputSize m-auto">{task}</p>
                  <div className="containerButtons d-flex justify-content-between align-items-center">
                    <ButtonToDo
                      onClick={() => setIsEditing(true)}
                      className="bg-primary text-white"
                    >
                      <FaPencilAlt /> Modifier
                    </ButtonToDo>
                    <ButtonToDo
                      onClick={handleDelete}
                      className="bg-danger text-white"
                    >
                      <FaTrashAlt /> Supprimer
                    </ButtonToDo>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Écrivez la tache à faire ..."
              className="p-3 rounded-3 inputSize"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="containerButtons d-flex justify-content-center">
              <ButtonToDo type="submit" className="bg-success text-white">
                <FaPlus /> Ajouter
              </ButtonToDo>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Formulaire;
