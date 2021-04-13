import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.sass']
})
export class PruebaComponent implements OnInit {

  /*
    Acá podemos declarar miembros de la clase. Por ejemplo campos / variables.

    Por ejemplo:

    public contador: number;

    (visibilidad / nombre / tipo de dato)
  */


  /*
    El constructor por el momento no lo usaremos. No introducir lógica acá, dado que el componente de Angular aún no está vivo.
  */
  constructor() { }

  /*
    ngOnInit es el inicio del componente de Angular, cualquier lógica (como un setInterval()) va dentro de este método :)
  */
  ngOnInit(): void {
  }

}
