import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { RegisterService } from './../../../servicios/register.service';
import { ResponseGeneric } from 'src/app/Models/responseGeneric-modal';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombreUsuario: string;
  telefono: string;
  correo: String;

  mensaje: String;
  dataReturn:any="";

  responseIngreso : string;

  registro(){
    var usuario = {
      metodo: "registro",
      nombreUsuario: this.nombreUsuario,
      telefono: this.telefono,
      correo: this.correo
    }

    this.registerService.registroInit(usuario).subscribe(
      (response) => {
        this.dataReturn = JSON.stringify
        (response);
        console.log('Response: '+this.dataReturn);
        let responseGenerico = new ResponseGeneric(JSON.parse(this.dataReturn));
        console.log(responseGenerico);
        if(responseGenerico.estado=="OK")
        {
          this.mensaje=responseGenerico.descripcionEstado;
          console.log(this.mensaje);
          //this.presentFailLogin(this.mensaje);
          this.router.navigate(['login']);
        }
        else
        {
          this.mensaje= responseGenerico.descripcionEstado;
          console.log(this.mensaje);
          //this.presentFailLogin(this.mensaje);
        }
      }
    )

  }

  constructor(
    public router: Router,
    private http:HttpClient,
    public registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }

}
