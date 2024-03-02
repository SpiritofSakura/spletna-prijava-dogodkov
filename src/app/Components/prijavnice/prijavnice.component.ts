import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prijavnice',
  templateUrl: './prijavnice.component.html',
  styleUrls: ['./prijavnice.component.css']
})
export class PrijavniceComponent implements OnInit {

  podatki: any[] = [];
  sola: any;
  backgroundColor!:string;
  color!:any;

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('prijavniceForm', {static: false}) prijavniceForm!: NgForm;

  ngOnInit() {


    this.color = localStorage.getItem('color');
    const myString: string = this.color.toString();
    this.backgroundColor = myString;

    if(history.state.sola)
    {
      this.sola = history.state.sola;
    }
    this.sola = localStorage.getItem('sola');
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',  'application/x-www-form-urlencoded' 
      ),
    };
    const body = new URLSearchParams();
    body.set('sola',this.sola);
    this.http.post<any[]>('https://spiritofsakura.eu/hrastnik/obrazec_sola.php',body.toString(), httpOptions).subscribe(data => {
      this.podatki = data;
      
    });
    
  }

  prikaziObrazec(item : any): void{
    
    if(this.sola != "ŠCV")
    {
      this.router.navigate(['/prijavnice1'],{state: {data:item}});
    }
    else
    {
      this.router.navigate(['/obrazec'],{state: {data: item}});
    }
    
  }

  logout(){
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['']);
  }
}
