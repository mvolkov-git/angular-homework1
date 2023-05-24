import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDetailsComponent } from './resume-details.component';

describe('ResumeDetailsComponent', () => {
  let component: ResumeDetailsComponent;
  let fixture: ComponentFixture<ResumeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeDetailsComponent]
    });
    fixture = TestBed.createComponent(ResumeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
