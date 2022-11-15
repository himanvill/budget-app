import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/modals/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetAmout: number = 0;
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    console.log(newItem.amount);
    this.budgetAmout = this.budgetAmout + newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.budgetAmout = this.budgetAmout - item.amount;
  }

  updateEvent(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;
    this.budgetAmout -= updateEvent.old.amount;
    this.budgetAmout += updateEvent.new.amount;
  }
}
