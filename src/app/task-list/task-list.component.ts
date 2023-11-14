import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];
  @Input() filterCompleted: string = '';

  filteredTasks(): { name: string, completed: boolean }[] {
    if (this.filterCompleted === 'all') {
      return this.tasks;
    } else if (this.filterCompleted === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filterCompleted === 'notCompleted') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }
}