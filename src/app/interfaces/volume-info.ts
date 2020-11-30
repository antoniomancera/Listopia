import { ImageLinks } from './image-links';

export interface VolumeInfo {
  title:string,
  subtitle:string,
  authors:string[],
  publisher:string,
  publisedDate:number,
  description:string,
  pageCount:number,
  printType:string,
  averageRating:number,
  ratingCount:number,
  maturityRating:string,
  imageLinks:ImageLinks,
  language:string
}
