import { Component, Input, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';
import { ICover } from '../../models/cover.interface';

@Component({
  selector: 'app-photo-thumb',
  templateUrl: './photo-thumb.component.html',
  styleUrls: ['./photo-thumb.component.css']
})

export class PhotoThumbComponent implements OnInit {

  @Input() photoId: string;
  width: number = 400;
  height: number = 400;

  cover: ICover;
  show: boolean = false;

  constructor( private _unsplashService: UnsplashService ) { }

  ngOnInit() {
    this._unsplashService.getPhoto( this.photoId, this.width, this.height ).subscribe( data => {
      this.cover = data;
      this.show = true;
    });
  }
}
