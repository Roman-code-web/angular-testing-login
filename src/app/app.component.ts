import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declaro variables
  title = 'Login';
  formLogin:FormGroup;
  mensajeError={
    usuario:'',
    password:''
  }
  mensajeEnviado!:string;
  mensajelogueado="Ingreso";
  //constructor
  constructor(private frmb : FormBuilder){
    this.formLogin=this.frmb.group({
      usuario:['',
      [
        Validators.required,
        Validators.minLength(5)
      ]
      ],
      password:['',
      [
        Validators.required,
        Validators.minLength(4)
      ]
      ]
    })
  }

  //funcion
  login(){
    if(this.formLogin.valid){
      this.mensajeEnviado="Datos enviados correctamente";
      setTimeout(() => {
        this.mensajeEnviado="";
      }, 2000);

    }else{
      this.mensajeEnviado="";
    }
    this.mensajelogueado;
   
  }
 //validacion formulario
  validacion(name: string) {
    if(this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty)){
      if(this.formLogin.get(name)?.errors?.['required']){
        if(name=='usuario'){
          this.mensajeError.usuario="El campo es requerido"; 
        }else{
          this.mensajeError.password="El campo es requerido";
        }
        
        
      }else if(this.formLogin.get(name)?.errors?.['minlength']){
        if(name=='usuario'){
          this.mensajeError.usuario="Mínimo de caracteres 5"; 
        }else{
          this.mensajeError.password="Mínimo de caracteres 4";
        }
        
      }
    }
    return this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty);
  }
}
