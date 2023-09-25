export interface Item {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
  }
  
  export interface Author {
    name: string;
    lastname: string;
  }
  
  export interface ApiResponse {
    author: Author;
    categories: string[];
    items: Item[];
  }