export const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

export const saveTasksToLocalStorage = (tasks) => {
  return localStorage.setItem("tasks", JSON.stringify(tasks));
};
