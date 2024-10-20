import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user-profilecomp',
  standalone: true,
  imports: [],
  templateUrl: './user-profilecomp.component.html',
  styleUrl: './user-profilecomp.component.css'
})
export class UserProfilecompComponent {
  @Input() label: string='';
  @Input() placeholder: string='';
}
