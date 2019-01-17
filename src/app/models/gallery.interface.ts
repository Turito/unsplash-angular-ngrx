import { IPhoto } from './photo.interface';

export interface IGallery {
  total: number;
  total_pages: number;
  results: IPhoto[];
}
