import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterService } from './../../../models-services/register/register.service';
import { Router } from '@angular/router';
import { User } from './../../../models-project/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //ATRIBUTO
    user: User = {
      email:"",
      password:"",
      nome:""
    }
  
  constructor(private registerService: RegisterService,
              private router:Router) { }
          
  @Output()
   
  ApplicantCreated = new EventEmitter<User>();

  ngOnInit(): void {

  }

    //METODO PARA CRIAR UM USER
    createUser(): void{
      //enviar o objeto para o serviço para que o serviço envie para a base de dados
      this.registerService.create(this.user).subscribe(()=>{

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if(!re.test(this.user.email)){
        this.registerService.errorHandler('E-mail is not correct!')
        return false;
      
      }else if (this.user.email === '' || this.user.password === '') {
        this.registerService.errorHandler('E-mail and Password is required!')
        return false;

      }else if (this.user.password.length < 5){
        this.registerService.errorHandler('Password need 5 caracteres')
        return false;
    
      }else{
        this.registerService.showMessage('Successfully!')//Passar a seguinte mensagem para o serviço
        this.router.navigate(['/']);//mudar em seguida a rota do usuário
      }
    })
  }
}
