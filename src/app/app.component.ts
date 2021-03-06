import { Component} from '@angular/core';
import { UserService } from './User/shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userservice:UserService){}
  title = 'Project-Web4';

}





