import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanalyticsComponent } from './advanalytics.component';

describe('AdvanalyticsComponent', () => {
  let component: AdvanalyticsComponent;
  let fixture: ComponentFixture<AdvanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
