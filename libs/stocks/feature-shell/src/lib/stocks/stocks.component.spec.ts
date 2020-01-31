import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material'; 
import { StocksComponent } from './stocks.component';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { SharedUiChartModule } from '@coding-challenge/shared/ui/chart';
import { Store, StoreModule  } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        SharedUiChartModule,
        StoreModule.forRoot({}),
        MatInputModule,
        NoopAnimationsModule
    ],
      declarations: [ StocksComponent ],
      providers: [ PriceQueryFacade, Store, Actions, ofType ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
