import { Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(private userDetailsService: UserDetailsService) { }

  users: any[] = [];

  ngOnInit(): void {
    this.userDetailsService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
