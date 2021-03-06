import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { registor } from '../User/shared/user.model';
import { UserService } from '../User/shared/user.service';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})
export class RegistorComponent {

     registors:any=[];
  constructor(private userService:UserService,private router:Router) { }
  show(form:{value:registor;}){
  console.log(form.value);
   this.userService.adduserdb(form.value).then(res =>{
    alert("new user created");
    this.router.navigate(['/registor-db']);
  },
  err =>{
    alert('error in creating new user');
  });

}




}
