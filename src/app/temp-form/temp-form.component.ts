import { Component } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent {

  constructor(private myStorage: StorageService){}

  user = {
    email: '',
    pass: ''
  }

onSubmit(email: string, pass: string){
  this.myStorage.save(email);
}

}
