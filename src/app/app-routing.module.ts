import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// const routes: Routes = [  
//   { path: '', loadChildren: './pages/todo-list/todo-list.module#TodoListPageModule' },  
//   { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },  
//   { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },  
// ];  
const routes: Routes = [
 
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: 'todo/:id',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
