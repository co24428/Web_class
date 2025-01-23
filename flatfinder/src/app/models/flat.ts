export interface Flat {
    id: string;
    city: string;
    streetName: string;
    streetNumber: number;
    areaSize: number;
    hasAC: boolean;
    yearBuilt: number;    
    rentPrice: number;
    dateAvailable: Date;
    owner: string;
    imgLink: string;
    isFavorite?: boolean; // Optional field for favorites
  }