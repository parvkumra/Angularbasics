import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserProfilecompComponent } from '../user-profilecomp/user-profilecomp.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxFileDropModule, NgxFileDropEntry } from 'ngx-file-drop'; // Import NgxFileDropEntry
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    UserProfilecompComponent,
    DropdownComponent,
    FormsModule,
    NgxFileDropModule,CommonModule // Include FormsModule here
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] , // Fix typo: change styleUrl to styleUrls
})
export class UserProfileComponent {
  dob: string = ''; 
  age: number | null = null; 
  files: NgxFileDropEntry[] = [];

  calculateAge() {
    if (this.dob) {
      const dobDate = new Date(this.dob);
      const today = new Date();
      this.age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        this.age--;
      }
    } else {
      this.age = null; 
    }
  }

  onFileDropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const file = droppedFile.fileEntry as FileSystemFileEntry;
        file.file((file: File) => {
          console.log('File dropped:', file);
          // You can now upload the file or process it as needed
        });
      } else {
        const dir = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log('Dropped directory:', dir);
      }
    }
  }

  fileOver(event: any) {
    console.log('File over:', event);
  }

  fileLeave(event: any) {
    console.log('File leave:', event);
  }
}
