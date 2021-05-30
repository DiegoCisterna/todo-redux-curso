import {  Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app-reducer';
import * as actions from '../todo-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo | undefined;
@ViewChild('inputFisico') txtFisico: ElementRef | undefined;
@ViewChild('check') check: ElementRef | undefined;

chkCompletado: FormControl;
txtInput:  FormControl;
editando: boolean = false;

  constructor( private store: Store<AppState>) {
    this.chkCompletado = new FormControl(this.todo?.completado);
    this.txtInput= new FormControl(this.todo?.texto, Validators.required);
   }

  ngOnInit(): void {
    this.chkCompletado.valueChanges.subscribe(val =>{
      let id = this.todo?.id ? this.todo.id : 0;
      this.store.dispatch(actions.toggle({id: id}));
    });
  }

  editar(){
    this.editando = true;
    setTimeout(() => {
      this.txtFisico?.nativeElement.select();
    }, 200);
    this.txtInput= new FormControl(this.todo?.texto, Validators.required);
  }

  terminarEdicion(){
    this.editando= false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo?.texto) {
      return;
    }

    this.store.dispatch(
      actions.editar({
        id: this.todo?.id ? this.todo?.id:0,
        texto: this.txtInput.value
      })
    );
  }

  borrar(): void{
    console.log("eliminado de la lista de todo", this.todo);
    this,this.store.dispatch(actions.borrar({id: (this.todo?.id)? this.todo?.id : 0}))
  }

}
