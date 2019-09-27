import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
listform: Object;


  constructor(private http:HttpClient,private router:Router,private activatedroute:ActivatedRoute) { 
  
  }

  ngOnInit() {
  this.loaddata();  
  }
  loaddata()
  {
  this.http.get('https://5d11ae9a84e9060014576412.mockapi.io/products')
  .toPromise()
  .then((response)=>{
    this.listform=response;
   console.log(response);
  },(error)=>{
    console.log(error);
  })
  }
  
  
  deletedata(id)
  {
    let confirm1=confirm("are u sure to delete");
    if(confirm1==true)
    {
      this.http.delete(`https://5d11ae9a84e9060014576412.mockapi.io/products/${id}`)
      .toPromise()
      .then(()=>{
        this.loaddata();
      },(error)=>{
        console.log(error);
      })
    }
  }

 
  
  }





