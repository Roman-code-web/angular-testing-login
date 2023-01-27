import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  //app creado
  it('app creada', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //title=Login
  it(`El title debe ser Login`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });

  //render del titulo
  it('Render del title en h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Login');
  });

  //formulario invalido
  it('Formulario invalido debe ser true al inicio', () => { 
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    fixture.detectChanges();
    expect(app.formLogin.invalid).toBeTruthy()
   })
   //formulario valido si hay datos
   it('formulario valido debe ser true si hay datos',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    fixture.detectChanges();
    let usuario=app.formLogin.controls['usuario'];
    let password=app.formLogin.controls['password'];
    
    usuario?.setValue('AlondraRoman');
    password?.setValue('1234');

    expect(app.formLogin.valid).toBeTruthy();
   })
   
   //prueba de boton 
   it('boton click Ingresar',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    const btnIngresar=fixture.debugElement.query(By.css('.button'));
    btnIngresar.nativeElement.click();
    
    expect(app.mensajelogueado).toEqual('Ingreso');
   });

   //prueba de mensaje enviado  si el form es valido o invalido comprobamos con console log solo se cambia los valores en el setvalue
   it('envio de mensaje cuando doy click y form es valido o invalido',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    const btnIngresar=fixture.debugElement.query(By.css('.button'));
    const usuario=app.formLogin.controls['usuario'];
    const password=app.formLogin.controls['password'];
    usuario?.setValue('alondraSelene')
    password?.setValue('1234')
    btnIngresar?.nativeElement.click();
    if(app.formLogin.valid){
      expect(app.mensajeEnviado).toEqual('Datos enviados correctamente');
      console.log('---------valido------------');
      console.log('---------form correcto------------');
    }else{
      expect(app.mensajeEnviado).toEqual('');
      console.log('---------INvalido------------');
      console.log('---------form incorrecto---------');
    }
    
   })

   
});
