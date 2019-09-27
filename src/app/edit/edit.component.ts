import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
details;
  constructor(private http:HttpClient,private activatedroute:ActivatedRoute,private router:Router) {
    this.details=new FormGroup({
      'user':new FormControl(),
      'password':new FormControl()
    })
   }
  ngOnInit() {
    console.log(this.activatedroute.snapshot.paramMap.get('id'));
    this.http.get(`https://5d11ae9a84e9060014576412.mockapi.io/products/${this.activatedroute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response:any)=>{
      this.details.setValue({
        'user':response.user,
      'password':response.password
      })
    },(error)=>{
      console.log(error);
    })
    
  }

  submited()
  {
    console.log(this.details.value)
    this.http.put(`https://5d11ae9a84e9060014576412.mockapi.io/products/${this.activatedroute.snapshot.paramMap.get('id')}`,this.details.value)
    .toPromise()
    .then(()=>{
      this.router.navigate(['list'])
    },(error)=>{
      console.log(error);
    })
  }

}
