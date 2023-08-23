import { Component } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private myStorage: StorageService) { }


  home = 'Hey, hello this is home'
 // on creation of component
  ngOnInit() {
    this.home = localStorage.getItem('myVariable') || 'Default Value';
  }

  // to save the variable
  save(text: any) {
    this.myStorage.save(text);
  }

  // to remove the variable
  remove() {

    this.ngOnDestroy();
  }

  // on component going out of scope
  ngOnDestroy(){
    this.myStorage.remove();
  }
}
