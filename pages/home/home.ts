import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  infoInput;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.infoInput = this.formBuilder.group({
      typeOptions: [
        {id: '1', viewValue: 'Sistema Rodoviario'},
        {id: '2', viewValue: 'Sistema Sanitario'}
      ],
      lat: Number,
      lng: Number,
      description: ''
    });
  }

  onSubmit(data){
    console.warn(data);
  }

}
