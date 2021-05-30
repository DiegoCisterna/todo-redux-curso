import { createAction, props } from '@ngrx/store';
export const crear = createAction('[Todo] Crear', props<{texto: string}>());
export const toggle = createAction('[Todo] toggle', props<{id: number}>());
export const editar = createAction('[Todo] editar', props<{id: number, texto: string}>());
export const borrar = createAction('[Todo] borrar', props<{id: number}>());
export const toggleAll = createAction('[Todo] toggle all', props<{completados: boolean}>());
export const limpiarCompletados = createAction('[Todo] limpiar completados');