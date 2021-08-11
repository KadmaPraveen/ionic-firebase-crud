import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  public todos: Observable<Todo[]>;  
  constructor(private todoService: TodoService) { }  
  ngOnInit() {  debugger
    this.todos = this.todoService.getTodos();  
    console.log(this.todos)
  }  
}  
