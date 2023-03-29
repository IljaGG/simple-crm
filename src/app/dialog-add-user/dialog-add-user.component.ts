import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user : User = new User();
  birthdate!: Date;
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  safeUser() {
    this.user.birthDate = this.birthdate.getTime();
    console.log('Current user: ', this.user);
    this.loading = true;
    this.firestore.collection('users').add(this.user.toJSON()).then((result:any) => {
      this.loading = false;
      console.log('Adding user finished', result);
      this.dialogRef.close();
   });
  }
  ngOnInit(): void {


  }

 

}
