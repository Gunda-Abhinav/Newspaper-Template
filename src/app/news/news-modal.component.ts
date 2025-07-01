
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html'
})
export class NewsModalComponent {
  @Input() newsItem: any;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
