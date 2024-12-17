import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  @Output() confirm = new EventEmitter<boolean>();

  onCancel(): void {
    this.confirm.emit(false); // Emit false on cancel
  }

  onConfirm(): void {
    this.confirm.emit(true); // Emit true on confirm
  }
}
