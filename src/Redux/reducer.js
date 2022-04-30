import {combineReducers} from 'redux';

const initialStateTodos = [
  {
      id: 1,
      task: 'First Todo',
      completed: true,
  },
  {
    id: 2,
    task: 'Second Todo',
    completed: true,
},
];

const todosReducer = (state = initialStateTodos, action) => {
  if (action.type === 'CREATE_TODOS') {
    let newTodo = {
      id: Math.random(),
      task: action.inputValue,
      completed: false,
    };
    return {
      ...state,
      todos: newTodo,
    };
  }

  if (action.type === 'DONE_TODOS') {
    let newTodos = todos.map(item => {
      if (item.id == todoId) {
        return {...item, completed: true};
      }
      return item;
    });
    return {
      ...state,
      todos: newTodos,
    };
  }
  if (action.type === 'DELETE_TODOS') {
    let newTodos = todos.filter(item => item.id !== todoId);
    return {
      ...state,
      todos: newTodos,
    };
  }

  return state;
};

const reducer = combineReducers({
  todosReducer,
});

export default reducer;
