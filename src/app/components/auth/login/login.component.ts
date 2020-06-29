import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoginService } from './../../../servicios/login.service';
import { ResponseGeneric } from 'src/app/Models/responseGeneric-modal';
import { Usuario } from 'src/app/Models/usuario-model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  idUsuario: string;
  contrasena: string;
  correo: String;

  mensaje: String;
  dataReturn:any="";
  dataReturn2:any="";

  responseIngreso : string;

  ingreso(){

    var usuario = {
      metodo: "ingreso",
      idUsuario: this.idUsuario,
      contrasena: this.contrasena
    }


    this.loginService.userplay(usuario).subscribe(
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
          this.presentFailLogin(this.mensaje);
          
          this.loginService.getUser(usuario).subscribe(
            (response2) => {
              this.dataReturn2 = JSON.stringify
              (response2);
              console.log('Response2: '+this.dataReturn2);
              let getUsuario= new Usuario(JSON.parse(this.dataReturn2));
              console.log('Usuariog: '+getUsuario);
              switch(getUsuario.idTipoUsuario)
              {
                case "0":

                break;
                case "1":

                break;
                case "2":
                  if(getUsuario.flagCase=="0")
                  {
                    console.log('terminar registro');
                    this.router.navigate(['registro',getUsuario]);
                  }
                  else
                  {
                    console.log('Ve a estudiante');
                    this.router.navigate(['estudiante',getUsuario]);
                  }
                break;
              }
            }
          )
          
          this.router.navigate(['login']);
        }
        else
        {
          this.mensaje= responseGenerico.descripcionEstado;
          console.log(this.mensaje);
          this.presentFailLogin(this.mensaje);
        }
      }
    )
  }

  async presentFailLogin(mensaje: String) {
    
  }

    olvidoContrasena(){

      var usuario={
        correo: this.correo
      }

      this.loginService.forgetmail(usuario).subscribe(
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
          }
          else
          {
            this.mensaje= responseGenerico.descripcionEstado;
            console.log(this.mensaje);
          }
        }
      )
    }
  constructor(
    public router: Router,
    private http : HttpClient,
    public loginService: LoginService,
    
  ) { }

  ngOnInit(): void {
  }



}
