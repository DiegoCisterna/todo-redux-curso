import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import { setFIltro } from '../../filtro/filtro.actions';
import * as  actions from '../todo-actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
filtroActual: string = 'todos';
pendientes:number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo=> !todo.completado).length
    })

  }

  cambiarFiltro(filtro: string): void{
   this.store.dispatch(setFIltro({filtro: filtro}))
  }

  limpiarCompletados(): void{
    this.store.dispatch(actions.limpiarCompletados())
  }
}
