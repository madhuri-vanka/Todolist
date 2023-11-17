import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit
{
  tasks: string[] = [];
  newTask:string = '';
  editIndex:number|null=null;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  edit(index: number): void 
  { this.newTask=this.tasks[index];
    this.editIndex=index;
  } 
  
  addTask(): void {
    if (this.newTask.trim() !== '') 
    {
      if (this.editIndex !== null) {
        this.todoService.editTask(this.editIndex, this.newTask);
        this.editIndex = null;
      } else {
        this.todoService.addTask(this.newTask);
      }
     
      this.newTask = '';
    }
  }
  removeTask(index: number): void {
    this.todoService.removeTask(index);
    this.tasks = this.todoService.getTasks();
  }
  
  
}



