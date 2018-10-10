import {Component} from "@angular/core";
import {MatDialog} from "@angular/material";
import {ShowDialogComponent} from "./accounts.showdialog";


@Component({
    selector:'daimler-accounts',
    templateUrl:'./app/accounts/accounts.component.html',
    styleUrls:['./app/accounts/accounts.component.css']
})
export class AccountsComponent
{

    private userList:any;

    constructor(private matDialog:MatDialog)
    {
       this.userList=[{
           "userName":"sachin",
           "password":"tendulkar"

       },
           {
               "userName":"robin",
               "password":"uthappa"

           },
           {
               "userName":"dhoni",
               "password":"Mahindera"

           }]
    }
    opendialog()
    {
         let dialogRef=  this.matDialog.open(ShowDialogComponent,{
               width: '250px',
               data: {users:this.userList}
           });

         dialogRef.afterClosed().subscribe(response=>{
             console.log(response);
         })
    }


}