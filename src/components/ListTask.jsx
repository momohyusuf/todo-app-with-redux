import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTasks = () => {
  const tasks = useSelector((state) => state.task.userTask);
  return tasks?.length === 0 ? (
    <p>You have no task</p>
  ) : (
    <div>
      {tasks?.map((item) => (
        <Task key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListTasks;
