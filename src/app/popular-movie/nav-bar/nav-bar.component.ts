import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  search = '';
  @Output() change = new EventEmitter();

  constructor() {}
  onSubmit() {
    this.change.emit(this.search);
  }
}
