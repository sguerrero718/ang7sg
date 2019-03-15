import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeebassComponent } from './seebass.component';

describe('SeebassComponent', () => {
  let component: SeebassComponent;
  let fixture: ComponentFixture<SeebassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeebassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeebassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
