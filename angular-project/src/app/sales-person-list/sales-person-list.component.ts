import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
  new SalesPerson("revanth", "arjula", "rev@gmail.com", 100000),
  new SalesPerson("meghana", "vuppu", "vuppu@gmail.com", 100000),
  new SalesPerson("vijaya", "arjula", "vijaya@gmail.com", 90000),
  new SalesPerson("vinni", "arjula", "vinni@gmail.com", 80000)];


  constructor() { }

  ngOnInit(): void {
  }

}
