import { Component } from '@angular/core';
import { UserProfilecompComponent } from '../user-profilecomp/user-profilecomp.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    UserProfilecompComponent,
    DropdownComponent,
    FormsModule // Include FormsModule here
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css' // Fix typo: change styleUrl to styleUrls
  ]
})
export class UserProfileComponent {
  dob: string = ''; 
  age: number | null = null; 

  calculateAge() {
    if (this.dob) {
      const dobDate = new Date(this.dob);
      const today = new Date();
      this.age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
 if(monthDiff<=0){ this.age=0; return;}
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        this.age--;
      }
    } else {
      this.age = null; 
    }
  }
}
