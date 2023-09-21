import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Author, Item } from './entities/itemsResponse';
import { ItemResponse } from './entities/item';


@Injectable()
export class AppService {
  private readonly author : Author;

  constructor(){
    this.author = {
      name: 'Nahuel',
      lastname: 'Diaz',
    };
  }
 async getSearch(search:string) {
   try {   
    const searchMeli = await axios.get('https://api.mercadolibre.com/sites/MLA/search', {
      params: {
        q: search
       }
     })
     
     if (!searchMeli?.data) {
      throw new HttpException('search not found', 404);
     }
     const categories: string[] = ['Electronics', 'Clothing', 'Books'];
 
     const items: Item[] = searchMeli.data.results.slice(0,4).map(item => ({
         id: item.id,
         title: item.title,
         price: {
           currency: item.currency_id,
           amount: item.price,
           decimals: 50,
         },
         picture: item. thumbnail,
         condition: item.condition,
         free_shipping: item.shipping.free_shipping,
     })) 
 
     return {
       author: this.author,
       categories,
       items
     }
   } catch (error) {
    console.error(error.message)
    throw error
   }
  }

  async getItemById(id:string){

  try {
      const [responseIDMeli, responseDescription]: any = await Promise.all([
        axios.get(`https://api.mercadolibre.com/items/${id}`).then(response => response.data).catch(()=>{
          throw new HttpException('ID not found', 404);}
        ),
        axios.get(`https://api.mercadolibre.com/items/${id}/description`).then(response => response.data).catch(()=>{
          throw new HttpException('ID not found', 404);}
        )
      ])
  
      const item: ItemResponse = {
        id: responseIDMeli.id,
        title: responseIDMeli.title,
        price: {
          currency: responseIDMeli.currency_id,
          amount: responseIDMeli.price,
          decimals: 50,
        },
        picture: responseIDMeli.thumbnail,
        condition: responseIDMeli.new,
        free_shipping: responseIDMeli?.shipping?.free_shipping,
        sold_quantity: responseIDMeli.sold_quantity,
        description: responseDescription.plain_text,
      }
      return {
        author: this.author,
        item
      }
  } catch (error) {
    console.error(error.message)
    throw error
  }
  }
}
