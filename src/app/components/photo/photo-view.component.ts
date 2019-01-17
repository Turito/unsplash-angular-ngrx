import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IPhoto } from '../../models/photo.interface';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent implements OnInit {
  @Input() photo: IPhoto;
  @Output() goTo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

}
