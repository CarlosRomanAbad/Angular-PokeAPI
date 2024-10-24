import { Component, OnInit } from '@angular/core';
import { Item, ItemResponse } from '../../interfaces/item-list.interface';
import { ItemService } from '../../services/item.service';
import { offset } from '@popperjs/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: Item[] = [];

  offset: number = 12;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((data: ItemResponse) => {
      this.itemList = data.results;
    });
  }

  getItemId(url: string): number {
    return this.itemService.getItemId(url);
  }

  createImgUrl(url: string): string {
    return this.itemService.createImgUrl(url);
  }

  concatNextItemPage(): void{

    this.itemService.getAllItems(this.offset).subscribe((x: ItemResponse) => {
  
      this.itemList.push(...x.results);
  
    });
  
    this.offset += 12;
  
  }
 
}