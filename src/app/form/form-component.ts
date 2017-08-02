import { Component , OnInit} from '@angular/core';

@Component({
  moduleId: module.id,  
  selector: 'form',
  templateUrl: 'form-component.html',
  styleUrls: ['form-component.css']
})
export class FormComponent implements OnInit{
  userName:string='';
  password:string='';
  data:object={};
  constructor(){
  }
  title = 'Login to Continue';  
  ngOnInit(){
    formSubmit(data) {
    

    }
  }
}
