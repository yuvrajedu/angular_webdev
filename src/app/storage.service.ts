import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(): void{
    localStorage.getItem('myVariable');
  }

  save(text: string) {
    localStorage.setItem('myVariable', text);
  }

  remove(){
    localStorage.removeItem('myVariable');
  }




}
