import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arhiv-sole',
  templateUrl: './arhiv-sole.component.html',
  styleUrls: ['./arhiv-sole.component.css']
})
export class ArhivSoleComponent {

  podatki: any[] = [];
  sola: any;

  color!:any;
  backgroundColor!:string;

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('arhivsolaForm', {static: false}) arhivsolaForm!: NgForm;

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
      observe: 'body', // observe the full HTTP response
      responseType: 'text' // Set the response type to 'text'
    };
    this.http.post<any[]>('https://spiritofsakura.eu/hrastnik/arhiv_sola.php',httpOptions).subscribe(data => {
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
  logout(){
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['']);
  }
}
