import { ToDoListDarkTheme } from "../../Jss_StyleComponents/Themes/ToDoListDarkTheme";
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  update_task,
} from "../types/ToDoListTypes";
import { arrTheme } from "../../Jss_StyleComponents/Themes/ThemeManager";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  taskEdit: { id: "-1", taskName: "", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task name already exists !");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);

   
      state.taskList = taskListUpdate;

      return { ...state };
    }
    case change_theme: {
      
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      if (theme) {
        console.log(theme);
      
        state.themeToDoList = { ...theme.theme };
      }

      return { ...state };
    }
    case done_task: {
     
      let taskListUpdate = [...state.taskList];
      
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }

      
      return { ...state, taskList: taskListUpdate };
    }

    case delete_task: {
      
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }

    case edit_task: {
      return { ...state, taskEdit: action.task };
    }

    case update_task: {
      
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

      
      let taskListUpdate = [...state.taskList];

      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );

      console.log(index);

      if (index !== -1) {
        taskListUpdate[index] = state.taskEdit;
      }

      state.taskList = taskListUpdate;
      state.taskEdit = { id: "-1", taskName: "", done: false };

      return { ...state };
    }

    default:
      return { ...state };
  }
};
