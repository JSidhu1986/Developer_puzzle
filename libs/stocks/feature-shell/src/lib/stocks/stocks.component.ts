import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { MatDatepickerInputEvent } from '@angular/material/datepicker'
import moment from "moment";

@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stockPickerForm: FormGroup;
  symbol: string;
  selectedFromDate: string;
  selectedToDate: string
  maxDate = new Date();
  quotes$ = this.priceQuery.priceQueries$;

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
    this.stockPickerForm = fb.group({
      symbol: [null, Validators.required],
      selectedFromDate: [null, Validators.required],
      selectedToDate: [null, Validators.required]
    });
  }

  ngOnInit() {}

  fetchQuote() {
    if (this.stockPickerForm.valid) {
      const { symbol, selectedFromDate,  selectedToDate} = this.stockPickerForm.value;
      const fromDate = moment(selectedFromDate).format('YYYY-MM-DD');
      let toDate = moment(selectedToDate).format('YYYY-MM-DD');
      if(toDate < fromDate) {
        toDate = fromDate;
      }
      this.priceQuery.fetchQuote(symbol, "max", fromDate, toDate);
    }
  }
}
