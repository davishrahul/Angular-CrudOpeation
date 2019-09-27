import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http'; 
import {Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
details;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.details=new FormGroup({
      'user':new FormControl(),
      'password':new FormControl()
    })
  }
  submited()
  {
    console.log(this.details.value);
    this.http.post(`https://5d11ae9a84e9060014576412.mockapi.io/products`,this.details.value)
    .toPromise()
    .then((response)=>{
      this.router.navigate(['list']);
    },(error)=>{
      console.log(error);
    } )
  }
  

}
