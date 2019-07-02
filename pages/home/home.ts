import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  infoInput;
  typeOptions = [
    '',
    'Sistema Rodoviario',
    'Sistema Sanitario'
  ];

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.infoInput = this.formBuilder.group({
      typeOptions2: '',
      description: '',
      latLng: this.formBuilder.group({
        lat: Number,
        lng: Number
      })
    });
  }

  onSubmit(data){
    console.warn(data);
    this.infoInput.reset();
  }

}
