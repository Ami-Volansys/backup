import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form;
  ngOnInit() {
    this.form = new FormGroup({
      username:new FormControl(""),
      password:new FormControl(""),
    });
  }
  OnSubmit = function(user){
    console.log(user);
  }
  
  func1 =  function(){

    let number = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let  x = number[Math.floor(Math.random() * number.length)];
    for (var i=0;i<4;i++)
    {
       x = x + number[Math.floor(Math.random() * number.length)];
   }
   document.getElementById("pastedata").innerHTML = x;

           
  }
  
  func2 = function()
  {
      
     let  x= (<HTMLInputElement>document.getElementById("pastedata")).innerHTML;
      
     let y =  (<HTMLInputElement>document.getElementById("printdata")).value;
     
      if(!y)
      {
        alert("Enter Captcha");
      }
      else if(x!=y)
      {
        alert("captcha is invalid");
      }
  }

  constructor() { }

}
  
