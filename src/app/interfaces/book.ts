import { Url } from 'url';
import { VolumeInfo } from './volume-info';

export interface Book {
kind:string,
id:string,
etag:string,
selfLink:string,
volumeInfo: VolumeInfo[]
}
