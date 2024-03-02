import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-arhiv',
  templateUrl: './arhiv.component.html',
  styleUrls: ['./arhiv.component.css']
})
export class ArhivComponent implements OnInit{
  podatki: any[] = [];
  sola: any;

  color!:any;
  backgroundColor!:string;

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('arhivForm', {static: false}) arhivForm!: NgForm;

  ngOnInit() {
    this.color = localStorage.getItem('color');
    const myString: string = this.color.toString();
    this.backgroundColor = myString;

    if(history.state.sola)
    {
      this.sola = history.state.sola;
    }
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      ),
      observe: 'body', // observe the full HTTP response
      responseType: 'text' // Set the response type to 'text'
    };
    this.http.post<any[]>('https://spiritofsakura.eu/hrastnik/arhiv.php',httpOptions).subscribe(data => {
      this.podatki = data;
      
    });
    
  }

  /*prikaziObrazec(item : any): void{
    
    if(this.sola != "ŠCV")
    {
      this.router.navigate(['/prijavnice1'],{state: {data:item}});
    }
    else
    {
      this.router.navigate(['/obrazec'],{state: {data: item}});
    }
    
  }*/

}
