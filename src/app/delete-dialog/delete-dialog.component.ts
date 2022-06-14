import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'delete-dialog',
  templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent implements OnInit {
  title: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteDialogComponent>
  ) { }

  ngOnInit(): void {
    this.title = this.data.name;
  }

  delete() {
    this.dialogRef.close(
      true
    );
  }
}
