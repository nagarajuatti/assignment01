import { Component } from '@angular/core';

interface UserData {
  id: number;
  fn: string;
  mn: string;
  ln: string;
  email: string;
  phone: string;
  Role: string;
  place: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  usersData: UserData[] = [];
  enableRefresh: boolean = false;
  showTable: boolean = false;
  
  users: UserData[] = [
    {
    "id": 0,
    "fn": "Atti" , 
    "mn": "Naga", 
    "ln": "Raju", 
    "email": "attinaga@gmail.com", 
    "phone":"8978989551", 
    "Role": "Admin", 
    "place":"Anantapur"},
   {
    "id": 1,
    "fn": "Atti" , 
    "mn": "Pragna", 
    "ln": "Priya", 
    "email": "pragna@gmail.com", 
    "phone":"8978989551", 
    "Role": "Guest", 
    "place":"ATP"
   },
   {
    "id": 2,
    "fn": "Atti" , 
    "mn": "Dussu", 
    "ln": "Chakri", 
    "email": "chakri@gmail.com", 
    "phone":"8978989551", 
    "Role": "User", 
    "place":"KLD"
   }
  ];

  originalData: UserData[] = [];
  lastUpdatedData: UserData[] = [];

  isEditEnabled: boolean[] = [];

  constructor() {}
  loadData(): void {
    this.usersData = this.users.map(user => ({ ...user }));
    this.enableRefresh = true;
    this.showTable = true;
    this.isEditEnabled = new Array(this.users.length).fill(false);
    this.originalData = this.users.map(user => ({ ...user }));
    this.lastUpdatedData = this.users.map(user => ({ ...user })); 
  }
  editUser(index: number): void {
    this.isEditEnabled[index] = true;
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    this.usersData.splice(index, 1);
    this.originalData.splice(index, 1);
    this.isEditEnabled.splice(index, 1);
  }

  saveUser(index: number): void {
    this.isEditEnabled[index] = false;
    this.lastUpdatedData[index] = { ...this.usersData[index] };
  }

  cancelEdit(index: number): void {
    this.isEditEnabled[index] = false;
    this.usersData[index] = { ...this.lastUpdatedData[index] };
  }
}
