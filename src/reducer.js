import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

export default function rootReducer(state = {}, action) {
  return {
    todos: todosReducer,
    filters: filtersReducer
  };
}
