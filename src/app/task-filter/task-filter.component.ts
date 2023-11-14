import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Input() filterCompleted: string = 'all';
  @Output() filterCompletedChange = new EventEmitter<string>();

  toggleFilter() {
    if (this.filterCompleted === 'all') {
      this.filterCompleted = 'all';
    } else if (this.filterCompleted === 'notCompleted') {
      this.filterCompleted = 'notCompleted';
    } else if (this.filterCompleted === 'completed') {
      this.filterCompleted = 'completed';
    } else {
      this.filterCompleted = 'all';
    }
    this.filterCompletedChange.emit(this.filterCompleted);
  }
}