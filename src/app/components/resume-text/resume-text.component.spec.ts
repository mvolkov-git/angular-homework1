import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTextComponent } from './resume-text.component';

describe('ResumeTextComponent', () => {
  let component: ResumeTextComponent;
  let fixture: ComponentFixture<ResumeTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeTextComponent]
    });
    fixture = TestBed.createComponent(ResumeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
