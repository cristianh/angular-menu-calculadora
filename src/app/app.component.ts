import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numero1 = 0;
  numero2 = 0;
  operacion = '';
  resultado = 0;
  name = 'Angular ' + VERSION.major;

  onSelect(event: Event) {
    this.operacion = (<HTMLInputElement>event.target).value;

    const operando = {
      '1': this.numero1 + this.numero2,
      '2': this.numero1 - this.numero2,
      '3': this.numero1 * this.numero2,
      '4': this.numero1 / this.numero2,
    };

    this.resultado = operando[this.operacion];
  }
}
