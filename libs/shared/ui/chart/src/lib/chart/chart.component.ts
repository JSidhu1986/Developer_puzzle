import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data$: Observable<any>;
  chartData: any;
  error: any;
  errorMessage: string = '';

  chart: {
    title: string;
    type: string;
    data: [];
    columnNames: string[];
    options: any;
  };
  constructor(private cd: ChangeDetectorRef, private action$: Actions) {}

  ngOnInit() {
    this.chart = {
      title: 'Stock Price History Chart',
      type: 'LineChart',
      data: [],
      columnNames: ['period', 'close'],
      options: { title: `Stock price`, width: '600', height: '400' }
    };

    this.data$.subscribe(newData => {
      this.chartData = newData;
      this.errorMessage = '';
    });

    this.action$.pipe(ofType('priceQuery.error')).subscribe(error => {
      this.error = error;
      this.errorMessage = 'No data available for the selected option due to: ' + this.error.error.error;
    })
  }
}
