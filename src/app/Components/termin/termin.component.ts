import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';





@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.css']
})
export class TerminComponent {

  

  disabledDates:any[] = [];
  color!:any;
  selectedDate: Date | null = null;
  backgroundColor!:string;

  podatki!:any; // Add this line
  datum!: string; 

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('promotorForm', {static: false}) promotorForm!: NgForm;

  ngOnInit() {
    this.color = localStorage.getItem('color');
    const myString: string = this.color.toString();
    this.backgroundColor = myString;


    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      )
    };
    const url = 'https://spiritofsakura.eu/hrastnik/pridobi_datum.php';
      const body = new URLSearchParams();
      body.set('datum', this.datum);

      this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
        this.disabledDates = data;

        console.log(this.disabledDates);

      });

      
    
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    
    if (this.selectedDate) {
      const year = this.selectedDate.getFullYear();
      // getMonth() returns month index starting from 0 (January), so we add 1 to get the actual month number
      const month = ('0' + (this.selectedDate.getMonth() + 1)).slice(-2);
      const day = ('0' + this.selectedDate.getDate()).slice(-2);
      this.datum = `${year}-${month}-${day}`;
      console.log(this.datum);
    }
  }
  
  
  
  dateFilter = (date: Date | null): boolean => {
    if (date) {
      const dateString = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
      return !this.disabledDates.includes(dateString);
    }
    return true;
  };

  isSubmitted = false; // Add this line


  dodaj(form: NgForm) {
    this.isSubmitted = true; // Add this line


    
    if(form.valid) {  
      const httpOptions = {
        headers: new HttpHeaders().set(
          'Content-Type',  'application/x-www-form-urlencoded' 
        )
      };
      const url = 'https://spiritofsakura.eu/hrastnik/datum.php';
        const body = new URLSearchParams();
        body.set('datum',this.datum);
  
        this.http.post<any>(url, body.toString(),httpOptions ).subscribe(data => {
          this.podatki = data;
  
          if(this.podatki.status == 'Obstaja')
          {
            alert("Ta datum že obstaja!");
          }
          else if(this.podatki.status == 'Ne obstaja')
          {
            this.router.navigate(['/prijavnice_admin']);
          }
          else
          {
            alert("Napaka");
          }
  
        });
      }
    }
  }
