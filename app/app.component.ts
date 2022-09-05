import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [

    {
      icon: 'person-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'calendar-number-outline',
      name: 'Ver Asistencia',
      redirecTo: '/horario'
    },
    {
      icon: 'build-outline',
      name: 'Modificar Asistencia',
      redirecTo: '/modificar-asistencia'
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar sesion',
      redirecTo: '/inicio'
    },
   

  ]

}
