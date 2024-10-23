import { Component, OnInit } from '@angular/core';
import { Item, ItemResponse } from '../../interfaces/item-list.interface';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: Item[] = [];

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

 
}