import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';
  taskCompleted: boolean = false;

  @Output() taskAdded = new EventEmitter<{ name: string, completed: boolean }>();

  addTask() {
    const newTask = { name: this.taskName, completed: this.taskCompleted };
    this.taskAdded.emit(newTask);
    this.taskName = ''; 
    this.taskCompleted = false;
  }
  
}