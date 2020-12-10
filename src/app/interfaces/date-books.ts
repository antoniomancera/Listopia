import { NumberSymbol } from '@angular/common';
import { ExpandSubscriber } from 'rxjs/internal/operators/expand';
import { Url } from 'url';
import { Datafilms, film } from './datafilms';


export interface DateBooks {
 kind:string,
 totalItems:number,
 items:Book[]
}
export interface Book {
kind:string,
id:string,
etag:string,
selfLink:string,
volumeInfo: VolumeInfo,
saleInfo:SaleInfo,
accessInfo:AccessInfo,
searchInfo:SearchInfo,
films:Datafilms
}
export interface VolumeInfo {
title:string,
subtitle:string,
authors:string[],
publisher:string,
publisedDate:string,
description:string,
industryIdentifiers:IndustryIdentifiers[],
readingModes:ReadingModes,
pageCount:number,
printType:string,
categories:string[],
maturityRating:string,
allowAnonLogging:boolean,
contentVersion:string,
panelizationSummary:PanelizationSummary,
averageRating:number,
ratingCount:number,
imageLinks:ImageLinks,
language:string,
previewLink:string,
infoLink:string,
canonicalVolumeLink:string
}

export interface ImageLinks {
smallThumbnail:string,
thumbnail:string
}


export interface IndustryIdentifiers{
    type:string,
    identifier:string
}

export interface ReadingModes{
    text:boolean,
    image:boolean
}

export interface PanelizationSummary{
    containsEpubBubbles:boolean,
    containsImageBubbles:boolean
}

export interface SaleInfo{
    country:string,
    saleability:string,
    isEbook:boolean
}

export interface AccessInfo{
    country:string,
    viewability:string,
    embeddable:boolean,
    publicDomain:boolean,
    textToSpeechPermission:string,
    epub:Epub,
    pdf:Pdf,
    webReaderLink:string,
    accessViewStatus:string,
    quoteSharingAllowed:boolean
}

export interface SearchInfo{
    textSnippet:string
}

export interface Epub{
    isAvailable:boolean
}

export interface Pdf{
    isAvailable:boolean
}
