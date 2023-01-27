import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
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
    
    usuario.setValue('AlondraRoman');
    password.setValue('1234');

    expect(app.formLogin.valid).toBeTruthy();
   })
});
