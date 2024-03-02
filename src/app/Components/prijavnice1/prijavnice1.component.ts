import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prijavnice1',
  templateUrl: './prijavnice1.component.html',
  styleUrls: ['./prijavnice1.component.css']
})
export class Prijavnice1Component implements OnInit{

  data: any;
  backgroundColor!:string;
  podatki: any[] = [];
  promotor!: string;

  color!:any;
  button!: string;
  podatki1 = "";


  constructor (private router: Router,private http: HttpClient) {};
  @ViewChild('prijavnice1Form', {static: false}) prijavnice1Form!: NgForm;
  
  ngOnInit(){
    this.color = localStorage.getItem('color');
    const myString: string = this.color.toString();
    this.backgroundColor = myString;
    if(history.state.data)
    {
      this.data = history.state.data;
      
    }
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      ),
      observe: 'body', // observe the full HTTP response
      responseType: 'text' // Set the response type to 'text'
    };
    this.http.post<any[]>('https://spiritofsakura.eu/hrastnik/promotor.php',httpOptions).subscribe(data => {
      this.podatki = data;
      

      
    });
    
  }

  sprejmi()
  {
    this.button = "sprejmi";
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      )
    };
    console.log(this.data.id);
    const url = 'https://spiritofsakura.eu/hrastnik/sola_sprejmi.php';
    const body = new URLSearchParams();
    body.set('id', this.data.id);
    body.set('akcija',this.button);
    /*body.set('email', 'tjas.jelen@gmail.com'); // Replace with the actual email
    body.set('subject', 'SPREJETO');
    body.set('message', 'Vaš obrazec je bil sprejet!');*/
    
    this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
      this.podatki1 = data;
      if(this.podatki1== 'Success')
      {
        this.router.navigate(['/prijavnice']);
      }
      else
      {
        console.log("Napaka");
      }
    })
  }

  zavrni()
  {
    this.button = "zavrni";
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      )
    };
    const url = 'https://spiritofsakura.eu/hrastnik/sola_sprejmi.php';
    const body = new URLSearchParams();
    body.set('id', this.data.id);
    body.set('akcija',this.button);
    
    

    this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
      this.podatki1 = data;
      if(this.podatki1== 'Success')
      {
        this.router.navigate(['/prijavnice']);
      }
      else
      {
        console.log("Napaka");
      }
    })
  }


}
