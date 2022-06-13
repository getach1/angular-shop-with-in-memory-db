import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items$?: Observable<Item[]>;
  constructor(
    private itemsService: ItemService
  ) { }

  ngOnInit(): void {
    this.items$ = this.itemsService.getAll();
  }
}
