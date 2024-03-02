import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotor',
  templateUrl: './promotor.component.html',
  styleUrls: ['./promotor.component.css']
})



export class PromotorComponent {



  firstName!:string;
  lastName!:string;
  email!:string;
  telefon!:any;
  comboBox!:any;

  podatki!:string;
  color!:any;
  backgroundColor!:string;

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('promotorForm', {static: false}) promotorForm!: NgForm;

  ngOnInit() {
    this.color = localStorage.getItem('color');
    const myString: string = this.color.toString();
    this.backgroundColor = myString;


    
  }

  isSubmitted = false; // Add this line

  dodaj(form: NgForm) {
    this.isSubmitted = true; // Add this line

    console.log(this.telefon);
    console.log(this.comboBox);
    if(form.valid) {
      const httpOptions = {
        headers: new HttpHeaders().set(
          'Content-Type',  'application/x-www-form-urlencoded' 
        )
      };
      const url = 'https://spiritofsakura.eu/hrastnik/dodaj_promotor.php';
      const body = new URLSearchParams();
      body.set('ime', this.firstName);
      body.set('priimek', this.lastName);
      body.set('eposta',this.email);
      body.set('telefon',this.telefon);
      body.set('sola',this.comboBox);
      
  
      this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
        this.podatki = data;
        if(this.podatki== 'Dela')
        {
          this.router.navigate(['/prijavnice_admin']);
        }
        else if(this.podatki == 'Obstaja')
        {
          alert("Ta promotor že obstaja!");
        }
        else
        {
            alert("Napaka");
        }
      })
    }
  }
  
}
