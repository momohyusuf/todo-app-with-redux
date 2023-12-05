import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  userTask: JSON.parse(localStorage.getItem("tasks")) || [],
  taskEditing: "",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // action to add new task
    addTask: (state, action) => {
      state.userTask = [
        {
          description: action.payload,
          id: nanoid(),
          isDone: false,
        },
        ...state.userTask,
      ];
      // save tasks to local
      localStorage.setItem("tasks", JSON.stringify(state.userTask));
    },
    // ********************************

    // action to update task status
    updateTaskStatus: (state, action) => {
      state.userTask = action.payload;
    },
    // ***********************************

    // filter tasks by status pending/completed
    filterTasks: (state, action) => {
      state.userTask = action.payload;
    },
    // *******************************************

    // reset tasks to all
    resetFilters: (state, action) => {
      state.userTask = JSON.parse(localStorage.getItem("tasks")) || [];
    },
    // ***********************************
    // **********************************

    // for getting the presently selected task
    editSelectedTask: (state, action) => {
      state.taskEditing = action.payload;
    },
  },
});

// all actions exported
export const {
  addTask,
  updateTaskStatus,
  filterTasks,
  resetFilters,
  editSelectedTask,
} = taskSlice.actions;

export default taskSlice.reducer;
