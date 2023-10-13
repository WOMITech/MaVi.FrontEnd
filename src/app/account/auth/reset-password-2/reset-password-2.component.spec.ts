import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassword2Component } from './reset-password-2.component';

describe('Register2Component', () => {
  let component: ResetPassword2Component;
  let fixture: ComponentFixture<ResetPassword2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassword2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
