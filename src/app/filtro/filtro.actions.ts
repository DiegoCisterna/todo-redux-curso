import { createAction, props } from '@ngrx/store';

export const setFIltro = createAction('[Filtro] Set filtro', props<{filtro: string}>());