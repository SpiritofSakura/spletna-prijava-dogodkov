import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-obrazec',
  templateUrl: './obrazec.component.html',
  styleUrls: ['./obrazec.component.css']
})
export class ObrazecComponent implements OnInit{

  data: any;
  backgroundColor!:string;
  podatki: any[] = [];
  promotor!: string;

  color!:any;
  button!: string;
  podatki1 = "";

  




  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}

  @ViewChild('obrazecForm', {static: false}) obrazecForm!: NgForm;


  ngOnInit(): void {
    this.color = localStorage.getItem('color');
    const myString: string = this.color.toString();
    this.backgroundColor = myString;
    if(history.state.data)
    {
      this.data = history.state.data;
      
    }
    else {
      console.log("error");
    }

    
  }



  sprejmi()
  {
    this.button = "sprejmi";
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      )
    };
    const url = 'https://spiritofsakura.eu/hrastnik/sprejmi.php';
    const body = new URLSearchParams();
    body.set('id', this.data.id);
    body.set('akcija',this.button);
    body.set('email',"tjas.jelen@gmail.com");
    
    

    this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
      this.podatki1 = data;
      if(this.podatki1== 'Success')
      {
        this.router.navigate(['/prijavnice_admin']);
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
    const url = 'https://spiritofsakura.eu/hrastnik/sprejmi.php';
    const body = new URLSearchParams();
    body.set('id', this.data.id);
    body.set('akcija',this.button);
    
    

    this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
      this.podatki1 = data;
      if(this.podatki1== 'Success')
      {
        this.router.navigate(['/prijavnice_admin']);
      }
      else
      {
        console.log("Napaka");
      }
    })
  }
}
