import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: string) {
   
    switch (filtro) {
      case "completados":
        return todos.filter(todos=> todos.completado);
      case "pendientes":
        return todos.filter(todos=> !todos.completado);
      default:
        return todos;
    }
  }

}
