import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterRequest } from 'src/app/auth/types/registerType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output() registerOutput = new EventEmitter<RegisterRequest>();

  userRequestRegister = new RegisterRequest();  

  onSubmit(event : any) : void {
    this.registerOutput.emit(event);
  }
}
