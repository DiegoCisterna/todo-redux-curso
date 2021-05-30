import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, editar, toggle, borrar, toggleAll, limpiarCompletados } from './todo-actions';
 
export const initialState: Todo[] = [ 
  new Todo('Salvar al mundo de los villanos'),
  new Todo('Salvar al mundo de los diegos'),
  new Todo('Salvar al mundo de los erick'),
  new Todo('Salvar al mundo de los matias'),
];
 
const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)] ),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
       if (id === todo.id) {
        let obj =  {
          ...todo,
          completado: !todo.completado
        }
        console.log("nuevo objeto", obj);
        return obj;
       } else {
         return todo;
       }
      })
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
       if (id === todo.id) {
        let obj =  {
          ...todo,
          texto: texto
        }
        console.log("nuevo objeto", obj);
        return obj;
       } else {
         return todo;
       }
      })
  }),
  on(borrar, (state, {id}) => state.filter(todo=> todo.id != id)),
  on(toggleAll, (state, {completados}) => {
    return state.map(todo => {
        let obj =  {
          ...todo,
          completado: completados
        }
        return obj;
      })
  }),
  on(limpiarCompletados, (state) => {
    return state.filter(todo => !todo.completado)
  }),
);
 
export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}