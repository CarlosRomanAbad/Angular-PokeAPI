import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponse } from '../interfaces/item-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(offset?:number): Observable<ItemResponse> {
    return this.http.get<ItemResponse>(`https://pokeapi.co/api/v2/item?limit=12${offset ? `&offset=${offset}` : ''}`);
  }

  getItemId(url: string): number {
    return parseInt(url.split('/').filter(x => x).pop() || '0');
  }



  
  createImgUrl(name: string): string {
    
    return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`
  }
}