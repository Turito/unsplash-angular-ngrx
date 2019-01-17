import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IGallery } from '../../models/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() photos: IGallery;
  @Output() photoSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  viewPhoto(id: number) {
    this.photoSelected.emit(id);
  }
}
