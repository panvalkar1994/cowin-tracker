import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionByPinComponent } from './session-by-pin.component';

describe('SessionByPinComponent', () => {
  let component: SessionByPinComponent;
  let fixture: ComponentFixture<SessionByPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionByPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionByPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
