import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
