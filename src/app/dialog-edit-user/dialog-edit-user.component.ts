import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../user/user.component';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user: User = User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  safeUser() {

  }

}
