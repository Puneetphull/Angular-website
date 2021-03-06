import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { UserService } from '../User/shared/user.service';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.css']
})
export class InternsComponent implements OnInit {

  constructor(private userService:UserService) { }
  ngOnInit(){
    console.log(this.userService.getUser());

  }
  User='';
  message='';
  @Output() newpost:any=[] ;
 addmessage(){
   const Post = {User:this.User,message:this.message};
   console.dir(Post);
   this.newpost.push(Post);

}



}
