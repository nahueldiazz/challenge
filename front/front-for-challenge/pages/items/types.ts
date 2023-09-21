

interface Item{
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
    sold_quantity: number;
    description: string;
}
export interface Author {
    name: string;
    lastname: string;
  }

export interface DescriptionItemsTypes {
   item: Item;
   author: Author;
  }

interface Items {
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

  export interface ItemsResponse{
    items:Items[]
  }


