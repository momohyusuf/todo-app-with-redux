import React from "react";
import { useDispatch } from "react-redux";
import {
  editSelectedTask,
  resetFilters,
  updateTaskStatus,
} from "../features/task/taskSlice";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../utils/helpers";

const Task = ({ description, isDone, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    const storedTasks = getTasksFromLocalStorage();
    const result = storedTasks.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    dispatch(updateTaskStatus(result));
    saveTasksToLocalStorage(result);
  };

  const findSelectedTasksForEditing = () => {
    const storedTasks = getTasksFromLocalStorage();
    const result = storedTasks.find((item) => item.id === id);
    dispatch(editSelectedTask(result));
  };

  const deleteTask = () => {
    const storedTasks = getTasksFromLocalStorage();
    const result = storedTasks.filter((item) => item.id !== id);
    saveTasksToLocalStorage(result);
    dispatch(resetFilters());
  };

  return (
    <div className="flex items-center gap-6 justify-between mb-2">
      <div className="flex gap-4">
        <input type="checkbox" checked={isDone} onChange={handleCheck} />
        <p>{description} </p>
      </div>
      <div className="flex gap-4">
        <button onClick={findSelectedTasksForEditing}>
          <CiEdit />
        </button>
        <button onClick={deleteTask}>
          <MdOutlineDelete color="red" />
        </button>
      </div>
    </div>
  );
};

export default Task;
