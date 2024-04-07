import { Component, OnInit } from '@angular/core';
import { LoginDetectorService } from '../../utils/services/login-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UI-UX';

  ngOnInit() {
    
  }

  constructor(private authService: LoginDetectorService) { }

  public LoginOrRegisterDetector(){
    return this.authService.showHeaderAndFooter$;
  }
}
