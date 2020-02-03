import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { PRICEQUERY_ERROR_MESSAGE } from '@coding-challenge/stocks/data-access-app-config'

@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data$: Observable<any>;
  @Input() error$: Observable<any>;
  private dataSubscription;
  private errorSubscription;
  chartData: any;
  errorMessage = '';
  isError = false;

  chart: {
    title: string;
    type: string;
    data: [];
    columnNames: string[];
    options: any;
  };
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.chart = {
      title: 'Stock Price History Chart',
      type: 'LineChart',
      data: [],
      columnNames: ['period', 'close'],
      options: { title: `Stock price`, width: '600', height: '400' }
    };

    this.dataSubscription = this.data$.subscribe(newData => {
      this.chartData = newData;
      this.isError = false;
    });

    this.errorSubscription = this.error$.subscribe(error => {
      this.isError = true;
      this.errorMessage = PRICEQUERY_ERROR_MESSAGE + error.error;
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }
}
