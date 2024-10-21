import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profilecomp',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './user-profilecomp.component.html',
  styleUrls: ['./user-profilecomp.component.css']  // Fix styleUrl to styleUrls
})
export class UserProfilecompComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() style: string = '200px';
}
