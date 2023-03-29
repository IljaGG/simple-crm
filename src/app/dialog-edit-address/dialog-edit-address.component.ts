import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../user/user.component';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {

  user: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  saveAddress() {
   
  }
}
