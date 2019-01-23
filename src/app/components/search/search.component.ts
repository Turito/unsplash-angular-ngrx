import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() query: string;
  @Output() queryDone: EventEmitter<string> = new EventEmitter();

  constructor() {}

}
