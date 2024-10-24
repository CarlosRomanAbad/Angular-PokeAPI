import { Component, HostListener, OnInit } from '@angular/core';
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

  offset: number = 36;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((data: ItemResponse) => {
      this.itemList = data.results;
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ( ( document.documentElement.clientHeight + window.scrollY ) 
          >= document.documentElement.scrollHeight ) {
  
      this.concatNextItemPage();

    }
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
  
    this.offset += 36;
  
  }
 
}