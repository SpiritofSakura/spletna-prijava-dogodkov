import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  

  constructor(private router: Router) {}

  buttonClicked(button: string): void{
    
    this.router.navigate(['/prijava'], {queryParams: {button: button}});
  }

}
