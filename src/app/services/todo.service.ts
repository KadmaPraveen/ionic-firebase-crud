import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Todo } from '../pages/todo.model';
import { map, take } from 'rxjs/operators';  
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Observable<Todo[]>;  
  private todoCollection: AngularFirestoreCollection<Todo>;  
  
  constructor(private db: AngularFirestore,public fdb:AngularFireDatabase) {  debugger
    this.todoCollection = this.db.collection<Todo>('todos');  
    this.todos = this.todoCollection.snapshotChanges().pipe(   map(actions => {  
        return actions.map(a => {  
          const data = a.payload.doc.data();  
          const id = a.payload.doc.id;  
          return { id, ...data };  
        });  
      })  
    );  
  }  
  
  getTodos(): Observable<Todo[]> {  
    return this.todos;  
  }  
  
  getTodo(id: string): Observable<Todo> {  debugger
    return this.todoCollection.doc<Todo>(id).valueChanges().pipe(  
      take(1),  
      map(todo => {  
        todo.id = id;  
        return todo;  
      })  
    );  
  }  
  
  addTodo(todo: Todo): Promise<DocumentReference> {  
    return this.todoCollection.add(todo);  
  }  
  // addTodo(todo) {  
  //   this.fdb.list(pathOrRef:'/Tododata').push(todo);
     
  // }  
  
  updateTodo(todo: Todo): Promise<void> {  
    return this.todoCollection.doc(todo.id).update({ name: todo.name, notes: todo.notes });  
  }  
  
  deleteTodo(id: string): Promise<void> {  
    return this.todoCollection.doc(id).delete();  
  }  
}


