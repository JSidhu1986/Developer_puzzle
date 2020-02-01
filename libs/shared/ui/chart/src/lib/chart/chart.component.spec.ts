import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { Observable } from "rxjs"

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GoogleChartsModule
      ],
      declarations: [ ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.data$ = new Observable((observer) => {
      observer.next("bla bla bla")
      observer.complete()
    });
    component.error$ = new Observable((observer) => {
      observer.next("bla bla bla")
      observer.complete()
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
