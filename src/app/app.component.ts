import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterCompleted: string = 'all';

  tasks: { name: string, completed: boolean }[] = [];

  addTask(task: { name: string, completed: boolean }) {
    this.tasks.push(task);
  }
}

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage = '¡Hola desde el componente padre!';
}

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  
  onSubmit(){
    console.log('El formulario fue Enviado')
  }
}
*/