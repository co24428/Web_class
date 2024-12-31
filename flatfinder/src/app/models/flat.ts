export interface Flat {
    id: string;
    city: string;
    rentPrice: number;
    areaSize: number;
    owner: string; // User ID
    isFavorite?: boolean; // Optional field for favorites
  }