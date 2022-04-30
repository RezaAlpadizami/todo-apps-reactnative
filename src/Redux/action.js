export const createTodos = createTodos => {
    return {type: 'CREATE_TODOS', createTodos: createTodos};
  };
  
  export const doneTodos = doneTodos => {
    return {type: 'DONE_TODOS', doneTodos: doneTodos};
  };
   
  export const deleteTodos = deleteTodos => {
    return {type: 'DELETE_TODOS', deleteTodos: deleteTodos};
  };