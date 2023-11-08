import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  isFormValid: boolean = false;

  datos: any[] = [];

  constructor() {}

  checkFormValidity() {
    const isNombreValid = this.nombre.trim() !== '';
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(this.email);
  
    this.isFormValid = isNombreValid && isEmailValid;
  }  

  onSubmit() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      const data = {
        Nombre: this.nombre,
        Email: this.email
      };
      this.datos.push(data);
      this.openNewWindow();
      this.resetForm();
    }
  }

  resetForm() {
    this.nombre = '';
    this.email = '';
    this.isFormValid = false;
  }

  openNewWindow() {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></head><body>');
      newWindow.document.write('<div class="container mt-5">');
      newWindow.document.write('<h2 class="mb-3">Datos ingresados:</h2>');
      newWindow.document.write(`<p class="lead"><strong>Nombre:</strong> ${this.nombre}</p>`);
      newWindow.document.write(`<p class="lead"><strong>Email:</strong> ${this.email}</p>`);
      newWindow.document.write('</div>');
      newWindow.document.write('</body></html>');
      newWindow.document.close();
    }
  }  
}