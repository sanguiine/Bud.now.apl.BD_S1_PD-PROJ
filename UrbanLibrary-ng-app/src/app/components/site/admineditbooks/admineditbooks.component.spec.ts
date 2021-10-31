import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditbooksComponent } from './admineditbooks.component';

describe('AdmineditbooksComponent', () => {
  let component: AdmineditbooksComponent;
  let fixture: ComponentFixture<AdmineditbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
