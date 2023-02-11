import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogStudentComponent } from './add-dialog-student.component';

describe('AddDialogStudentComponent', () => {
  let component: AddDialogStudentComponent;
  let fixture: ComponentFixture<AddDialogStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDialogStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
