import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreservationsComponent } from './adminreservations.component';

describe('AdminreservationsComponent', () => {
  let component: AdminreservationsComponent;
  let fixture: ComponentFixture<AdminreservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminreservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
