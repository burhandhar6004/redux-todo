import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "burhan",
  initialState: {
    allTodos: [
      {
        id: 1,
        text: "Burhan",
      },
    ],
    edit: {
      todo: {},
      isEdit: false,
    },
  },

  reducers: {
    // addtodos
    add: (state, action) => {
      return {
        ...state,
        allTodos: [action.payload, ...state.allTodos],
      };
    },

    // Delete Todos

    remove: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item.id !== action.payload),
      };
    },

    // edit
    editTodo : (state,action)=>{
      return{
        ...state,
        edit:{
          todo : action.payload,
        isEdit : true
        }
      }
    },


    // Update

    update : (state,action)=>{
      return{
        ...state,
        allTodos :state.allTodos.map(item => item.id === action.payload.id ? action.payload : item),
        edit: {
          todo: {},
          isEdit: false,
        },
      }
    }
  },
});
export const { add, remove, editTodo, update } = todoSlice.actions;
export default todoSlice.reducer;
