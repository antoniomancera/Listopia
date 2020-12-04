export interface Datafilms {
  page:number,
  results:film[],
  total_pages: number,
  total_results:number
}

export interface film{
  adult:boolean,
  genre_id:number[],
  id:number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity:number,
  poster_path:string,
  release_date:Date,
  title:string,
  video: boolean,
  vote_average: number,
  vote_count:number,
}

