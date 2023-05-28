import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrNumComponent } from './arr-num.component';

describe('ArrNumComponent', () => {
  let component: ArrNumComponent;
  let fixture: ComponentFixture<ArrNumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrNumComponent]
    });
    fixture = TestBed.createComponent(ArrNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
