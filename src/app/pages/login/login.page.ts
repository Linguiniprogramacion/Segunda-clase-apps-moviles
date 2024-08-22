import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "Manriquez";
  edad: number = 25;
  usuario: string="";

  Persona: any = [
    {
    nombre: 'José',
    apellido: 'Rodriguez',
    edad: 29
    }
    ,
    {
    nombre: 'matias',
    apellido:'Gonzalez',
    edad: 36
    }
  ]


  listaP: any = [
    {
      id:1,
      nombre: 'Alejo'
    },
    {
      id:2,
      nombre: 'matias'
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
