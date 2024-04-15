  
  export interface Country {
    country_id: string;
    probability: number
  }



  export interface Vardai{
    name:string;
   country: Country[];
  }