import { createReducer, on } from '@ngrx/store';
import {setFIltro } from './filtro.actions';
 
export const initialState = "todos";
 
const _filtroReducer = createReducer( initialState,
  on(setFIltro, (state, { filtro }) =>  filtro),
);
 
export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}