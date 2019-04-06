import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
editMode =false;
name='sathwiq';
email='sathwiq301198@gmail.com';
class='6sem';
mobile=9492232468;
id='16bt6cs058';
company='Ps';
position='web designer';

hide = true;
  constructor() { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.editMode=false;
    this.name=form.value.name;
    
this.email=form.value.email;
this.class=form.value.class;
this.mobile=form.value.no;
this.id=form.value.id;
this.company=form.value.company;
this.position=form.value.position;

  }
  a(){
    this.editMode=true;
  }
  ab(){
    
  }
}
