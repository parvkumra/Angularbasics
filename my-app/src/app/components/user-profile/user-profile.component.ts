import { Component } from '@angular/core';
import { UserProfilecompComponent } from '../user-profilecomp/user-profilecomp.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserProfilecompComponent,DropdownComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
