import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ApiService } from './api';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})


export class PrijavaComponent {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  
  username!: string;
  password!: string;
  sola!:string;
  message!: string;
  backgroundColor !: string;
  
  podatki = "";

  

  @ViewChild('loginForm', {static: false}) loginForm!: NgForm;
  

  login() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      )
    };
    const url = 'https://spiritofsakura.eu/hrastnik/prijava.php';
    const body = new URLSearchParams();
    body.set('ime', this.username);
    body.set('pass', this.password);
    body.set('sola',this.sola);
    

    this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
      this.podatki = data;
      if(this.podatki== 'Dela')
      {
        localStorage.setItem('isLoggedIn','true');
        console.log(localStorage.getItem('isLoggedIn'));
        if(this.sola == "ŠCV")
        {
            this.router.navigate(['/prijavnice_admin'],{state:{sola: this.sola}});
        }
        else
        {
          this.router.navigate(['/prijavnice'],{state: {sola: this.sola}});
        }
        
      }
      else
      {
        //Ne dela
      }
    })
  }
    ngOnInit(){
      this.route.queryParams.subscribe(params => {
        
        const buttonId = params['button'];
        console.log(buttonId);
        switch (buttonId) {
          case "1":
            this.sola = "ERŠ";
            this.backgroundColor = '#0096db';
            localStorage.setItem('color', '#0096db');
            localStorage.setItem('sola',this.sola);
            break;
          case "2":
            this.sola = "ŠSD";

            this.backgroundColor = '#f259a1';
            localStorage.setItem('color', '#f259a1');
            localStorage.setItem('sola',this.sola);
            break;
          case "3":
            this.sola = "ŠSGO";
            this.backgroundColor = '#a6ce38';
            localStorage.setItem('color', '#a6ce38');
            localStorage.setItem('sola',this.sola);
            break;
          case "4":
            this.sola = "GIM";
            this.backgroundColor = '#fece00';
            localStorage.setItem('color', '#fece00')
            localStorage.setItem('sola',this.sola);
            break;
          default:
            this.sola = "ŠCV"; 
            this.backgroundColor='#ec1163';
            localStorage.setItem('color', '#ec1163')
            localStorage.setItem('sola',this.sola);
            break;
        }
      });
    }
  }


  

