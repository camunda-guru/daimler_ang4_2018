import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
    selector:'show-dialog',
    templateUrl:'./app/accounts/accounts.showdialog.html',
    styleUrls:['./app/accounts/accounts.showdialog.css']

})
export class ShowDialogComponent
{

    constructor( public dialogRef: MatDialogRef<ShowDialogComponent>,
                 @Inject(MAT_DIALOG_DATA) public data: any)
    {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}